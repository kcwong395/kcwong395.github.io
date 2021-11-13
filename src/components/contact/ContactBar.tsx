import * as React from 'react';
import {Stack} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";

import ContactItem from './ContactItem'

export default function ContactBar() {

  return (
    <Stack direction="row" spacing={{ xs: 1 }}>
      <ContactItem dest="https://www.linkedin.com/in/kcwong395/" icon={
        <LinkedInIcon className="inner" sx={{ color: (theme) => `${theme.palette.secondary.main}` }} />
      } />
      <ContactItem dest="https://github.com/kcwong395" icon={
        <GitHubIcon className="inner" sx={{ color: (theme) => `${theme.palette.secondary.main}` }} />
      } />
      <ContactItem dest="mailto:kcwong395@gmail.com" icon={
        <EmailIcon className="inner" sx={{ color: (theme) => `${theme.palette.secondary.main}` }} />
      } />
      <ContactItem dest="https://www.societegenerale.com/en" icon={
        <WorkIcon className="inner" sx={{ color: (theme) => `${theme.palette.secondary.main}` }} />
      } />
    </Stack>
  );
}