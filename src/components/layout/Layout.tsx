import * as React from "react";
import { Box, Grid } from "@mui/material";
import PrimarySearchAppBar from "../appbar/appbar";
import { HomePage } from "../homePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SkillPage } from "../skillPage/skillPage";
export const Layout = () => {
  return (
    <>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Box sx={{ mt: { xs: "68px" }, mb: { xs: "40px" } }}>
        <Grid
          container
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/skill/:skill" element={<SkillPage />} />
            </Routes>
          </BrowserRouter>
        </Grid>
      </Box>
    </>
  );
};
