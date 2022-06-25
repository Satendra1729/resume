import { Box, Grid, styled } from "@mui/material";
import Avatar from "@mui/material/Avatar";

import { ISkill } from "../../contracts/SkillTypes";

import {
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/material/styles";
import blue from "@mui/material/colors/blue";
import { useNavigate } from "react-router-dom";
import { routerFactory } from "../../utils/routerFactory";

export const theme = createTheme({
  //shadows: Array(25).fill("none") as Shadows,
  // palette: {
  //   primary: {
  //     main: '#3f51b5',
  //   },
  //   secondary: {
  //     main: '#f50057',
  //   },
  // },
  components: {
    MuiAvatar: {
      styleOverrides: {
        rounded: {},
      },
    },
  },
});

const SkillAvatar = styled(Avatar)(() => ({
  padding: "3px 6px 2px 4px",
  borderRadius: "8px",
  fontSize: "16px",
  color: "black",
  cursor: "pointer",
  border: ".5px solid transparent",
  backgroundColor: blue[100],
  "&:hover": {
    border: ".5px solid " + blue[700],
    backgroundColor: blue[100],
    boxShadow: blue[700] + " 0px 0px 10px",
  },
}));

export const ShortSkill = (props: ISkill) => {
  const navigate = useNavigate();

  return (
    <Grid container flexDirection={"column"} alignContent="center">
      <Grid item>
        <ThemeProvider theme={theme}>
          <SkillAvatar
            alt={props.skillId}
            src={props.logo}
            variant={"rounded"}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(routerFactory.skill(props.skillId))}
          >
            {props.skillId}
          </SkillAvatar>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
};
