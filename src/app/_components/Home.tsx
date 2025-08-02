import { Box } from '@mui/material';
import VideoSection from './VideoSection';
import Header from './Header';
import AllInOneSection from './allInOneIntro/AllInOneSection';
import OurWork from './OurWork';
import OurServicesCards from './OurServicesCards';
import WhyRankkit from './WhyRankkit';
import Footer from './Footer';

export default function Homes() {
  return (
    <Box>
      <Header />
      <VideoSection />
      <AllInOneSection />
      <OurServicesCards />
      <WhyRankkit />
      <OurWork />
      <Box sx={{ height: '100vh', position: 'absolute' }}>jadhasfjh</Box>
      <Footer />
    </Box>
  );
}
