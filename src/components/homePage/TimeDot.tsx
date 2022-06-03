import * as React from "react";
import { Grid, styled, Theme } from "@mui/material";

const Circle = styled("div")(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  border: `1px solid ${theme.palette.secondary.light}`,
  height: "14px",
  borderRadius: "10px",
  boxShadow: `0 0 .5px .5px ${theme.palette.secondary.light}`,
  textAlign: "center",
  padding: "2px",
  lineHeight: "14px",
  color: "white",
  width: 'fit-content'
}));

interface TimeDotProps {
  eventTime: string;
}

export const TimeDot = (props: TimeDotProps) => {
  return (
        <Circle>{props.eventTime}</Circle>
  );
};
