import * as React from "react";
import { useParams } from "react-router-dom";

export const SkillPage = () => {
  const params = useParams<{ skill: string }>();

  return <span>{params.skill}</span>;
};
