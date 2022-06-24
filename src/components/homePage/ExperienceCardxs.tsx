import * as React from "react";
import { Grid, Paper, styled, Theme, Typography } from "@mui/material";
import { LocationOn, Work } from "@mui/icons-material";

import Divider from "@mui/material/Divider";
import { MiniChip } from "../lib/MiniChip";
import { CompanyName } from "../lib/CompanyName";
import { IExperience } from "../../contracts/Experience";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: "20px 20px",
  color: theme.palette.text.secondary,
}));

const VerticalDivider = styled("div")(({ theme }: { theme: Theme }) => ({
  border: `1px solid ${theme.palette.grey[700]}`,
  backgroundColor: theme.palette.grey[700],
  height: "20px",
  width: "0px",
}));

export const Eventxs = (props: IExperience) => {
  console.log(props)
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
              <CompanyName companyName={props.companyName} />
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
                    {skillSets.map((skillO) => (
                      <Grid item>
                        <MiniChip
                          skillId ={skillO.skillId}
                          chipText={skillO.skill}
                          fontSize="14px"
                          color={skillO.color}
                          logo={skillO.logo}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Divider style={{ marginTop: "10px" }}></Divider>
              </>
            ))}
          </Grid>
        </Item>
      </Grid>
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
    </Grid>
  );
};
