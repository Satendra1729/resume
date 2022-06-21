import { IIntro } from "../contracts/Intro";
import { getSkillSets } from "./Skills";

export const Introduction: IIntro = {
  name: "Satendra Kushwaha",
  designation: "Principle Software Engineer",
  emailId: "satendra1729@gmail.com",
  workExpirenceStartDate: new Date(2015, 2, 15, 0, 0, 0, 0),
  github: "https://github.com/Satendra1729",
  mobileNumber: "9632300925",
  resumeLink: "",
  skillSets: getSkillSets(),
  currentLocation: "Bengaluru (India)",
};
