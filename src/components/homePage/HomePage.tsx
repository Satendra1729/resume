import { Grid } from "@mui/material";
import Introduction from "../intro/Intro";
import Box from "@mui/system/Box";
import { Eventmd } from "./ExperienceCardmd";
import { TimeDot } from "./TimeDot";
import { TimeLineDirection } from "./TimeLineDirection";
import { Experiences } from "../../db/Experiences";
import { Eventxs } from "./ExperienceCardxs";
import { useEffect } from "react";
import { scrollTop } from "../../utils/scrollTop";

export const HomePage = () => {
  useEffect(() => {
    scrollTop();
  });

  return (
    <Box maxWidth={"1000px"} style={{ padding: "0 20px" }}>
      <Grid item xs={12}>
        <Introduction></Introduction>
      </Grid>
      <Grid item xs={12} sx={{ mt: "20px" }}>
        <TimeLineDirection eventTime="&#9650;"></TimeLineDirection>
        {Experiences.map((event) => (
          <>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Grid container>
                <Grid item xs={12}>
                  <Eventxs {...event}></Eventxs>
                </Grid>
                <Grid item width="100%" xs={12}>
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
