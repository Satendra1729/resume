export type TColorType =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type TSkillStrength = "competent" | "proficient" | "expert";

export type TSkills =
  | "CS"
  | "AZ"
  | "AWS"
  | "PY"
  | "JS"
  | "RT"
  | "CH"
  | "SQL"
  | "GIT"
  | "DC"
  | "DO"
  | "K8S"
  | "DM"
  | "LX"
  | "WF"
  | "MT"
  | "IP"
  | "LT";

export interface ISkillDescription {
  group: string;
  repoLink: string;
  descriptionArray: string[];
}

export interface ISkill {
  skill: string;
  color: TSkillStrength;
  skillId: TSkills;
  skillDescription?: ISkillDescription[];
  logo: string; 
}
