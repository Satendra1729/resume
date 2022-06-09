import * as React from "react";
import { Grid, styled, Theme } from "@mui/material";

const Circle = styled("div")(({ theme }: { theme: Theme }) => ({  
  color: theme.palette.grey[700],
  fontSize: "25px",
  marginBlock: "-4px"
}));

interface TimeLineDirectionProps {
  eventTime: string;
}

export const TimeLineDirection = (props: TimeLineDirectionProps) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid
        item
        xs={2}
        justifyContent="center"
        alignItems={"center"}
        alignContent="center"
        style={{ display: "flex" }}
        sx= {{ mb : {xs : "-5px",md : "20px"}}}
      >
        <Circle>{props.eventTime}</Circle>
      </Grid>
    </Grid>
  );
};
