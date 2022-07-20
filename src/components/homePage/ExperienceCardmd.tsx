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
  transition: "opacity 4s, transform 2s",
  transformOrigin: "right 50% 0",
}));

const VerticalDivider = styled("div")(({ theme }: { theme: Theme }) => ({
  border: `1px solid ${theme.palette.grey[700]}`,
  height: "115%",
  borderRadius: "5px",
  backgroundColor: theme.palette.grey[700],
  zIndex: -12,
}));

export const Eventmd = (props: IExperience) => {
  const [opacity, setOpacity] = React.useState(0.1);
  const [transform, setTransform] = React.useState("RotateY(-90deg)");

  React.useEffect(() => {
    setOpacity(1);
    setTransform("RotateY(0deg)");
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={5} sx={{ display: { sm: "none", md: "block" } }}>
        {props.direction === "left" ? (
          <Item style={{ opacity: opacity, transform: transform }}>
            <Grid container direction={"column"}>
              <Grid item>
                <CompanyName
                  companyName={props.companyName}
                  companyWebsite={props.companyWebsite}
                />
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
                          variant="caption"
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
                      marginTop: "8px",
                    }}
                  >
                    <Grid container spacing={1}>
                      {skillSets.map((skillO) => (
                        <Grid item>
                          <MiniChip
                            skillId={skillO.skillId}
                            chipText={skillO.skill}
                            fontSize="14px"
                            color={skillO.color}
                            logo={skillO.logo}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                  <Divider style={{ marginTop: "14px" }}></Divider>
                </>
              ))}
            </Grid>
          </Item>
        ) : (
          ""
        )}
      </Grid>
      <Grid
        item
        sm={2}
        xs={2}
        justifyContent="center"
        alignItems={"center"}
        alignContent="center"
        style={{ display: "flex" }}
      >
        <VerticalDivider></VerticalDivider>
      </Grid>
      <Grid item sm={5} xs={10}>
        {props.direction === "right" ? (
          <Item>
            <Grid container direction={"column"}>
              <Grid item>
                <CompanyName
                  companyName={props.companyName}
                  companyWebsite={props.companyWebsite}
                />
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
                      marginTop: "8px",
                    }}
                  >
                    <Grid container spacing={1}>
                      {skillSets.map((skillO) => (
                        <Grid item>
                          <MiniChip
                            skillId={skillO.skillId}
                            chipText={skillO.skill}
                            fontSize="14px"
                            color={skillO.color}
                            logo={skillO.logo}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                  <Divider style={{ marginTop: "14px" }}></Divider>
                </>
              ))}
            </Grid>
          </Item>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
};
