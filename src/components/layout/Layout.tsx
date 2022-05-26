import * as React from "react";
import { Box, Grid } from "@mui/material";
import PrimarySearchAppBar from "../appbar/appbar";
import { HomePage } from "../homePage/HomePage";

export const Layout = () => {
  return (
    <>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Box sx={{ mt : { sm : "48px" ,xs : "90px"}}}>
        <Grid
          container
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <HomePage></HomePage>
        </Grid>
      </Box>
    </>
  );
};
