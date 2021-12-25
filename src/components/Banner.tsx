import * as React from 'react';
import {Grow, Stack, Typography} from "@mui/material";

import CustomButton from "./CustomButton";
import Typed from 'typed.js';

export default function Banner() {

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        'Web Technology',
        'Cloud Transformation',
        'Backend Development',
        'Large-scale Distributed System'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    // elRef refers to the <span> rendered below
    // @ts-ignore
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      // @ts-ignore
      typed.current.destroy();
    }
  }, [])


  return (
    <Grow in={true} timeout={2000} style={{ transformOrigin: '0 0 0' }}>
      <Stack direction="column" spacing={{ xs: 2 }}>
        <Typography variant="h2" component="div">
          Martin WONG
        </Typography>
        <Typography variant="h4" component="div" sx={{ color: (theme) => `${theme.palette.primary.main}` }}>
          Software Engineer
        </Typography>
        <Typography variant="body1" component="div">
          Aspiring recent graduate seeking for challenges in <strong><i><span ref={el} /></i></strong>
        </Typography>
        <CustomButton text="Read More" />
      </Stack>
    </Grow>
  );
}