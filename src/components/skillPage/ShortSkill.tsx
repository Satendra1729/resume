import { Box, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";

import reactlogo from "../../assets/img/react.png";

export const ShortSkill = () => {
  return (
    <Grid container flexDirection={"column"}>
      <Grid item>
        <Box sx={{boxShadow: 2,maxWidth: "40px",padding: "4px 4px 0px 4px"}}>
          <img
            src={reactlogo}
            style={{ maxWidth: "inherit" }}
          ></img>
        </Box>
      </Grid>
    </Grid>
  );
};
