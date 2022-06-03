import * as React from "react";
import { styled } from "@mui/material";
import { colorType, skillStrength } from "../../contracts/SkillColor";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const StyledChip = styled("span", {
  shouldForwardProp: (prop) => prop !== "color",
})<{ color?: colorType }>(({ theme, color }) => ({
  backgroundColor: blue[color as colorType],
  padding: "2px 3px",
  borderRadius: "8px",
  fontSize: "16px",
  color: "white",
  cursor: "pointer",
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
      onClick={() => navigate("/skill/" + encodeURIComponent(props.chipText))}
    >
      <StyledChip
        style={{ fontSize: props.fontSize }}
        color={skillToColorMap(props.color)}
      >
        {props.chipText}
      </StyledChip>
    </div>
  );
};
