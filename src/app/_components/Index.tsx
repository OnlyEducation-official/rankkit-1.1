import { Box, Stack } from '@mui/material';
import VideoSection from './VideoSection';
import Header from './Header';
import AllInOneSection from './allInOneIntro/AllInOneSection';
import OurServicesCards from './OurServicesCards';
import AiPowered from './AiPowered';
import Footer from './Footer';
import WhyRankkit from './whyRankkit/WhyRankkit';
// import OurWork from './OurWork';
import Funnel from './Funnel';
import ThreeD from './ThreeD.tsx/ThreeD';
import FaqHomeSection from './FaqHomeSection';
import StudioMain from './studioMain';

export default function Index() {
  return (
    <Stack gap={20} sx={{ marginBlockEnd: '160px' }}>
      <Box>
        {/* <Header /> */}
        <VideoSection />
      </Box>
      <AllInOneSection />
      <StudioMain />
      <OurServicesCards />
      <ThreeD />
      <WhyRankkit />
      <AiPowered />
      <Funnel />
      <FaqHomeSection />
      {/* <OurWork /> */}
      {/* <Footer /> */}
    </Stack>
  );
}
