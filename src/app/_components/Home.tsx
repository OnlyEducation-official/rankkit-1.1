/* eslint-disable jsx-a11y/media-has-caption */

import { Box } from '@mui/material';
import VideoSection from './VideoSection';
import Header from './Header';
import AllInOneSection from './allInOneIntro/AllInOneSection';
import OurWork from './OurWork';
import OurServicesCards from './OurServicesCards';

export default function Homes() {
  return (
    <Box>
      <Header />
      <VideoSection />
      <AllInOneSection />
      <OurServicesCards />
      <OurWork />
      <Box sx={{ height: '100vh', position: 'absolute' }}>jadhasfjh</Box>
    </Box>
  );
}
