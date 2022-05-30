import { Event } from "../contracts/Event";

export const Events = [
  {
    id: "FAI",
    companyName: "First American Pvt Ltd",
    projects: [
      {
        projectName: "LoansPQ",
        skillSets: [
          { skill: "C#", color: "red" },
          { skill: "Dotnet Core", color: "red" },
          { skill: "GIT", color: "black" },
          { skill: "AWS", color: "brown" },
          { skill: "React", color: "blue" },
        ],
        duration: "December 2019",
      },
      {
        projectName: "Dcoument Miner",
        skillSets: [
          { skill: "Python", color: "red" },
          { skill: "Cherrypy", color: "red" },
          { skill: "SQLite", color: "black" },
          { skill: "Docker", color: "brown" },
        ],
        duration: "December 2019",
      },
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
          { skill: "C#", color: "red" },
          { skill: "Dotnet Core", color: "red" },
        ],
        duration: "December 2019",
      },
      {
        projectName: "Bill Parser",
        skillSets: [
          { skill: "C#", color: "red" },
          { skill: "GIT", color: "black" },
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
          { skill: "C#", color: "red" },
          { skill: "GIT", color: "black" },
        ],
        duration: "December 2019",
      },
      {
        projectName: "Bill Parser",
        skillSets: [
          { skill: "C#", color: "red" },
          { skill: "GIT", color: "black" },
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
          { skill: "C#", color: "red" },
          { skill: "GIT", color: "black" },
        ],
        duration: "December 2019",
      },
      {
        projectName: "Bill Parser",
        skillSets: [
          { skill: "C#", color: "red" },
          { skill: "GIT", color: "black" },
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
          { skill: "Matlab", color: "red" },
          { skill: "Image Processing", color: "black" },
          { skill: "Latex", color: "black" },
        ],
        duration: "December 2015",
      },
      {
        projectName: "Biodegradable Methods of Polymers",
        skillSets: [
          { skill: "Journalism", color: "red" },
          { skill: "Image Processing", color: "black" },
          { skill: "Latex", color: "black" },
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
] as Event[];
