"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./page.css";
import { content, published } from "../lib/content/static";
import JourneyTimeline, { type JourneyItem } from "../components/journey/JourneyTimeline";
import CursorTrail from "../components/visuals/CursorTrail";
const styles = {
  site: "site",
  hero: "hero",
  heroCopy: "heroCopy",
  eyebrow: "eyebrow",
  lede: "lede",
  actions: "actions",
  primary: "primary",
  secondary: "secondary",
  socials: "socials",
  portrait: "portrait",
  portraitFrame: "portraitFrame",
  stamp: "stamp",
  section: "section",
  sectionLabel: "sectionLabel",
  aboutGrid: "aboutGrid",
  bodyCopy: "bodyCopy",
  facts: "facts",
  tinted: "tinted",
  sectionHeading: "sectionHeading",
  filters: "filters",
  activeFilter: "activeFilter",
  skillGrid: "skillGrid",
  skillGroup: "skillGroup",
  projectGrid: "projectGrid",
  projectCard: "projectCard",
  projectNumber: "projectNumber",
  tags: "tags",
  contact: "contact",
  email: "email",
  contactLinks: "contactLinks",
  cursorOrb: "cursorOrb",
};
const skillCategories = [
  "Frontend",
  "Backend",
  "Database",
  "Mobile Development",
  "Cloud",
  "Tools",
  "Other",
];
const skills = skillCategories
  .map(
    (category) =>
      [
        category,
        ...published.skills
          .filter((skill) => skill.category === category)
          .map((skill) => skill.name),
      ] as const,
  )
  .filter((group) => group.length > 1);
