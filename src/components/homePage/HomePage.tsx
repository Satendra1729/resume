import * as React from "react";

import { Grid, Paper, styled, Theme } from "@mui/material";
import Introduction from "../intor/Intro";
import Box from "@mui/system/Box";
import { Eventmd } from "./ExperienceCardmd";
import { TimeDot } from "./TimeDot";
import { TimeLineDirection } from "./TimeLineDirection";
import { Experiences } from "../../db/Experiences";
import { Eventxs } from "./ExperiencesCardxs";

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
        <Introduction></Introduction>
      </Grid>
      <Grid item xs={12} sx = {{ mt :"20px"}}>
        <TimeLineDirection eventTime="&#9650;"></TimeLineDirection>
        {Experiences.map((event) => (
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
                <Eventmd {...event}></Eventmd>
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
