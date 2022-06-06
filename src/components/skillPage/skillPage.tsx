import { Typography } from "@mui/material";
import * as React from "react";
import { useParams } from "react-router-dom";

export const SkillPage = () => {
  const params = useParams<{ skill: string }>();

  return (<Typography variant="h6">{params.skill}</Typography>);
};
