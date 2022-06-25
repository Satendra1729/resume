import * as React from "react";
import { Box, Grid } from "@mui/material";
import PrimarySearchAppBar from "../appbar/appbar";
import { HomePage } from "../homePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SkillPage } from "../skillPage/SkillPage";
import { routerFactory } from "../../utils/routerFactory";
export const Layout = () => {
  return (
    <BrowserRouter>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Box sx={{ mt: "40px", overflowY: "scroll",height: "calc( 100vh - 40px)" }}>
        <Grid
          container
          style={{ display: "flex", width: "100%", justifyContent: "center",marginTop: "45px" }}
        >
          <Routes>
            <Route path={routerFactory.homeRoute} element={<HomePage />} />
            <Route path={routerFactory.skillRoute} element={<SkillPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Grid>
      </Box>
    </BrowserRouter>
  );
};
