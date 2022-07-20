import { Grid, styled } from "@mui/material";
import Avatar from "@mui/material/Avatar";

import { ISkill } from "../../contracts/SkillTypes";

import { createTheme, ThemeProvider } from "@mui/material/styles";
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

const hoverStyle = {
  border: ".5px solid " + blue[700],
  boxShadow: blue[700] + " 0px 0px 10px",
};
const defalutStyle = {};

const SkillAvatar = styled(Avatar)<{ isSelected: boolean }>(
  ({ isSelected }: { isSelected: boolean }) => ({
    padding: "3px 6px 2px 4px",
    borderRadius: "8px",
    fontSize: "16px",
    color: "black",
    ...defalutStyle,
    border: isSelected ? hoverStyle.border : ".5px solid transparent",
    boxShadow: isSelected ? blue[700] + " 0px 0px 10px" : "none",
    backgroundColor: blue[100],
    "&:hover": { ...hoverStyle },
  })
);

interface ShortSkill extends ISkill {
  isSelected: boolean;
}

export const ShortSkill = (props: ShortSkill) => {
  const navigate = useNavigate();

  return (
    <Grid container flexDirection={"column"} alignContent="center">
      <Grid item>
        <ThemeProvider theme={theme}>
          <SkillAvatar
            alt={props.skillId}
            src={props.logo}
            variant={"rounded"}
            style={{ cursor: props.isSelected ? "default" : "pointer" }}
            onClick={() => navigate(routerFactory.skill(props.skillId))}
            isSelected={props.isSelected}
          >
            {props.skillId}
          </SkillAvatar>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
};
