import { ISkill, TSkills } from "../contracts/SkillTypes";

export const skillMap: { [key in TSkills]: ISkill } = {
  CS: {
    skill: "C#",
    color: "expert",
    skillId: "CS",
    skillDescription: [
      {
        group: "C# Features",
        repoLink: "https://github.com/Satendra1729",
        descriptionArray: [
          "Meta programing",
          "Pattern matching",
          "Exception fitering",
          "Caller information",
          "Static imports",
          "Asyncronous programing",
          "Static Local function",
          "Asyncronous Streams",
          "TPL",
          "Generators",
          "Closures",
          "Records",
          "Anonmous Functions and Types",
          "dynamic",
          "Reflections",
          "CLI",
          "Unit Test",
          "Performance Analysis"
        ],
      }, 
      {
        group: "Web API",
        repoLink: "https://github.com/Satendra1729",
        descriptionArray: [
          "Meta programing",
          "Pattern matching",
          "Exception fitering",
          "Caller information",
          "Static imports",
          "Asyncronous programing",
          "Static Local function",
          "Asyncronous Streams",
          "TPL",
          "Generators",
          "Closures",
          "Records",
          "Anonmous Functions and Types",
          "dynamic",
          "Reflections",
          "CLI",
          "Unit Test",
          "Performance Analysis"
        ],
      },
    ],
  },
  AZ: {
    skill: "Azure",
    color: "expert",
    skillId: "AZ",
  },
  AWS: {
    skill: "AWS",
    color: "expert",
    skillId: "AWS",
  },
  PY: {
    skill: "Python",
    color: "expert",
    skillId: "PY",
  },
  JS: {
    skill: "JavaScript",
    color: "expert",
    skillId: "JS",
  },
  RT: {
    skill: "React",
    color: "proficient",
    skillId: "RT",
  },
  SQL: {
    skill: "SQL",
    color: "proficient",
    skillId: "SQL",
  },
  CH: {
    skill: "Cherrypy",
    color: "proficient",
    skillId: "CH",
  },
  GIT: {
    skill: "Linux",
    color: "proficient",
    skillId: "GIT",
  },
  DC: {
    skill: "Dotnet Core",
    color: "proficient",
    skillId: "DC",
  },
  DO: {
    skill: "Docker",
    color: "proficient",
    skillId: "DO",
  },
  K8S: {
    skill: "Kubernetes",
    color: "proficient",
    skillId: "K8S",
  },
  DM: {
    skill: "Datamining",
    color: "expert",
    skillId: "DM",
  },
  LX: {
    skill: "Linux",
    color: "proficient",
    skillId: "LX",
  },
  WF: {
    skill: "Windows Form",
    color: "proficient",
    skillId: "WF",
  },
  MT: {
    skill: "Datamining",
    color: "expert",
    skillId: "MT",
  },
  IP: {
    skill: "Linux",
    color: "proficient",
    skillId: "IP",
  },
  LT: {
    skill: "Windows Form",
    color: "proficient",
    skillId: "LT",
  },
};

export const getSkillSets = () => {
  return Object.keys(skillMap).map((skill) => skillMap[skill as TSkills]);
};
