import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid, styled, Theme } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

export default function PrimarySearchAppBar() {
  const pages = ["Home", "Expirence", "Skills", "About"];

  const StyledGridItem = styled(Grid)<{ index: number }>(
    ({ theme, index }: { theme: Theme; index: number }) => ({
      borderRight:
        index + 1 < pages.length
          ? "10px solid " + theme.palette.primary.dark
          : "none",
      borderLeft:
        index > 0 ? "10px solid " + theme.palette.primary.dark : "none",
      width: "25%",
      height: "40px",
      textAlign: "center",
      paddingTop: "10px",
      backgroundColor: theme.palette.primary.main,
      color: "#ddd",
    })
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "0px 0px",
        fontSize: { xs: "14px", md: "16px" },
      }}
    >
      <Grid
        container
        justifyContent={"space-between"}
        style={{
          position: "fixed",
          top: 0,
          zIndex: 100000
        }}
      >
        {pages.map((item, index) => (
          <StyledGridItem index={index} item>
            <span>{item}</span>
          </StyledGridItem>
        ))}
      </Grid>
    </Box>
  );
}
