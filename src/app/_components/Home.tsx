import { Box } from '@mui/material';
import VideoSection from './VideoSection';
import Header from './Header';
import AllInOneSection from './allInOneIntro/AllInOneSection';
// import OurWork from './OurWork';
import OurServicesCards from './OurServicesCards';
import AiPowered from './AiPowered';
import Footer from './Footer';
import WhyRankkit from './whyRankkit/WhyRankkit';
import OurWork from './OurWork';
import ThreeD from './ThreeD.tsx/ThreeD';

export default function Homes() {
  return (
    <Box>
      <Header />
      <VideoSection />
      <AllInOneSection />
      <OurServicesCards />
      <WhyRankkit />
      <AiPowered />
      <ThreeD />
      <OurWork />
      <Footer />
    </Box>
  );
}
