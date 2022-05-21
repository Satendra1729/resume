import * as React from "react";

import { Grid, Paper, styled, Theme } from "@mui/material";
import Intro from "../intor/Intro";
import Box from "@mui/system/Box";
import { Event } from "./Event";
import { TimeDot } from "./TimeDot";
import { TimeLineDirection } from "./TimeLineDirection";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const VerticalDivider = styled("div")(({ theme }: { theme: Theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  height: "100%",
  borderRadius: "5px",
}));


const testEvent = {
  companyName: "First American",
  projects: { LoansPQ: "LoansPQ" },
  direction: "left" as "left" | "right",
  location: "Bangalore",
};

export const HomePage = () => {
  return (
    <Box maxWidth={"1000px"} style={{ padding: "20px" }}>
      <Grid item xs={12}>
        <Intro></Intro>
      </Grid>
      <Grid item xs={12} style={{marginTop : "30px"}}>
        <TimeLineDirection eventTime="&#9650;"></TimeLineDirection>
        <Event {...testEvent}></Event>
        <TimeDot eventTime="2018"></TimeDot>
        <Event {...testEvent} direction="right"></Event>
        <TimeDot eventTime="2017"></TimeDot>
        <Event {...testEvent} direction="left"></Event>
        <TimeDot eventTime="2016"></TimeDot>
        <Event {...testEvent} direction="right"></Event>
        <TimeDot eventTime="2015"></TimeDot>
      </Grid>
    </Box>
  );
};
