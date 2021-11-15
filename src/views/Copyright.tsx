import React from 'react';
import {Link, Stack, Typography} from "@mui/material";

import ContactBar from '../components/contact/ContactBar';

export default function Copyright(props: any) {
  return (
    <Stack direction="row" justifyContent="space-evenly" alignItems="Center" sx={{ my: 4 }}>
      <ContactBar />
      <Typography variant="body1" color="text.secondary" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          Martin Wong
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Stack>

  );
}