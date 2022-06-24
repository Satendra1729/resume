import * as React from "react";
import { Avatar, Grid, styled, Tooltip } from "@mui/material";
import { TColorType, TSkillStrength } from "../../contracts/SkillTypes";
import { blue, purple } from "@mui/material/colors";
import { OpenInNew } from "@mui/icons-material";

const hoverStyle = (color?: TColorType) => ({
  border:
    ".5px solid " +
    blue[(parseInt(color ? color : "900") - 200).toString() as TColorType],
  backgroundColor:
    blue[100],
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

const MiniChip = ({
  chipText,
  skillId,
  fontSize,
  color,
  delay,
  logo,
}: IChipProps) => {
  return (
    <div
      onClick={() =>
        window.open(
          "/skill/" + encodeURIComponent(skillId),
          "_blank",
          "noopener,noreferrer"
        )
      }
    >
      <StyledChip
        style={{ fontSize: fontSize }}
        color={skillToColorMap(color)}
        delay={delay}
      >
        <Grid spacing={"4px"} container alignItems={"center"}>
          <Avatar src={logo} style={{ width: "15px", height: "15px" }}></Avatar>
          <Grid item>{chipText}</Grid>
          <Grid item style={{ marginBottom: "-2px" }}>
            <OpenInNew fontSize="inherit" />
          </Grid>
        </Grid>
      </StyledChip>
    </div>
  );
};

export { MiniChip };
