import { IExperience } from "../contracts/Experience";
import { skillMap } from "./Skills";

export const Experiences = [
  {
    id: "FAI",
    companyName: "First American Pvt Ltd",
    companyWebsite : "http://www.firstam.co.in/",
    projects: [
      {
        projectName: "LoansPQ",
        skillSets: [skillMap.CS, skillMap.DC, skillMap.GIT, skillMap.AWS],
        duration: "Jan 20 - Jun 20",
      },
      {
        projectName: "Dcoument Miner",
        skillSets: [skillMap.PY, skillMap.CH, skillMap.SQL, skillMap.DO],
        duration: "Feb 20 - Apr 20",
      },
      {
        projectName: "Safe Escrow",
        skillSets: [skillMap.CS, skillMap.SQL, skillMap.AWS],
        duration: "Jun 19 - Dec 19",
      },
      {
        projectName: "Voting Meter",
        skillSets: [skillMap.PY, skillMap.RT],
        duration: "May 19",
      },
      {
        projectName: "Title Port",
        skillSets: [skillMap.CS, skillMap.SQL, skillMap.AWS],
        duration: "Aug 18 - Mar 18",
      },
    ],
    direction: "left",
    location: "Bengaluru",
    designation: "Senior Software Engineer",
    startTime: "June 2018",
    eventSrNumber: 1,
  },
  {
    id: "PAOPC",
    companyName: "Proziod Analytics Pvt Ltd (OPC)",
    companyWebsite : "https://www.proziod.com/",
    projects: [
      {
        projectName: "Unified Electricity Bill Portal",
        skillSets: [skillMap.CS, skillMap.PY],
        duration: "Jan 18 - Apr 18",
      },
      {
        projectName: "Bill Parser",
        skillSets: [skillMap.CS, skillMap.GIT],
        duration: "Nov 17 - Jun 18",
      },
    ],
    direction: "right",
    location: "Bengaluru",
    designation: "Software Engineer",
    startTime: "Nov 2017",
    eventSrNumber: 1,
  },
  {
    id: "CBLD",
    companyName: "CBL Data Science Pvt Ltd",
    companyWebsite : "https://www.instafinancials.com/",
    projects: [
      {
        projectName: "Company Finder",
        skillSets: [skillMap.CS, skillMap.WF, skillMap.PY],
        duration: "Dec 16 - Feb 17",
      },
      {
        projectName: "Data Warehouse of Companies Data",
        skillSets: [skillMap.CS, skillMap.PY, skillMap.AZ],
        duration: "Feb 17 - Sep 17",
      },
      {
        projectName: "Pdf Minner",
        skillSets: [skillMap.CS],
        duration: "Jun 17 - Aug 17",
      },
      {
        projectName: "GST, EPFO, PAN Scraper",
        skillSets: [skillMap.PY],
        duration: "Feb 17 - Oct 17",
      },
      {
        projectName: "Companies Legal Scraper",
        skillSets: [skillMap.PY],
        duration: "Feb 17 - Oct 17",
      },
      {
        projectName: "Credit Ratings, TAN Scraper",
        skillSets: [skillMap.PY],
        duration: "Feb 17 - Oct 17",
      },
    ],
    direction: "left",
    location: "Bengaluru",
    designation: "Software Engineer",
    startTime: "Oct 2016",
    eventSrNumber: 1,
  },
  {
    id: "GT",
    companyName: "Gestalt Technologies Pvt Ltd",
    companyWebsite : "http://gestalttechindia.in/",
    projects: [
      {
        projectName: "Oncology Patient Managment",
        skillSets: [skillMap.CS, skillMap.WF],
        duration: "Aug 16 - Dec 16",
      },
      {
        projectName: "Online Patient Appointment portal",
        skillSets: [skillMap.CS, skillMap.WF],
        duration: "Jan 16 - Mar 16",
      },
    ],
    direction: "right",
    location: "Bengaluru",
    designation: "Software Engineer",
    startTime: "Feb 2015",
    eventSrNumber: 1,
  },
  {
    id: "MNINT",
    companyName: "Motilal Nehru National Institute of Technology",
    companyWebsite : "http://www.mnnit.ac.in/",
    projects: [
      {
        projectName: "Eyes Controlled Wheel Chair",
        skillSets: [skillMap.MT, skillMap.IP, skillMap.LT],
        duration: "December 2015",
      },
      {
        projectName: "Biodegradable Methods of Polymers",
        skillSets: [skillMap.IP, skillMap.LT],
        duration: "December 2019",
      },
    ],
    direction: "left",
    location: "Allahabad",
    designation: "M. Tech (Bio Medical)",
    startTime: "July 2012",
    eventSrNumber: 1,
  },
] as IExperience[];


export const getProjectList = (skillId  : string ) => {
  const projectList = []; 
  for(const o of Experiences){
    for(const project of o.projects)
      for(const skill of project.skillSets)
        if(skill.skillId === skillId)
          projectList.push(project.projectName)
  }
  return projectList; 
}