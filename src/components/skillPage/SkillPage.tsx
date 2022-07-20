import {
  Divider,
  Grid,
  Icon,
  LinearProgress,
  linearProgressClasses,
  List,
  ListItem,
  Paper,
  styled,
  Theme,
  Typography,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import { useParams } from "react-router-dom";
import codefork from "../../assets/img/codefork.png";
import { skillMap, getSkillSets } from "../../db/Skills";
import { TSkills } from "../../contracts/SkillTypes";
import { ShortSkill } from "./ShortSkill";
import { useEffect } from "react";
import { scrollTop } from "../../utils/scrollTop";
import { getProjectList } from "../../db/Experiences";

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
  const params = useParams<{ skillid: string }>();

  const skillO = skillMap[params.skillid as TSkills];

  useEffect(() => {
    scrollTop();
  });

  return (
    <Grid container direction={"column"} style={{ maxWidth: "900px" }}>
      <Grid item>
        <Grid
          container
          flexGrow={1}
          justifyContent={"space-between"}
          spacing={2}
          sx={{ padding: "0 15px 0 15px" }}
        >
          {getSkillSets().map((item) => (
            <Grid item xs={2.3} sm={1}>
              <ShortSkill
                {...item}
                isSelected={item.skillId === params.skillid}
              ></ShortSkill>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Paper style={{ padding: "30px", margin: "20px" }}>
        <Grid item>
          <Grid container alignItems={"center"}>
            <Grid item xs={3}>
              <Grid container justifyContent={"center"}>
                <Icon style={{ width: 70, height: 70 }}>
                  <img
                    alt={skillO.skillId}
                    src={skillO.logo}
                    height={70}
                    width={70}
                  />
                </Icon>
              </Grid>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">{skillO.skill + " (7y 3m)"}</Typography>
              <BorderLinearProgress variant="determinate" value={85} />
            </Grid>
          </Grid>
        </Grid>

        <StyledDivider></StyledDivider>

        {skillO.skillDescription?.map((skillDesc) => (
          <Grid item>
            <Grid container alignItems={"center"} style={{ cursor: "pointer" }}>
              <a
                style={{ textDecoration: "none" }}
                href={skillDesc.repoLink}
                target="_blank"
                rel="noreferrer"
              >
                <Grid
                  container
                  style={{ margin: "20px 0 20px 0" }}
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="h6">{skillDesc.group}</Typography>
                  </Grid>
                  <Grid item>
                    {skillDesc.repoLink && (
                      <Icon
                        style={{
                          width: 20,
                          height: 25,
                          margin: "0px 0 0 10px",
                        }}
                      >
                        <img
                          alt={"code-fork"}
                          src={codefork}
                          height={20}
                          width={20}
                        />
                      </Icon>
                    )}
                  </Grid>
                </Grid>
              </a>
            </Grid>
            <Typography variant="body2">
              {skillDesc.descriptionArray.join(", ")}
            </Typography>
          </Grid>
        ))}
      </Paper>

      <Paper style={{ padding: "30px", margin: "20px" }}>
        <List>
          <Typography variant="h4"> Project List </Typography>
          {getProjectList(params.skillid || "").map((projectName) => (
            <ListItem style={{ marginTop: "10px" }} disablePadding>
              {projectName}
            </ListItem>
          ))}
        </List>
      </Paper>
    </Grid>
  );
};
