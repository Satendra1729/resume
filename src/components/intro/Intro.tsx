import * as React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { IconButtonProps } from "@mui/material/IconButton";
import { grey } from "@mui/material/colors";
import saty from "../../assets/img/saty.jpg";
import Email from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";
import LocationCity from "@mui/icons-material/LocationCity";
import Download from "@mui/icons-material/Download";
import Grid from "@mui/material/Grid";
import { Paper, Theme } from "@mui/material";
import { Chip } from "../lib/Chip";
import { Introduction } from "../../db/Introduction";
import { getExpirence } from "../../utils/getExpirence";
import resume from "../../assets/pdf/resume.pdf";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const Name = styled((props: any) => {
  const { ...other } = props;

  return <span {...other}>{Introduction.name}</span>;
})(({ theme }) => ({
  fontSize: "30px",
}));

const Experience = styled((props: any) => {
  const { ...other } = props;

  return (
    <span {...other}>
      {getExpirence(Introduction.workExpirenceStartDate, new Date())}
    </span>
  );
})(({ theme }) => ({
  fontSize: "30px",
}));

const SubTitle = styled((props: any) => {
  const { ...other } = props;
  return (
    <div {...other}>
      <div>
        <span>{Introduction.designation}</span>
      </div>
      <Grid
        container
        alignItems={"center"}
        style={{ fontSize: "13px", marginTop: "10px" }}
      >
        <LocationCity style={{ fontSize: "20px" }} />{" "}
        <span style={{ marginLeft: "10px" }}>
          {Introduction.currentLocation}
        </span>
      </Grid>
      <Grid
        container
        style={{ display: "flex", fontSize: "16px", marginTop: "20px" }}
        spacing={2}
      >
        <Grid
          item
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <Email />{" "}
          <a
            style={{ color: grey[900] }}
            href={"mailto:" + Introduction.emailId}
          >
            {Introduction.emailId}
          </a>
        </Grid>
        <Grid
          item
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <GitHub />{" "}
          <a style={{ color: grey[900] }} href={Introduction.github}>
            Git Hub
          </a>
        </Grid>
        <Grid
          item
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <Download />{" "}
          <a
            download="resume.pdf"
            style={{ color: grey[900] }}
            href={resume}
            target="_blank"
          >
            Resume
          </a>
        </Grid>
      </Grid>
    </div>
  );
})(({ theme }) => ({
  fontSize: "20px",
  marginTop: "5px",
}));

const BasePaper = styled(Paper)(({ theme }: { theme: Theme }) => ({
  fontSize: "30px",

  [theme.breakpoints.up("sm")]: {
    padding: "15px 25px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "15px 50px",
  },
}));

const SideDivs = styled("div")(({ theme }: { theme: Theme }) => ({
  width: "0px",
  [theme.breakpoints.up("md")]: {
    width: "300px",
  },
}));

export default function Intro() {
  return (
    <>
      <BasePaper>
        <Grid paddingTop={"25px"} container justifyContent="space-between">
          <Grid
            item
            md={4}
            xs={12}
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <SideDivs />
            <Avatar
              src={saty}
              sx={{ bgcolor: grey[500], height: "200px", width: "200px" }}
              aria-label="recipe"
            >
              SKK
            </Avatar>
          </Grid>
          <Grid item md={7} xs={11}>
            <SideDivs />
            <Grid
              container
              direction={"column"}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                margin: { xs: "20px", sm: "0px" },
              }}
            >
              <Grid item>
                <Grid container>
                  <Grid item>
                    <Name />
                  </Grid>
                  <Grid item>
                    <Experience />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item></Grid>
              <Grid item>
                <SubTitle />
              </Grid>
              <Grid item>
                <Grid
                  container
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                    fontSize: "16px",
                    marginTop: "10px",
                  }}
                  spacing={1.2}
                >
                  {Introduction.skillSets.map((skillO, idx) => (
                    <Grid item style={{ color: "blue" }}>
                      <Chip
                        chipText={skillO.skill}
                        skillId ={skillO.skillId}
                        color={skillO.color}
                        delay={`${idx}`}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </BasePaper>
    </>
  );
}
