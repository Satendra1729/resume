import Box from "@mui/material/Box";
import { Grid, styled, Theme } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { routerFactory } from "../../utils/routerFactory";
import { blue } from "@mui/material/colors";
import { matchPath } from "react-router";
import { useEffect, useState } from "react";

export default function PrimarySearchAppBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const pages = [
    {
      text: "Home",
      path: routerFactory.home(),
      route: routerFactory.homeRoute,
    },
    {
      text: "Skills",
      path: routerFactory.skill(),
      route: routerFactory.skillRoute,
    },
  ];
  const [selectedRoute, setSelectedRoute] = useState<string>(pages[0].path);

  useEffect(() => {
    console.log("pathname", selectedRoute);
    setSelectedRoute(location.pathname);
  }, [location.pathname]);

  const StyledGridItem = styled(Grid)<{ index: number; selected: boolean }>(
    ({
      theme,
      index,
      selected,
    }: {
      theme: Theme;
      index: number;
      selected: boolean;
    }) => ({
      borderRight:
        index + 1 < pages.length
          ? "10px solid " + theme.palette.primary.dark
          : "none",
      borderLeft:
        index > 0 ? "10px solid " + theme.palette.primary.dark : "none",
      width: "100px",
      height: "40px",
      textAlign: "center",
      paddingTop: "10px",
      color: "black",
      backgroundColor: selected ? theme.palette.primary.main : blue[100],
      cursor: "pointer",
      "&:hover": {
        color: "#ddd",
        backgroundColor: theme.palette.primary.main,
      },
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
          zIndex: 100000,
        }}
      >
        {pages.map((item, index) => (
          <StyledGridItem
            index={index}
            item
            onClick={() => {
              navigate(item.path);
            }}
            selected={Boolean(matchPath(item.route,selectedRoute))}
          >
            <span>{item.text}</span>
          </StyledGridItem>
        ))}
      </Grid>
    </Box>
  );
}
