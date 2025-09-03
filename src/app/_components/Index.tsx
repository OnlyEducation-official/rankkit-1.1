import { Box, Stack } from '@mui/material';
import { lazy, Suspense } from 'react';
import VideoSection from './VideoSection';

const AllInOneSection = lazy(() => import('./allInOneIntro/AllInOneSection'));
const OurServicesCards = lazy(() => import('./OurServicesCards'));
const AiPowered = lazy(() => import('./AiPowered'));
const WhyRankkit = lazy(() => import('./whyRankkit/WhyRankkit'));
const Funnel = lazy(() => import('./Funnel'));
const ThreeD = lazy(() => import('./ThreeD.tsx/ThreeD'));
const FaqHomeSection = lazy(() => import('./FaqHomeSection'));
const StudioMain = lazy(() => import('./studioMain'));

export default function Index() {
  return (
    <Stack>
      <Box sx={{ height: { xs: '80dvh', md: '100dvh' }, marginBlockStart: { xs: '85px', md: 0 } }}>
        <VideoSection />
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
        <Funnel />
      </Suspense>
      <Suspense fallback="...Loading">
        <AiPowered />
      </Suspense>
      <Suspense fallback="...Loading">
        <FaqHomeSection />
      </Suspense>

      {/* <OurWork /> */}
      {/* <Footer /> */}
    </Stack>
  );
}
