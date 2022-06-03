import { Skill } from "./Experience";


export interface Intro {
    name : string;
    designation : string; 
    emailId : string;
    workExpirenceStartDate : Date; 
    github : string; 
    mobileNumber: string;
    resumeLink : string; 
    currentLocation : string;
    skillSets : Skill[]
}