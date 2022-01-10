import {Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import React from 'react';

export default function ProjectItem(props: {
  title: string, info: string, link: string, source: string, path: string, stack: string, isAvailable: boolean
}) {

  return (
    <Card sx={{ maxWidth: 345, minHeight: 360 }}>
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
        <Button size="small" href={props.link} disabled={!props.isAvailable}>Try It Out</Button>
        <Button size="small" href={props.source}>Source Code</Button>
      </CardActions>
    </Card>
  );
}