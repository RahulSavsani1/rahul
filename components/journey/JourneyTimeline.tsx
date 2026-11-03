import type { Project } from "../../lib/content/static";

export type JourneyItem = {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  location?: string;
  current?: boolean;
  details: string[];
  technologies?: string[];
  projects?: Project[];
};

export default function JourneyTimeline({
  items,
  kind,
  emptyMessage,
}: {
  items: JourneyItem[];
  kind: "experience" | "education";
  emptyMessage: string;
}) {
  if (items.length === 0) {
    return (
      <p className="journeyEmpty" role="status">
        {emptyMessage}
      </p>
    );
  }

  return (
    <ol className={`journeyTimeline ${kind}`}>
      {items.map((item) => (
        <li className="journeyItem" key={item.id}>
          <span className="journeyNode" aria-hidden="true" />
          <article className="journeyCard">
            <div className="journeyMeta">
              <span>{item.period}</span>
              {item.current && <span className="currentBadge">Current</span>}
            </div>
            <h3>{item.title}</h3>
            <p className="journeyOrganization">{item.organization}</p>
            {item.location && <p className="journeyLocation">{item.location}</p>}
            <p className="journeyDescription">{item.description}</p>
            {item.projects && item.projects.length > 0 && (
              <div className="journeyProjectSummary">
                <h4>Projects at {item.organization}</h4>
                <div>
                  {item.projects.map((project) =>
                    project.liveDemoUrl || project.githubUrl ? (
                      <a
                        key={project.id}
                        href={project.liveDemoUrl || project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </a>
                    ) : (
                      <span key={project.id}>{project.title}</span>
                    ),
                  )}
                </div>
              </div>
            )}
            {(item.details.length > 0 ||
              (item.technologies?.length ?? 0) > 0 ||
              (item.projects?.length ?? 0) > 0) && (
              <details className="journeyDetails">
                <summary>Explore details</summary>
                {item.details.length > 0 && (
                  <ul>
                    {item.details.map((detail, index) => (
                      <li key={`${item.id}-detail-${index}`}>{detail}</li>
                    ))}
                  </ul>
                )}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="journeyTags" aria-label="Technologies used">
                    {item.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                )}
                {item.projects && item.projects.length > 0 && (
                  <div className="journeyProjects">
                    <h4>Projects at {item.organization}</h4>
                    {item.projects.map((project) => (
                      <article className="journeyProject" key={project.id}>
                        <h5>{project.title}</h5>
                        <p>{project.description}</p>
                        <div className="journeyTags">
                          {project.technologies.map((technology) => (
                            <span key={technology}>{technology}</span>
                          ))}
                        </div>
                        {(project.liveDemoUrl || project.githubUrl) && (
                          <a
                            href={project.liveDemoUrl || project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View project ↗
                          </a>
                        )}
                      </article>
                    ))}
                  </div>
                )}
              </details>
            )}
          </article>
        </li>
      ))}
    </ol>
  );
}
