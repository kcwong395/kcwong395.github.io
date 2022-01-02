import {Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function ProjectItem(props: {
  title: string, info: string, link: string, source: string, path: string, stack: string
}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="160"
        image={props.path}
        alt="my project"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Stack direction="column" spacing={{xs: 0.5}}>
          <Typography variant="body2" color="text.secondary">
            {props.info}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.stack}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <a href={props.link} target="_blank"><Button size="small">Try It Out</Button></a>
        <a href={props.source} target="_blank"><Button size="small">Source Code</Button></a>
      </CardActions>
    </Card>
  );
}