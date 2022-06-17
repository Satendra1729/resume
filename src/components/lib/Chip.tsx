import * as React from "react";
import { Grid, styled, Tooltip } from "@mui/material";
import { colorType, skillStrength } from "../../contracts/SkillColor";
import { blue, purple } from "@mui/material/colors";
import { OpenInNew } from "@mui/icons-material";

const hoverStyle = (color?: colorType) => ({
  border:
    ".5px solid " +
    blue[(parseInt(color ? color : "900") - 200).toString() as colorType],
  backgroundColor:
    blue[(parseInt(color ? color : "900") - 200).toString() as colorType],
  boxShadow:
    blue[(parseInt(color ? color : "900") - 200).toString() as colorType] +
    " 0px 0px 10px",
});

const defalutStyle = (color?: colorType) => ({
  backgroundColor: blue[color as colorType],
  border: ".5px solid transparent",
});

const StyledChip = styled("div")<{
  color?: colorType;
  hoverStyleL?: any;
  defalutStyleL?: any;
}>(({ theme, color, hoverStyleL, defalutStyleL }) => ({
  ...defalutStyleL(color),
  padding: "3px 6px 2px 4px",
  borderRadius: "8px",
  fontSize: "16px",
  color: "white",
  cursor: "pointer",
  "&:hover": hoverStyleL(color),
  transition: "all .3s",
}));

interface IChipProps {
  chipText: string;
  fontSize?: string;
  color?: skillStrength;
  animate?: boolean;
  animateSequence?: number;
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

const Chip = ({
  chipText,
  fontSize,
  color,
  animate = false,
  animateSequence = 0,
}: IChipProps) => {
  const [a, setA] = React.useState(false);

  React.useEffect(() => {
    if (animate)
      setTimeout(() => {
        setA(true);
        setTimeout(() => {
          setA(false);
          setTimeout(() => {
            setA(true);
            setTimeout(() => setA(false), 600);
          }, 600);
        }, 600);
      }, 2000);
  }, []);

  return (
    <div
      onClick={() =>
        window.open(
          "/skill/" + encodeURIComponent(chipText),
          "_blank",
          "noopener,noreferrer"
        )
      }
    >
      <StyledChip
        hoverStyleL={hoverStyle}
        defalutStyleL={a ? hoverStyle : defalutStyle}
        style={{ fontSize: fontSize }}
        color={skillToColorMap(color)}
      >
        <Grid spacing={"4px"} container alignItems={"center"}>
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
