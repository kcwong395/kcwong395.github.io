import * as React from 'react';
import {Divider} from "@mui/material";

export default function CustomDivider() {
  return (
    <Divider
      sx={{
        color: (theme) => `${theme.palette.secondary.main}`,
        backgroundColor: (theme) => `${theme.palette.secondary.main}`,
        height: 6,
        width: 60,
      }}
    />
  )
}