const projects = published.projects.map((project) => ({
  ...project,
  href: project.liveDemoUrl || project.githubUrl || "#projects",
}));
const educationItems: JourneyItem[] = published.education.map((entry) => ({
  id: entry.id,
  title: entry.degree,
  organization: entry.institution,
  period: `${entry.startYear} — ${entry.endYear}`,
  description: entry.description,
  location: entry.location,
  details: entry.details,
}));
function formatDate(value: string) {
  const [year, month] = value.split("-").map(Number);
  return new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(
    new Date(year, month - 1),
  );
}
const experienceItems: JourneyItem[] = published.experience.map((entry) => ({
  id: entry.id,
  title: entry.jobTitle,
  organization: entry.company,
  period: `${formatDate(entry.startDate)} — ${entry.currentlyWorking ? "Present" : formatDate(entry.endDate ?? entry.startDate)}`,
  description: entry.description,
  location: entry.location,
  current: entry.currentlyWorking,
  details: [...entry.responsibilities, ...entry.achievements],
  technologies: entry.technologies,
  projects: published.workProjects.filter((project) => entry.projectIds.includes(project.id)),
}));
export default function Home() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? skills : skills.filter(([n]) => n === filter);
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = document.querySelectorAll<HTMLElement>("main section");
    const cards = document.querySelectorAll<HTMLElement>(
      ".projectCard, .skillGroup, .journeyCard, .journeyEmpty",
    );

    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    [...sections, ...cards].forEach((element) => {
      element.classList.add("reveal-ready");
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
        document.documentElement.style.setProperty("--scroll-progress", String(progress));
      });
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);
  return (
    <div className={styles.site}>
      <div className="cursorAura" aria-hidden="true" />
      <CursorTrail />
      <div className={styles.cursorOrb} aria-hidden="true" />
      <main>
        <section id="home" className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              {content.profile.title} · {content.profile.location}
            </p>
            <h1>
              Building digital
              <br />
              <em>experiences</em> that matter.
            </h1>
            <p className={styles.lede}>
              I’m {content.profile.name} — {content.profile.shortIntroduction}
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href="#projects">
                View my work ↗
              </a>
              <a className={styles.secondary} href="#contact">
                Let’s connect
              </a>
            </div>
            <div className={styles.socials}>
              <a href="https://github.com/savrahul" target="_blank">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/rahul-savsani-57198b251" target="_blank">
                LinkedIn ↗
              </a>
            </div>
          </div>
          <div className={styles.portrait}>
            <div className={styles.portraitFrame}>
              <Image
                src="/images/Rahul_photo.jpg"
                alt="Rahul Savsani"
                fill
                priority
                sizes="(max-width:700px) 80vw,38vw"
              />
            </div>
          </div>
        </section>
        {content.settings.showAbout && (
          <section id="about" className={styles.section}>
            <div className={styles.sectionLabel}>01 / ABOUT</div>
            <div className={styles.aboutGrid}>
              <div>
                <h2>
                  Curious by nature.
                  <br />
                  <em>Driven by craft.</em>
                </h2>
              </div>
              <div className={styles.bodyCopy}>
                <p>{content.profile.biography}</p>
                <p>
                  My approach is grounded in curiosity, collaboration, and continuous learning. I
                  enjoy bridging the gap between technical and non-technical teams to make ideas
                  real.
                </p>
                <div className={styles.facts}>
                  <span>
                    <b>{content.profile.experienceYears}+</b> years experience
                  </span>
                  <span>
                    <b>{published.skills.length}</b> technologies
                  </span>
                  <span>
                    <b>{content.profile.languages.length}</b> languages spoken
                  </span>
                </div>
                <div className="profileExtras">
                  <div>
                    <h3>Languages</h3>
                    <p>{content.profile.languages.join(" · ")}</p>
                  </div>
                  <div>
                    <h3>Outside work</h3>
                    <p>{content.profile.interests.join(" · ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {content.settings.showExperience && (
          <section id="experience" className={styles.section}>
            <div className={styles.sectionLabel}>02 / EXPERIENCE</div>
            <div className={styles.sectionHeading}>
              <h2>
                The work behind
                <br />
                <em>the work.</em>
              </h2>
              <p>Roles, teams, and the projects built along the way.</p>
            </div>
            <JourneyTimeline
              items={experienceItems}
              kind="experience"
              emptyMessage="Experience details are being added. Check back soon."
            />
          </section>
        )}
        {content.settings.showEducation && (
          <section id="education" className={`${styles.section} ${styles.tinted}`}>
            <div className={styles.sectionLabel}>03 / EDUCATION</div>
            <div className={styles.sectionHeading}>
              <h2>
                A path of
                <br />
                <em>learning.</em>
              </h2>
              <p>Academic milestones that shaped my foundation in technology.</p>
            </div>
            <JourneyTimeline
              items={educationItems}
              kind="education"
              emptyMessage="Education milestones will appear here soon."
            />
          </section>
        )}
        {content.settings.showSkills && (
          <section id="skills" className={`${styles.section} ${styles.tinted}`}>
            <div className={styles.sectionLabel}>04 / TOOLKIT</div>
            <div className={styles.sectionHeading}>
              <h2>
                Tools of the
                <br />
                <em>trade.</em>
              </h2>
              <p>Technologies I use to turn concepts into reliable, scalable products.</p>
            </div>
            <div className={styles.filters}>
              {["All", ...skills.map(([name]) => name)].map((item) => (
                <button
                  key={item}
                  className={filter === item ? styles.activeFilter : ""}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className={styles.skillGrid}>
              {visible.map(([name, ...items]) => (
                <div className={styles.skillGroup} key={name}>
                  <h3>{name}</h3>
                  <div>
                    {items.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        {content.settings.showProjects && (
          <section id="projects" className={styles.section}>
            <div className={styles.sectionLabel}>05 / SELECTED WORK</div>
            <div className={styles.sectionHeading}>
              <h2>
                Things I’ve
                <br />
                <em>made.</em>
              </h2>
              <p>
                A selection of projects showcasing my approach to product, engineering, and design.
              </p>
            </div>
            <div className={styles.projectGrid}>
              {projects.map((project, index) => (
                <a
                  className={styles.projectCard}
                  href={project.href}
                  target={project.liveDemoUrl || project.githubUrl ? "_blank" : undefined}
                  rel={project.liveDemoUrl || project.githubUrl ? "noopener noreferrer" : undefined}
                  key={project.id}
                >
                  <div className={styles.projectNumber}>0{index + 1}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.details && <p className="projectDetail">{project.details}</p>}
                  <div className={styles.tags}>
                    {project.technologies.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <strong>
                    {project.liveDemoUrl || project.githubUrl
                      ? "View project ↗"
                      : "See role context ↓"}
                  </strong>
                </a>
              ))}
            </div>
          </section>
        )}
        {content.settings.showContact && (
          <section id="contact" className={`${styles.contact} ${styles.tinted}`}>
            <div className={styles.sectionLabel}>06 / CONTACT</div>
            <h2>
              Let’s make something
              <br />
              <em>meaningful.</em>
            </h2>
            <p>Have an idea, an opportunity, or simply want to say hello?</p>
            <a className={styles.email} href={`mailto:${content.profile.email}`}>
              {content.profile.email} ↗
            </a>
            <div className={styles.contactLinks}>
              <a href={`tel:${content.profile.phone}`}>{content.profile.phone}</a>
              {published.socialLinks
                .filter((link) => link.platform !== "email")
                .map((link) => (
                  <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.id}>
                    {link.label} ↗
                  </a>
                ))}
            </div>
          </section>
        )}
      </main>
      <footer>
        <span>© 2024 Rahul Savsani</span>
        <span>Designed & built with care</span>
      </footer>
    </div>
  );
}
