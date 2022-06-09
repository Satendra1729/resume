import * as React from "react";
import { Grid, styled, Theme } from "@mui/material";

const Circle = styled("div")(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.grey[700],
  border: `1px solid ${theme.palette.grey[700]}`,
  height: "14px",
  borderRadius: "10px",
  boxShadow: `0 0 .5px .5px ${theme.palette.grey[700]}`,
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
