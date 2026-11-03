import profileJson from "../../content/profile.json";
import skillsJson from "../../content/skills.json";
import projectsJson from "../../content/projects.json";
import workProjectsJson from "../../content/work-projects.json";
import experienceJson from "../../content/experience.json";
import educationJson from "../../content/education.json";
import socialLinksJson from "../../content/social-links.json";
import settingsJson from "../../content/site-settings.json";

export type EducationEntry = {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startYear: string;
  endYear: string;
  description: string;
  location: string;
  details: string[];
};
export type Project = (typeof projectsJson)[number];

export type ExperienceEntry = {
  id: string;
  company: string;
  jobTitle: string;
  startDate: string;
  endDate: string | null;
  currentlyWorking: boolean;
  published: boolean;
  description: string;
  location: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  projectIds: string[];
};

export const content = {
  profile: profileJson,
  skills: skillsJson,
  projects: projectsJson,
  workProjects: workProjectsJson,
  experience: experienceJson as ExperienceEntry[],
  education: educationJson as EducationEntry[],
  socialLinks: socialLinksJson,
  settings: settingsJson,
};

export const published = {
  skills: content.skills
    .filter((item) => item.visible)
    .sort((a, b) => a.displayOrder - b.displayOrder),
  projects: content.projects
    .filter((item) => item.published)
    .sort((a, b) => a.displayOrder - b.displayOrder),
  workProjects: content.workProjects
    .filter((item) => item.published)
    .sort((a, b) => a.displayOrder - b.displayOrder),
  experience: content.experience
    .filter((item) => item.published)
    .sort((a, b) => b.startDate.localeCompare(a.startDate)),
  education: content.education.sort((a, b) => b.startYear.localeCompare(a.startYear)),
  socialLinks: content.socialLinks
    .filter((item) => item.published)
    .sort((a, b) => a.displayOrder - b.displayOrder),
};
