import { Grid } from '@mui/material';
import React from 'react';
import ContactForm from './_components/ContactForm';

export default function page() {
  return (
    <Grid container>
      <Grid size={6}>
        <ContactForm />
      </Grid>
      <Grid size={6} />
    </Grid>
  );
}
