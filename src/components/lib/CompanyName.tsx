import { OpenInNew } from "@mui/icons-material";
import { Grid, styled, Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";

interface CompanyNameProps {
  companyName: string;
  companyWebsite : string; 
}

const ComapnyNameWrapper = styled("div")(({ theme }: { theme: Theme }) => ({
  color: theme.palette.primary.main,
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.primary.light,
  },
}));

export const CompanyName = (props: CompanyNameProps) => {
  return (
    <ComapnyNameWrapper onClick={() => window.open(props.companyWebsite,"_blank")}>
      <Grid container alignItems={"center"}>
        <Typography  variant="h6">
          {props.companyName}
        </Typography>
        <OpenInNew fontSize="inherit" style={{marginLeft: "5px"}}></OpenInNew>
      </Grid>
    </ComapnyNameWrapper>
  );
};
