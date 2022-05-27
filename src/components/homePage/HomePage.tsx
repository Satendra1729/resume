import * as React from "react";

import { Grid, Paper, styled, Theme } from "@mui/material";
import Intro from "../intor/Intro";
import Box from "@mui/system/Box";
import { Event } from "./Event";
import { TimeDot } from "./TimeDot";
import { TimeLineDirection } from "./TimeLineDirection";
import { Events } from "../../db/Events";
import { Eventxs } from "./Eventxs";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const HomePage = () => {
  return (
    <Box maxWidth={"1000px"} style={{ padding: "20px" }}>
      <Grid item xs={12}>
        <Intro></Intro>
      </Grid>
      <Grid item xs={12} sx = {{ mt :"20px"}}>
        <TimeLineDirection eventTime="&#9650;"></TimeLineDirection>
        {Events.map((event) => (
          <>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Grid container>
                <Grid item xs={12}>
                  <Eventxs {...event}></Eventxs>
                </Grid><Grid item width="100%" xs={12} >
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <TimeDot eventTime={event.startTime}></TimeDot>
                </Grid>
              </Grid>
              </Grid>
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Grid item xs={12}>
                <Event {...event}></Event>
              </Grid>
              <Grid item width="100%" xs={12} sx={{ p: "20px" }}>
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <TimeDot eventTime={event.startTime}></TimeDot>
                </Grid>
              </Grid>
            </Box>
          </>
        ))}
      </Grid>
    </Box>
  );
};
