import * as React from 'react';
import {Button} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(({
  btn: {
    transition: "0.4s",
    '&:hover': {
      background: "#514644", //theme.palette.secondary.main,
      color: "#efc8b1"
    },
  },
}));

export default function CustomButton(props: {
  text: string;
}) {

  const classes = useStyles();

  return (
    <Button
      href="#about"
      variant="contained"
      size="large"
      className={classes.btn}
    >
      {props.text}
    </Button>
  )
}