import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import React from 'react';

export default function Profile() {
  return (
    <Box className={"Section-Profile"} id={'profile'}
         sx={{
           background: "rgb(255, 245, 236)"
         }}>
      <Container>
        <Stack direction="column" spacing={{ xs: 2 }} alignItems="center" justifyContent="center"
               sx={{
                minHeight: "100vh"
               }}
        >
          <Typography variant="h3" component="div">My Profile</Typography>
        </Stack>
      </Container>
    </Box>
  );
}