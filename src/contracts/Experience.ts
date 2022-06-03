import { skillStrength } from "./SkillColor";

export interface Skill {
  skill: string;
  color: skillStrength;
}

export interface Experience {
  id: string;
  companyName: string;
  projects: {
    projectName: string;
    skillSets: Skill[];
    duration: string;
  }[];
  direction: "left" | "right";
  location: string;
  designation: string;
  startTime: string;
  endTime: string;
  eventSrNumber: number;
}
