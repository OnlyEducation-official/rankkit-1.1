import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import tktCard from '@/assets/images/tktCard.jpg';
import itcCard from '@/assets/images/itcCard.jpg';
import onlyEduCard from '@/assets/images/onlyEduCard.jpg';
import cossyBoxCard from '@/assets/images/cossyBoxCard.jpg';
import kalpCard from '@/assets/images/kalpCard.jpg';
import bakeCard from '@/assets/images/bakeCard.jpg';
import troyCard from '@/assets/images/troyCard.jpg';
import palmCard from '@/assets/images/palmCard.jpg';

const caseStudies = [
  {
    name: 'The Kerala Table',
    image: tktCard, // replace with actual path
    text: 'View Case Study',
  },
  {
    name: 'ITC',
    image: itcCard,
    text: 'View Case Study',
  },
  {
    name: 'Only Education',
    image: onlyEduCard,
    text: 'View Case Study',
  },
  {
    name: 'Key Logo',
    image: cossyBoxCard,
    text: 'View Case Study',
  },
  {
    name: 'The Kerala Table1',
    image: kalpCard, // replace with actual path
    text: 'View Case Study',
  },
  {
    name: 'ITC1',
    image: bakeCard,
    text: 'View Case Study',
  },
  {
    name: 'Only Education1',
    image: troyCard,
    text: 'View Case Study',
  },
  {
    name: 'Key Logo1',
    image: palmCard,
    text: 'View Case Study',
  },
  {
    name: 'The Kerala Table',
    image: tktCard, // replace with actual path
    text: 'View Case Study',
  },
  {
    name: 'ITC',
    image: itcCard,
    text: 'View Case Study',
  },
  {
    name: 'Only Education',
    image: onlyEduCard,
    text: 'View Case Study',
  },
  {
    name: 'Key Logo',
    image: cossyBoxCard,
    text: 'View Case Study',
  },
  {
    name: 'The Kerala Table',
    image: tktCard, // replace with actual path
    text: 'View Case Study',
  },
  {
    name: 'ITC',
    image: itcCard,
    text: 'View Case Study',
  },
  {
    name: 'Only Education',
    image: onlyEduCard,
    text: 'View Case Study',
  },
  {
    name: 'Key Logo',
    image: cossyBoxCard,
    text: 'View Case Study',
  },
  {
    name: 'The Kerala Table1',
    image: kalpCard, // replace with actual path
    text: 'View Case Study',
  },
  {
    name: 'ITC1',
    image: bakeCard,
    text: 'View Case Study',
  },
];

export default function OurWork() {
  return (
    <Container maxWidth="lg">
      <Grid container sx={{ paddingTop: 10, paddingBottom: 4 }} spacing={3}>
        <Grid size={12}>
          <Typography variant="h1" fontWeight={600} textAlign="center" paddingBlockEnd={4}>
            Our Work
          </Typography>
        </Grid>
        {caseStudies.map((item) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 2 }}
            key={item.name}
            sx={{
              backgroundImage: `url(${item.image.src})`,
              backgroundSize: 'fill',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              // height: 300,
              // p: 2,
              // color: '#fff',
              aspectRatio: 0.85 / 1,
              position: 'sticky',
              top: 0,
              borderRadius: '10%',
              overflow: 'hidden',
            }}
          >
            {/* <Typography variant="h6">{item.name}</Typography>
          <Button variant="outlined" sx={{ mt: 1, color: '#fff', borderColor: '#fff' }}>
            {item.text}
          </Button> */}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
