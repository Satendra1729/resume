import { styled, Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";

interface CompanyNameProps {
  companyName: string;
}

const ComapnyNameWrapper = styled("div")(({ theme }: { theme: Theme }) => ({
  color : theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.primary.light,
  },
}));

export const CompanyName = (props: CompanyNameProps) => {
  return (
    <ComapnyNameWrapper onClick={() => alert(props.companyName)}>
      <Typography style={{ cursor: "pointer" }} variant="h6">
        {props.companyName}
      </Typography>
    </ComapnyNameWrapper>
  );
};
