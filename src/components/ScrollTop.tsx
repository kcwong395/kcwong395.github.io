import * as React from 'react';
import {Box, Fab, Zoom, useScrollTrigger} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollTop() {

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Zoom in={trigger}>
      <Box role="presentation" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        <a href="#">
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </a>
      </Box>
    </Zoom>
  );
}