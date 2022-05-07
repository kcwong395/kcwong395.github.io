import * as React from 'react';
import {Typography} from "@mui/material";
import CustomDivider from './CustomDivider';

export default function SectionHeader(props: { title: string, describtion: string } ) {
  return (
    <React.Fragment>
      <Typography variant="h3" component="div">{props.title}</Typography>
      <CustomDivider />
      <Typography variant="body1" component="div" textAlign="center"><i>{props.describtion}</i></Typography>
    </React.Fragment>
  )
}