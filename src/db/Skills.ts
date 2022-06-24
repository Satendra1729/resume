import { ISkill, TSkills } from "../contracts/SkillTypes";
import reactlogo from "../assets/img/react-logo.svg";
import azurelogo from '../assets/img/azure-logo.svg'; 
import awslogo from '../assets/img/aws-logo.svg'; 
import pythonlogo from '../assets/img/python-logo.png'; 
import linuxlogo from '../assets/img/linux-logo.png'; 
import javascriptlogo from '../assets/img/javascript-logo.png'; 
import csharp from '../assets/img/csharp-logo.png'; 
import sqllogo from '../assets/img/sql-logo.png'; 
import cherrypylogo from '../assets/img/cherrypy-logo.png'; 
import dotnetlogo from '../assets/img/dotnet-logo.svg'; 
import dockerlogo from '../assets/img/docker-logo.png'; 
import k8s from '../assets/img/k8s.svg'; 
import datamininglogo from '../assets/img/datamining-logo.png'; 
import gitlogo from '../assets/img/git-logo.png'; 
import wflogo from '../assets/img/windowsform-logo.jpg'; 
import matlablogo from '../assets/img/matlab-logo.png'; 
import imageprocessinglogo from '../assets/img/imageprocessing-logo.webp'; 
import latexlogo from '../assets/img/latex-logo.png'; 

export const skillMap: { [key in TSkills]: ISkill } = {
  CS: {
    skill: "C#",
    color: "expert",
    skillId: "CS",
    logo : csharp,
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
    logo : azurelogo, 
  },
  AWS: {
    skill: "AWS",
    color: "expert",
    skillId: "AWS",
    logo : awslogo
  },
  PY: {
    skill: "Python",
    color: "expert",
    skillId: "PY",
    logo : pythonlogo
  },
  JS: {
    skill: "JavaScript",
    color: "expert",
    skillId: "JS",
    logo : javascriptlogo
  },
  RT: {
    skill: "React",
    color: "proficient",
    skillId: "RT",
    logo : reactlogo,
  },
  SQL: {
    skill: "SQL",
    color: "proficient",
    skillId: "SQL",
    logo : sqllogo,
  },
  CH: {
    skill: "Cherrypy",
    color: "proficient",
    skillId: "CH",
    logo: cherrypylogo
  },
  GIT: {
    skill: "Linux",
    color: "proficient",
    skillId: "GIT",
    logo : gitlogo
  },
  DC: {
    skill: "Dotnet Core",
    color: "proficient",
    skillId: "DC",
    logo : dotnetlogo
  },
  DO: {
    skill: "Docker",
    color: "proficient",
    skillId: "DO",
    logo : dockerlogo
  },
  K8S: {
    skill: "Kubernetes",
    color: "proficient",
    skillId: "K8S",
    logo : k8s
  },
  DM: {
    skill: "Datamining",
    color: "expert",
    skillId: "DM",
    logo : datamininglogo
  },
  LX: {
    skill: "Linux",
    color: "proficient",
    skillId: "LX",
    logo : linuxlogo
  },
  WF: {
    skill: "Windows Form",
    color: "proficient",
    skillId: "WF",
    logo : wflogo
  },
  MT: {
    skill: "Matlab",
    color: "expert",
    skillId: "MT",
    logo : matlablogo
  },
  IP: {
    skill: "Image Processing",
    color: "proficient",
    skillId: "IP",
    logo: imageprocessinglogo
  },
  LT: {
    skill: "Latex",
    color: "proficient",
    skillId: "LT",
    logo : latexlogo
  },
};

export const getSkillSets = () => {
  return Object.keys(skillMap).map((skill) => skillMap[skill as TSkills]);
};
