import { Box, CircularProgress, Stack, Typography } from '@mui/material';
// import VideoSection from './VideoSection';
import { lazy, Suspense } from 'react';
// import AllInOneSection from './allInOneIntro/AllInOneSection';
// import OurServicesCards from './OurServicesCards';
// import AiPowered from './AiPowered';
// import WhyRankkit from './whyRankkit/WhyRankkit';
// import OurWork from './OurWork';
// import Funnel from './Funnel';
// import ThreeD from './ThreeD.tsx/ThreeD';
// import FaqHomeSection from './FaqHomeSection';
// import StudioMain from './studioMain';

const VideoSection = lazy(() => import('./VideoSection'));
const AllInOneSection = lazy(() => import('./allInOneIntro/AllInOneSection'));
const OurServicesCards = lazy(() => import('./OurServicesCards'));
const AiPowered = lazy(() => import('./AiPowered'));
const WhyRankkit = lazy(() => import('./whyRankkit/WhyRankkit'));
const Funnel = lazy(() => import('./Funnel'));
const ThreeD = lazy(() => import('./ThreeD.tsx/ThreeD'));
const FaqHomeSection = lazy(() => import('./FaqHomeSection'));
const StudioMain = lazy(() => import('./studioMain'));

export function LoadingPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#f9fafb', // light background
        color: '#333',
      }}
    >
      <CircularProgress sx={{ mb: 2 }} />
      <Typography variant="h6">Loading, please wait...</Typography>
    </Box>
  );
}

export default function Index() {
  return (
    <Stack gap={20} sx={{ marginBlockEnd: '160px' }}>
      <Box sx={{ height: { md: '100vh' } }}>
        {/* <Header /> */}
        <Suspense fallback={<LoadingPage />}>
          <VideoSection />
        </Suspense>
      </Box>
      <Suspense fallback="...Loading">
        <AllInOneSection />
      </Suspense>
      <Suspense fallback="...Loading">
        <StudioMain />
      </Suspense>
      <Suspense fallback="...Loading">
        <OurServicesCards />
      </Suspense>
      <Suspense fallback="...Loading">
        <ThreeD />
      </Suspense>
      <Suspense fallback="...Loading">
        <WhyRankkit />
      </Suspense>
      <Suspense fallback="...Loading">
        <AiPowered />
      </Suspense>
      <Suspense fallback="...Loading">
        <Funnel />
      </Suspense>
      <Suspense fallback="...Loading">
        <FaqHomeSection />
      </Suspense>

      {/* <OurWork /> */}
      {/* <Footer /> */}
    </Stack>
  );
}
