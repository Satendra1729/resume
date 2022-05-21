import * as React from "react";
import { Grid, styled, Theme } from "@mui/material";

const Circle = styled("div")(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  height: "14px",
  borderRadius: "6px",
  boxShadow: `0 0 1px 1px ${theme.palette.primary.main}`,
  textAlign: "center",
  padding: "2px",
  lineHeight: "14px",
  color: "white",
}));

interface TimeDotProps {
  eventTime: string;
}

export const TimeDot = (props: TimeDotProps) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={5}></Grid>
      <Grid
        item
        xs={2}
        justifyContent="center"
        alignItems={"center"}
        alignContent="center"
        style={{ display: "flex" }}
      >
        <Circle>{props.eventTime}</Circle>
      </Grid>
      <Grid item xs={5}></Grid>
    </Grid>
  );
};
