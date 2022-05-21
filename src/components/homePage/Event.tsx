import * as React from "react";
import { Grid, Paper, styled, Theme, Typography } from "@mui/material";
import Location from "@mui/icons-material/LocationOn";

import Divider from "@mui/material/Divider";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: "20px 20px",
  color: theme.palette.text.secondary,
}));

const VerticalDivider = styled("div")(({ theme }: { theme: Theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  height: "100%",
  borderRadius: "5px",
}));

const Chip = styled("span")(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: "2px 3px",
  borderRadius: "8px",
  fontSize: "8px",
  color: "white",
}));

interface EventProps {
  companyName: string;
  projects: { [key: string]: string };
  location: string;
  direction: "left" | "right";
}

export const Event = (props: EventProps) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={5}>
        {props.direction == "left" ? (
          <Item>
            <Grid container direction={"column"}>
              <Grid item>
                <Typography variant="h6">{props.companyName}</Typography>
              </Grid>
              <Grid
                item
                style={{
                  display: "flex",
                  justifyItems: "center",
                  alignItems: "center",
                  margin: "-5px 0 10px 0",
                }}
              >
                <Location style={{ width: "16px", marginRight: "5px" }} />
                <Typography variant="body2">{props.location}</Typography>
              </Grid>

              <Grid
                item
                style={{
                  display: "flex",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                <Grid
                  container
                  justifyContent={"space-between"}
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="body1" style={{ lineHeight: "20px" }}>
                      {"Lons PQ API Integration"}
                    </Typography>{" "}
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ lineHeight: "20px" }}>
                      {"December 2018"}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                style={{
                  display: "flex",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                <Grid container spacing={1}>
                  <Grid item>
                    <Chip>GIT</Chip>
                  </Grid>
                  <Grid item>
                    <Chip>C#</Chip>
                  </Grid>
                </Grid>
              </Grid>
              <Divider style={{ marginTop: "10px" }}></Divider>
              <Grid
                item
                style={{
                  display: "flex",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                <Grid
                  container
                  justifyContent={"space-between"}
                  alignItems="center"
                  style={{ marginTop: "10px" }}
                >
                  <Grid item>
                    <Typography variant="body1" style={{ lineHeight: "20px" }}>
                      {"Dcoument Miner"}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ lineHeight: "20px" }}>
                      {"December 2018"}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                style={{
                  display: "flex",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                <Grid container spacing={1}>
                  <Grid item>
                    <Chip>GIT</Chip>
                  </Grid>
                  <Grid item>
                    <Chip>C#</Chip>
                  </Grid>
                </Grid>
              </Grid>
              <Divider style={{ marginTop: "10px" }}></Divider>
              <Grid
                item
                style={{
                  display: "flex",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                <Grid
                  container
                  justifyContent={"space-between"}
                  alignItems="center"
                  style={{ marginTop: "10px" }}
                >
                  <Grid item>
                    <Typography variant="body1" style={{ lineHeight: "20px" }}>
                      {"Voting Meter (Covid-19 Helping App)"}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ lineHeight: "20px" }}>
                      {"December 2018"}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Item>
        ) : (
          ""
        )}
      </Grid>
      <Grid
        item
        xs={2}
        justifyContent="center"
        alignItems={"center"}
        alignContent="center"
        style={{ display: "flex" }}
      >
        <VerticalDivider></VerticalDivider>
      </Grid>
      <Grid item xs={5}>
        {props.direction == "right" ? (
          <Item>
            <h3> {props.companyName}</h3>
            <h3> {props.location} </h3>
          </Item>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
};
