import {Event} from '../contracts/Event'

export const Events = [
    {
        companyName: "First American Pvt Ltd",
        projects: [
          {
            projectName: "LoansPQ",
            skillSets: ["C#","Dotnet Core", "GIT","AWS","React"],
            duration: "December 2019",
          },{
            projectName: "Dcoument Miner",
            skillSets: ["Python","Cherrypy", "SQLite","Docker"],
            duration: "December 2019",
          },
        ],
        direction: "left" as "left" | "right",
        location: "Bangalore",
        designation: "Senior Software Engineer",
        startTime : "June 2018",
        eventSrNumber : 1
    },
    {
        companyName: "Prozio Analytics Pvt Ltd (OPC)",
        projects: [
          {
            projectName: "Unified Electricity Bill Portal",
            skillSets: ["C#", "git"],
            duration: "December 2019",
          },{
            projectName: "Bill Parser",
            skillSets: ["C#", "git"],
            duration: "December 2019",
          },
        ],
        direction: "right" as "left" | "right",
        location: "Bangalore",
        designation: "Software Engineer",
        startTime : "Oct 2018",
        eventSrNumber : 1
    },
    {
        companyName: "CBL Data Science Pvt Ltd",
        projects: [
          {
            projectName: "Unified Electricity Bill Portal",
            skillSets: ["C#", "git"],
            duration: "December 2019",
          },{
            projectName: "Bill Parser",
            skillSets: ["C#", "git"],
            duration: "December 2019",
          },
        ],
        direction: "left" as "left" | "right",
        location: "Bangalore",
        designation: "Software Engineer",
        startTime : "Oct 2018",
        eventSrNumber : 1
    },
    {
        companyName: "Gesttalt Technologies Pvt Ltd",
        projects: [
          {
            projectName: "Unified Electricity Bill Portal",
            skillSets: ["C#", "git"],
            duration: "December 2019",
          },{
            projectName: "Bill Parser",
            skillSets: ["C#", "git"],
            duration: "December 2019",
          },
        ],
        direction: "right" as "left" | "right",
        location: "Bangalore",
        designation: "Software Engineer",
        startTime : "Oct 2018",
        eventSrNumber : 1
    },
    {
        companyName: "Motilal Nehru National Institute of Technology",
        projects: [
          {
            projectName: "Eyes Controlled Wheel Chair",
            skillSets: ["Matlab", "Image Processing","Latex"],
            duration: "December 2015",
          },{
            projectName: "Biodegradable Methods of Polymers",
            skillSets: ["Journalism", "Latex"],
            duration: "December 2019",
          },
        ],
        direction: "left" as "left" | "right",
        location: "Allahabad",
        designation: "M. Tech (Bio Medical)",
        startTime : "July 2014",
        eventSrNumber : 1
    }

] as Event[]
