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
