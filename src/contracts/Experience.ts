import { ISkill, TSkillStrength } from "./SkillTypes";


export type leftright = "left" | "right"; 
export interface IExperience {
  id: string;
  companyName: string;
  projects: {
    projectName: string;
    skillSets: ISkill[];
    duration: string;
  }[];
  direction: leftright;
  location: string;
  designation: string;
  startTime: string;
  endTime: string;
  eventSrNumber: number;
}
