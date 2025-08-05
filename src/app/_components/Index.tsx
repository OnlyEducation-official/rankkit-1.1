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
import Funnel from './Funnel';
import ThreeD from './ThreeD.tsx/ThreeD';
import FaqHomeSection from './FaqHomeSection';

export default function Index() {
  return (
    <Box>
      <Header />
      <VideoSection />
      <AllInOneSection />
      <OurServicesCards />
      <ThreeD />
      <WhyRankkit />
      <Funnel />
      <AiPowered />
      <FaqHomeSection />
      {/* <OurWork /> */}
      <Footer />
    </Box>
  );
}
