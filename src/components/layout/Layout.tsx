import * as React from "react";
import { Grid } from "@mui/material";
import PrimarySearchAppBar from "../appbar/appbar";
import { HomePage } from "../homePage/HomePage";


export const Layout = () => {
  return (
    <>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Grid
        container
        style={{ display: "flex", width: "100%", justifyContent: "center",marginTop: "48px"}}
      >
        <HomePage></HomePage>
      </Grid>
    </>
  );
};
