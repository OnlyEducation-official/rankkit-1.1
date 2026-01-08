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

const ServicesGrid = lazy(() => import('./home/ServicesGrid'));
const TrustBar = lazy(() => import('./home/TrustBar'));
const HeroSection = lazy(() => import('./home/HeroSection'));
const ProcessSection = lazy(() => import('./home/ProcessSection'));
const FinalCTA = lazy(() => import('./home/FinalCTA'));
const AIPoweredAgencySection = lazy(() => import('./home/AIPoweredAgencySection'));
const PerformanceMarketingNearYouSection = lazy(
  () => import('./home/PerformanceMarketingNearYouSection'),
);
const FAQSection = lazy(() => import('./home/FAQSection'));
const DigitalMarketingModelSection = lazy(() => import('./home/DigitalMarketingModelSection'));
const SEOServiceOfferingsSection = lazy(() => import('./home/SEOServiceOfferingsSection'));
const HowSeoWorksSection = lazy(() => import('./home/HowSeoWorksSection'));
const RealWorldBenefitsCardsSection = lazy(() => import('./home/RealWorldBenefitsCardsSection'));
const OurToolsForSEOSection = lazy(() => import('./home/OurToolsForSEOSection'));
const WebTechnologiesSection = lazy(() => import('./home/WebTechnologiesSection'));
const BrandPromotionServicesSection = lazy(() => import('./home/BrandPromotionServicesSection'));
const CampaignTypesSection = lazy(() => import('./home/CampaignTypesSection'));
const RankkitStudioHighlightSection = lazy(() => import('./home/RankkitStudioHighlightSection'));

export default function Index() {
  return (
    <Stack>
      <Box sx={{ height: { xs: '80dvh', md: '100dvh' }, marginBlockStart: { xs: '85px', md: 0 } }}>
        <Suspense fallback="...Loading">
          <HeroSection />
        </Suspense>

        <Suspense fallback="...Loading">
          <ServicesGrid />
        </Suspense>

        <Suspense fallback="...Loading">
          <DigitalMarketingModelSection />
        </Suspense>

        <Suspense fallback="...Loading">
          <PerformanceMarketingNearYouSection />
        </Suspense>

        <Suspense fallback="...Loading">
          <ProcessSection />
        </Suspense>

        <Suspense fallback="...Loading">
          <FinalCTA />
        </Suspense>

        {/* <Suspense fallback="...Loading">
          <TrustBar />
        </Suspense> */}

        <Suspense fallback="...Loading">
          <SEOServiceOfferingsSection />
        </Suspense>

        <Suspense fallback="...Loading">
          <AIPoweredAgencySection />
        </Suspense>

        <Suspense fallback="...Loading">
          <HowSeoWorksSection />
        </Suspense>

        <Suspense fallback="...Loading">
          <RealWorldBenefitsCardsSection />
        </Suspense>

        <Suspense fallback="...Loading">
          <OurToolsForSEOSection />
        </Suspense>

        <Suspense fallback="...Loading">
          <WebTechnologiesSection />
        </Suspense>

        <Suspense fallback="...Loading">
          <BrandPromotionServicesSection />
        </Suspense>

        <Suspense fallback="...Loading">
          <CampaignTypesSection />
        </Suspense>

        <Suspense fallback="...Loading">
          <RankkitStudioHighlightSection />
        </Suspense>

        <Suspense fallback="...Loading">
          <FAQSection />
        </Suspense>
      </Box>

      {/* <Box sx={{ height: { xs: '80dvh', md: '100dvh' }, marginBlockStart: { xs: '85px', md: 0 } }}>
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
      </Suspense> */}

      {/* <OurWork /> */}
      {/* <Footer /> */}
    </Stack>
  );
}
