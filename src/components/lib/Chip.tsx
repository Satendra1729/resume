import * as React from "react";
import { Avatar, Grid, styled } from "@mui/material";
import { TColorType, TSkillStrength } from "../../contracts/SkillTypes";
import { blue } from "@mui/material/colors";
import { OpenInNew } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const hoverStyle = (color?: TColorType) => ({
  backgroundColor: blue[100],
  border:
    ".5px solid " +
    blue[(parseInt(color ? color : "900") - 200).toString() as TColorType],
  boxShadow:
    blue[(parseInt(color ? color : "900") - 200).toString() as TColorType] +
    " 0px 0px 10px",
});

const defalutStyle = (color?: TColorType) => ({
  backgroundColor: blue[100],
  border: ".5px solid transparent",
});

const StyledChip = styled("div")<{
  color?: TColorType;
  delay?: string;
}>(({ theme, color, delay }) => ({
  ...defalutStyle(color),
  padding: "3px 6px 2px 4px",
  borderRadius: "8px",
  fontSize: "16px",
  color: "black",
  cursor: "pointer",
  "&:hover": hoverStyle(color),
  animation: "blink .5s 2 ease-in-out",
  animationDirection: "alternate",
  animationDelay: delay + "s",
  "@keyframes blink": {
    from: { ...defalutStyle(color) },
    to: { ...hoverStyle(color) },
  },
}));

interface IChipProps {
  chipText: string;
  skillId: string;
  fontSize?: string;
  color?: TSkillStrength;
  delay?: string;
  logo: string;
}

const skillToColorMap = (skillColor: TSkillStrength | undefined) => {
  switch (skillColor) {
    case "competent":
      return "600";
    case "proficient":
      return "700";
    default:
      return "800";
  }
};

const Chip = ({
  chipText,
  skillId,
  fontSize,
  color,
  delay,
  logo,
}: IChipProps) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/skill/" + encodeURIComponent(skillId))}>
      <StyledChip
        style={{ fontSize: fontSize }}
        color={skillToColorMap(color)}
        delay={delay}
      >
        <Grid spacing={"4px"} container alignItems={"center"}>
          <Avatar
            variant="square"
            src={logo}
            style={{ padding: "4px", width: "30px", height: "30px" }}
          ></Avatar>
          <Grid item>{chipText}</Grid>
          <Grid item style={{ marginBottom: "-2px" }}>
            <OpenInNew fontSize="inherit" />
          </Grid>
        </Grid>
      </StyledChip>
    </div>
  );
};

export { Chip };
