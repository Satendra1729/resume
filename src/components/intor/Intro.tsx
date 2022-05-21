import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import saty from "../../assets/img/saty.jpg";
import Email from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";
import Download from "@mui/icons-material/Download";
import Grid from "@mui/material/Grid";
import { Paper, Theme } from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const Name = styled((props: any) => {
  const { ...other } = props;
  return <span {...other}>Satendra Kumar Kushwaha</span>;
})(({ theme }) => ({
  fontSize: "30px",
}));

const SubTitle = styled((props: any) => {
  const { ...other } = props;
  return (
    <div {...other}>
      <div>
        <span>Principle Software Engineer</span>
      </div>
      <Grid
        container
        style={{ display: "flex", fontSize: "16px", marginTop: "20px" }}
        spacing={2}
      >
        <Grid
          item
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <Email />{" "}
          <a
            style={{ color: grey[900] }}
            href={"mailto:satendra1729@gmail.com"}
          >
            satendra1729@gmail.com
          </a>
        </Grid>
        <Grid
          item
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <GitHub />{" "}
          <a
            style={{ color: grey[900] }}
            href={"https://github.com/Satendra1729"}
          >
            Git Hub
          </a>
        </Grid>
        <Grid
          item
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <Download />{" "}
          <a
            style={{ color: grey[900] }}
            href={"https://github.com/Satendra1729"}
          >
            Resume
          </a>
        </Grid>
      </Grid>
    </div>
  );
})(({ theme }) => ({
  fontSize: "20px",
  marginTop: "5px",
}));

const BasePaper =  styled(Paper)(({ theme } : { theme: Theme }) => ({
  fontSize: "30px",

  [theme.breakpoints.up("sm")] : {
    padding: "15px 25px",
 },
  [theme.breakpoints.up("md")] : {
     padding: "15px 50px",
  }
}));


export default function Intro() {
  return (
    <>
      <BasePaper  >
        <Grid spacing={20} container justifyContent="space-between">
          <Grid item sm={2} sx={{ sm : { width :"100%",display:"flex",justifyContent: "center"}}}>
            <Avatar
              src={saty}
              sx={{ bgcolor: grey[500], height: "200px", width: "200px" }}
              aria-label="recipe"
            >
              SKK
            </Avatar>
          </Grid>
          <Grid item sm={8}>
            <Grid container direction={"column"} style={{marginTop: "20px"}}>
              <Grid item>
                <Name />
              </Grid>
              <Grid item>
                <SubTitle />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </BasePaper>
    </>
  );
}
