import * as React from "react";
import { Grid, Paper, styled, Theme, Typography } from "@mui/material";
import { LocationOn, Work } from "@mui/icons-material";

import Divider from "@mui/material/Divider";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: "20px 20px",
  color: theme.palette.text.secondary,
}));

const VerticalDivider = styled("div")(({ theme }: { theme: Theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  height: "20px",
  width: "0px",
}));

const Chip = styled("span")(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: "2px 3px",
  borderRadius: "8px",
  fontSize: "8px",
  color: "white",
  cursor: "pointer",
}));

interface EventProps {
  companyName: string;
  projects: { projectName: string; skillSets: string[]; duration: string }[];
  location: string;
  direction: "left" | "right";
  designation: string;
}

export const Eventxs = (props: EventProps) => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <VerticalDivider></VerticalDivider>
        </Grid>
      </Grid>

      <Grid item xs={12}>
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
              <LocationOn style={{ width: "16px", marginRight: "5px" }} />
              <Typography variant="body2">{props.location}</Typography>
            </Grid>
            <Grid
              item
              style={{
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
                margin: "-10px 0 10px 0",
              }}
            >
              <Work style={{ width: "16px", marginRight: "5px" }} />
              <Typography variant="body2">{props.designation}</Typography>
            </Grid>

            <Divider style={{ marginTop: "10px" }}>
              <Typography variant="body1">{"Projects"}</Typography>
            </Divider>

            {props.projects.map(({ projectName, skillSets, duration }) => (
              <>
                <Grid
                  item
                  style={{
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <Grid
                    container
                    justifyContent={"space-between"}
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography
                        variant="body1"
                        style={{ lineHeight: "20px" }}
                      >
                        {projectName}
                      </Typography>{" "}
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body2"
                        style={{ lineHeight: "20px" }}
                      >
                        {duration}
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
                    {skillSets.map((skill) => (
                      <Grid item>
                        <Chip onClick={() => alert(skill)}>{skill}</Chip>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </>
            ))}
          </Grid>
        </Item>
      </Grid><Grid item xs={12}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <VerticalDivider></VerticalDivider>
        </Grid>
      </Grid>
    </Grid>
  );
};
