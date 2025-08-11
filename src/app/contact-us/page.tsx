import { Container, Grid } from '@mui/material';
import React from 'react';
import ContactForm from './_components/ContactForm';
import RightSectionContactForm from './_components/RightSection';

export default function page() {
  return (
    <Container maxWidth="lg">
      <Grid container sx={{ marginBlockEnd: '160px' }}>
        <Grid size={6}>
          <ContactForm />
        </Grid>
        <Grid size={6}>
          <RightSectionContactForm />
        </Grid>
      </Grid>
    </Container>
  );
}
