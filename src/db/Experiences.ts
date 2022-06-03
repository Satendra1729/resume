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
          { skill: "React", color: "expert" },
          { skill: "AWS", color: "proficient" },
        ],
        duration: "December 2019",
      },
      {
        projectName: "Dcoument Miner",
        skillSets: [
          { skill: "Python", color: "competent" },
          { skill: "Cherrypy", color: "competent" },
          { skill: "SQLite", color: "expert" },
          { skill: "Docker", color: "proficient" },
        ],
        duration: "December 2019",
      },
      {
        projectName: "Voting Meter",
        skillSets: [
          { skill: "Python", color: "competent" },
          { skill: "React", color: "proficient" },
        ],
        duration: "December 2019",
      },
      {
        projectName: "Safe Escrow",
        skillSets: [
          { skill: "C#", color: "expert" },
          { skill: "SQL", color: "proficient" },
          { skill: "AWS", color: "proficient" },
        ],
        duration: "December 2019",
      },
      {
        projectName: "Title Port",
        skillSets: [
          { skill: "C#", color: "expert" },
          { skill: "SQL", color: "proficient" },
          { skill: "AWS", color: "proficient" },
        ],
        duration: "December 2019",
      }
    ],
    direction: "left" as "left" | "right",
    location: "Bangalore",
    designation: "Senior Software Engineer",
    startTime: "June 2018",
    eventSrNumber: 1,
  },
  {
    id: "PAOPC",
    companyName: "Prozio Analytics Pvt Ltd (OPC)",
    projects: [
      {
        projectName: "Unified Electricity Bill Portal",
        skillSets: [
          { skill: "C#", color: "competent" },
          { skill: "Dotnet Core", color: "competent" },
        ],
        duration: "December 2019",
      },
      {
        projectName: "Bill Parser",
        skillSets: [
          { skill: "C#", color: "competent" },
          { skill: "GIT", color: "expert" },
        ],
        duration: "December 2019",
      },
    ],
    direction: "right" as "left" | "right",
    location: "Bangalore",
    designation: "Software Engineer",
    startTime: "Oct 2018",
    eventSrNumber: 1,
  },
  {
    id: "CBLD",
    companyName: "CBL Data Science Pvt Ltd",
    projects: [
      {
        projectName: "Unified Electricity Bill Portal",
        skillSets: [
          { skill: "C#", color: "competent" },
          { skill: "GIT", color: "expert" },
        ],
        duration: "December 2019",
      },
      {
        projectName: "Bill Parser",
        skillSets: [
          { skill: "C#", color: "competent" },
          { skill: "GIT", color: "expert" },
        ],
        duration: "December 2019",
      },
    ],
    direction: "left" as "left" | "right",
    location: "Bangalore",
    designation: "Software Engineer",
    startTime: "Oct 2018",
    eventSrNumber: 1,
  },
  {
    id: "GT",
    companyName: "Gestalt Technologies Pvt Ltd",
    projects: [
      {
        projectName: "Unified Electricity Bill Portal",
        skillSets: [
          { skill: "C#", color: "competent" },
          { skill: "GIT", color: "expert" },
        ],
        duration: "December 2019",
      },
      {
        projectName: "Bill Parser",
        skillSets: [
          { skill: "C#", color: "competent" },
          { skill: "GIT", color: "expert" },
        ],
        duration: "December 2019",
      },
    ],
    direction: "right" as "left" | "right",
    location: "Bangalore",
    designation: "Software Engineer",
    startTime: "Oct 2018",
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
    startTime: "July 2014",
    eventSrNumber: 1,
  },
] as Experience[];
