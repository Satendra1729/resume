import { Experience } from "../contracts/Experience";

export const Experiences = [
  {
    id: "FAI",
    companyName: "First American Pvt Ltd",
    projects: [
      {
        projectName: "LoansPQ",
        skillSets: [
          { skill: "C#", color: "expert" },
          { skill: "Dotnet Core", color: "expert" },
          { skill: "GIT", color: "expert" },
          { skill: "AWS", color: "proficient" },
        ],
        duration: "Jan 20 - Jun 20",
      },
      {
        projectName: "Dcoument Miner",
        skillSets: [
          { skill: "Python", color: "competent" },
          { skill: "Cherrypy", color: "competent" },
          { skill: "SQLite", color: "expert" },
          { skill: "Docker", color: "proficient" },
        ],
        duration: "Feb 20 - Apr 20",
      },
      {
        projectName: "Safe Escrow",
        skillSets: [
          { skill: "C#", color: "expert" },
          { skill: "SQL", color: "proficient" },
          { skill: "AWS", color: "proficient" },
        ],
        duration: "Jun 19 - Dec 19",
      },
      {
        projectName: "Voting Meter",
        skillSets: [
          { skill: "Python", color: "competent" },
          { skill: "React", color: "proficient" },
        ],
        duration: "May 19",
      },
      {
        projectName: "Title Port",
        skillSets: [
          { skill: "C#", color: "expert" },
          { skill: "SQL", color: "proficient" },
          { skill: "AWS", color: "proficient" },
        ],
        duration: "Aug 18 - Mar 18",
      },
    ],
    direction: "left" as "left" | "right",
    location: "Bengaluru",
    designation: "Senior Software Engineer",
    startTime: "June 2018",
    eventSrNumber: 1,
  },
  {
    id: "PAOPC",
    companyName: "Proziod Analytics Pvt Ltd (OPC)",
    projects: [
      {
        projectName: "Unified Electricity Bill Portal",
        skillSets: [
          { skill: "C#", color: "competent" },
          { skill: "Dotnet Framework", color: "competent" },
        ],
        duration: "Jan 18 - Apr 18",
      },
      {
        projectName: "Bill Parser",
        skillSets: [
          { skill: "C#", color: "competent" },
          { skill: "GIT", color: "expert" },
        ],
        duration: "Nov 17 - Jun 18",
      },
    ],
    direction: "right" as "left" | "right",
    location: "Bengaluru",
    designation: "Software Engineer",
    startTime: "Nov 2017",
    eventSrNumber: 1,
  },
  {
    id: "CBLD",
    companyName: "CBL Data Science Pvt Ltd",
    projects: [
      {
        projectName: "Company Finder",
        skillSets: [
          { skill: "C#", color: "competent" },
          { skill: "Windows Forms", color: "competent" },
          { skill: "Python", color: "expert" },
        ],
        duration: "Dec 16 - Feb 17",
      },
      {
        projectName: "Data Warehouse of Companies Data",
        skillSets: [
          { skill: "C#", color: "expert" },
          { skill: "Python", color: "expert" },
          { skill: "Azure", color: "competent" },
        ],
        duration: "Feb 17 - Sep 17",
      },
      {
        projectName: "Pdf Minner",
        skillSets: [
          { skill: "C#", color: "competent" },
        ],
        duration: "Jun 17 - Aug 17",
      },
      {
        projectName: "GST, EPFO, PAN Scraper",
        skillSets: [
          { skill: "Python", color: "expert" },
        ],
        duration: "Feb 17 - Oct 17",
      },
      {
        projectName: "Companies Legal Scraper",
        skillSets: [
          { skill: "Python", color: "expert" },
        ],
        duration: "Feb 17 - Oct 17",
      },
      {
        projectName: "Credit Ratings, TAN Scraper",
        skillSets: [
          { skill: "Python", color: "expert" },
        ],
        duration: "Feb 17 - Oct 17",
      },
    ],
    direction: "left" as "left" | "right",
    location: "Bengaluru",
    designation: "Software Engineer",
    startTime: "Oct 2016",
    eventSrNumber: 1,
  },
  {
    id: "GT",
    companyName: "Gestalt Technologies Pvt Ltd",
    projects: [
      {
        projectName: "Oncology Patient Managment",
        skillSets: [
          { skill: "C#", color: "competent" },
          { skill: "Windows Forms", color: "expert" },
        ],
        duration: "Aug 16 - Dec 16",
      },
      {
        projectName: "Online Patient Appointment portal",
        skillSets: [
          { skill: "C#", color: "competent" },
          { skill: "Windows Forms", color: "expert" },
        ],
        duration: "Jan 16 - Mar 16",
      },
    ],
    direction: "right" as "left" | "right",
    location: "Bengaluru",
    designation: "Software Engineer",
    startTime: "Feb 2015",
    eventSrNumber: 1,
  },
  {
    id: "MNINT",
    companyName: "Motilal Nehru National Institute of Technology",
    projects: [
      {
        projectName: "Eyes Controlled Wheel Chair",
        skillSets: [
          { skill: "Matlab", color: "competent" },
          { skill: "Image Processing", color: "expert" },
          { skill: "Latex", color: "expert" },
        ],
        duration: "December 2015",
      },
      {
        projectName: "Biodegradable Methods of Polymers",
        skillSets: [
          { skill: "Journalism", color: "competent" },
          { skill: "Image Processing", color: "expert" },
          { skill: "Latex", color: "expert" },
        ],
        duration: "December 2019",
      },
    ],
    direction: "left" as "left" | "right",
    location: "Allahabad",
    designation: "M. Tech (Bio Medical)",
    startTime: "July 2012",
    eventSrNumber: 1,
  },
] as Experience[];
