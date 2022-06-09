import { Divider, Grid, Paper, Typography } from "@mui/material";
import * as React from "react";
import { useParams } from "react-router-dom";

export const SkillPage = () => {
  const params = useParams<{ skill: string }>();

  return (
    <Paper style={{ padding: "30px" }}>
      <Grid container direction={"column"}>
        <Grid item><Typography variant="h6">{params.skill}</Typography></Grid>
        <Divider></Divider>
        <Grid item>{"Year of Expirence"}</Grid>
        <Divider></Divider>
        <Grid item>{"Different skill sets"}</Grid>
        <Divider></Divider>
        <Grid item>{"Startup Project"}</Grid>
        <Divider></Divider>
      </Grid>
    </Paper>

  );
};
