import { ISkill } from "./SkillTypes";

export interface IIntro {
    name : string;
    designation : string; 
    emailId : string;
    workExpirenceStartDate : Date; 
    github : string; 
    mobileNumber: string;
    resumeLink : string; 
    currentLocation : string;
    skillSets : ISkill[]
}