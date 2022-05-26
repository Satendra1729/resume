import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



export default function PrimarySearchAppBar() {


  return (
    <Box  sx={{ flexGrow: 1 }} >
      <AppBar position="fixed">
        <Toolbar variant='dense'>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            The Coder
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
