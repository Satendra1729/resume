import {
  Divider,
  Grid,
  Icon,
  LinearProgress,
  linearProgressClasses,
  Paper,
  styled,
  Theme,
  Typography,
} from "@mui/material";
import { blue, grey, purple } from "@mui/material/colors";
import * as React from "react";
import { useParams } from "react-router-dom";
import csharplogo from "../../assets/img/csharplogo.png";
import codefork from "../../assets/img/codefork.png";

const StyledDivider = styled(Divider)(({ theme }: { theme: Theme }) => ({
  padding: "10px 0px",
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  marginTop: "10px",
  borderRadius: 0,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: purple[100],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    background: `repeating-linear-gradient( 45deg,${purple[900]},${purple[900]} 10px,${purple[200]} 10px,${purple[200]} 20px )`,
  },
}));

export const SkillPage = () => {
  const params = useParams<{ skill: string }>();

  return (
    <Paper style={{ padding: "30px", maxWidth: "500px" }}>
      <Grid container direction={"column"}>
        <Grid item>
          <Grid container alignItems={"center"} spacing={4}>
            <Grid item>
              <Icon style={{ width: 70, height: 70 }}>
                <img src={csharplogo} height={70} width={70} />
              </Icon>
            </Grid>
            <Grid item>
              <Typography variant="h6">{params.skill + " (7y 3m)"}</Typography>
              <BorderLinearProgress variant="determinate" value={85} />
            </Grid>
          </Grid>
        </Grid>

        <StyledDivider></StyledDivider>
        <Grid item>
          <Grid container alignItems={"center"} style={{ cursor: "pointer" }}>
            <Grid item>
              <Typography variant="h6">{"C# Features"}</Typography>
            </Grid>
            <Grid item>
              <Icon style={{ width: 20, height: 25 }}>
                <img src={codefork} height={20} width={20} />
              </Icon>
            </Grid>
          </Grid>
          <Typography variant="body2">
            {
              "Multithreading, Indexer, Genrics, Delegates and Events, Standard Library, Indexer, Genrics, Delegates and Events, Standard Library "
            }
          </Typography>
        </Grid>
        <StyledDivider></StyledDivider>
        <Typography variant="h6">{"Web API"}</Typography>
        <Typography variant="body2">
          {"Dependency Injection, Attributes, "}
        </Typography>
        <StyledDivider></StyledDivider>
        <Grid item>
          <Typography variant="h6">{"Windows Form"}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
