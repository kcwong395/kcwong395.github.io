import * as React from 'react';
import {Avatar, Link} from "@mui/material";
import {grey} from "@mui/material/colors";
import {makeStyles} from '@mui/styles';
import {ReactElement} from "react";

const useStyles = makeStyles(({
  outer: {
    transition: "0.4s",
    '&:hover': {
      background: "#514644", //theme.palette.secondary.main,
      transform: "translate(0, -8px)",
      "& .inner": {
        color: "#efc8b1" // theme.palette.primary.main
      }
    },
  },
}));

export default function ContactItem(props: {
  dest: string | undefined;
  icon: ReactElement<any, any>;
}) {

  const classes = useStyles();

  return (
    <Link href={props.dest} target="_blank" sx={{outline: 'none'}}>
      <Avatar className={classes.outer} sx={{ bgcolor: grey['A100'] }}>
        {props.icon}
      </Avatar>
    </Link>
  );
}