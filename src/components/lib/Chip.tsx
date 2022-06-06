import * as React from "react";
import { Grid, styled, Tooltip } from "@mui/material";
import { colorType, skillStrength } from "../../contracts/SkillColor";
import { blue, purple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { OpenInNew } from "@mui/icons-material";

const StyledChip = styled("div", {
  shouldForwardProp: (prop) => prop !== "color",
})<{ color?: colorType }>(({ theme, color }) => ({
  backgroundColor: blue[color as colorType],
  padding: "2px 6px 2px 2px",
  borderRadius: "8px",
  fontSize: "16px",
  color: "white",
  cursor: "pointer",
  border: ".5px solid transparent",
  "&:hover": {
    border:
      ".5px solid " +
      blue[(parseInt(color ? color : "900") - 200).toString() as colorType],
    backgroundColor:
      blue[(parseInt(color ? color : "900") - 200).toString() as colorType],
    boxShadow:
      blue[(parseInt(color ? color : "900") - 200).toString() as colorType] +
      " 0px 0px 4px",
  },
}));

interface IChipProps {
  chipText: string;
  fontSize?: string;
  color?: skillStrength;
}

const skillToColorMap = (skillColor: skillStrength | undefined) => {
  switch (skillColor) {
    case "competent":
      return "600";
    case "proficient":
      return "700";
    default:
      return "800";
  }
};

export const Chip = (props: IChipProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        window.open(
          "/skill/" + encodeURIComponent(props.chipText),
          "_blank",
          "noopener,noreferrer"
        )
      }
    >
      <StyledChip
        style={{ fontSize: props.fontSize }}
        color={skillToColorMap(props.color)}
      >
        <Grid spacing={"4px"} container alignItems={"center"}>
          <Grid item>{props.chipText}</Grid>
          <Grid item style={{marginBottom: "-2px"}}>
            <OpenInNew fontSize="inherit" />
          </Grid>
        </Grid>
      </StyledChip>
    </div>
  );
};
