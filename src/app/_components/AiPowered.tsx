'use client';

import {
  Box,
  Button,
  Typography,
  Paper,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import { Dispatch, ReactNode, SetStateAction, useRef, useState } from 'react';
import AiImg from '@/assets/images/home/aiRankit.png';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const features = [
  {
    id: 'f1',
    title: (
      <>
        AI + Human <br /> Expertise
      </>
    ),
    content:
      'We blend cutting-edge AI with the creativity of seasoned marketers. Our AI tools forecast market trends with precision, while our experts craft strategies that convert. With this synergy, you don’t just get campaignsYou get campaigns that deliver measurable growth and stay ahead of the competition.',
  },
  {
    id: 'f2',
    title: 'Performance Obsessed',
    content:
      'We don’t settle for “good enough.” Every campaign we run is optimized down to the smallest detail for maximum ROI. From A/B testing to AI-driven analytics, our team tracks every click, every view, and every lead—so you only invest in what truly drives results. Expect transparency, measurable growth, and nothing less.',
  },
  {
    id: 'f3',
    title: 'Hyper-Personalized Campaigns',
    content:
      'Your brand is unique, and your marketing should be too. We ditch cookie-cutter strategies and build customized campaigns that align with your brand’s voice and audience. By leveraging AI insights and behavioral data, we create content that speaks directly to your customers and turns engagement into conversions.',
  },
  {
    id: 'f4',
    title: (
      <>
        Real-Time <br /> Insights
      </>
    ),
    content:
      'Stop waiting weeks to see results. Our AI-powered dashboards give you real-time data you can act on. With clear reporting and expert recommendations, you’ll always know what’s working, what needs refining, and how to scale faster—no guesswork, just smart, data-backed decisions.',
  },
];

function CardButton({
  feature,
  index,
  activeIndex,
  setActiveIndex,
}: {
  feature: {
    id: string;
    title: string | ReactNode;
    content: string;
  };
  index: number;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}) {
  return (
    <Box
      sx={{
        background:
          activeIndex === index ? 'linear-gradient(135deg, #FC5A4A, #021266)' : '#00000040',
        height: 1,
        borderRadius: '25px',
        padding: '3px',
      }}
    >
      <Button
        key={feature.id}
        onClick={() => setActiveIndex(index)}
        sx={{
          // backgroundColor: activeIndex === index ? 'primary.dark' : 'grey.100',
          //   background:
          //     activeIndex === index ? 'linear-gradient(90deg, #FC5A4A 0%, #021266 100%)' : '#f5f5f5',
          backgroundColor: 'common.white',
          color: activeIndex === index ? 'text.primary' : 'text.primary',
          borderRadius: '22px',
          paddingBlock: 3,
          paddingInline: 2.5,
          height: 1,
          width: 1,
          letterSpacing: 0.7,
          typography: 'subtitle2',
          fontFamily: 'var(--font-clash-display)',
          fontWeight: '600 !important',
          wordSpacing: 2,
          // width: 1 / 5,
          // position: 'relative',
          textAlign: 'center',
          //   textTransform: 'none',
          '&:hover': {
            // backgroundColor: 'grey.100',
            background: 'linear-gradient(90deg, #FC5A4A 0%, #021266 100%)',
            color: 'common.white',
          },
        }}
      >
        {/* <Box sx={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }} /> */}
        {feature.title}
      </Button>
    </Box>
  );
}

export default function AiPowered() {
  const [activeIndex, setActiveIndex] = useState(0);
  const xsSize = useMediaQuery('(max-width: 600px)');

  const scrollRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.6;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ paddingBlockEnd: 4 }}>
        <Typography
          variant="h2"
          sx={{ paddingBlockEnd: 5, fontWeight: 600, color: 'primary.main' }}
        >
          <Box component="span" sx={{ color: 'error.main' }}>
            AI
          </Box>
          -Driven Digital Marketing
        </Typography>
        <Grid container spacing={6} sx={{ paddingBlockEnd: 3 }}>
          <Grid
            size={{ xs: 12, sm: 8 }}
            sx={{ display: 'flex', flexDirection: 'column', gap: 1.75 }}
          >
            <Typography variant="subtitle2">
              In a world where algorithms change overnight and trends expire in days, traditional
              marketing is no longer enough. At RankKit, we combine AI precision with human
              expertise to create campaigns that don’t just keep up they lead the way.
            </Typography>
            <Typography variant="subtitle2">
              Our advanced AI tools analyze audience behavior, predict upcoming trends, and optimize
              campaigns in real time. Pair that with our team of creative strategists, media
              producers, and growth experts, and you get a marketing engine that never stops working
              for your brand.
            </Typography>
            <Typography variant="subtitle2">
              From intelligent content calendars to automated reporting dashboards, we make every
              click, every impression, and every lead count for something bigger — measurable
              growth. With RankKit, you’re not just running campaigns. You’re running the future of
              digital marketing, backed by technology that learns and a team that delivers.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }} sx={{ flex: 1, order: { xs: -1, sm: 0 } }}>
            <Box
              sx={{
                height: { xs: 200, sm: '100%' },
                position: 'relative',
                display: 'flex',
                // alignItems: 'stretch',
              }}
            >
              <Image
                src={AiImg}
                alt="AI"
                // eslint-disable-next-line no-unneeded-ternary
                fill={xsSize ? false : true}
                style={{
                  objectFit: 'contain',
                  aspectRatio: 0.82 / 1,
                  width: xsSize ? 'auto' : '100%',
                  height: xsSize ? '220px' : '100%',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ position: 'relative' }}>
        {/* Left button (only on mobile) */}
        {isMobile && (
          <IconButton
            onClick={() => scroll('left')}
            sx={{
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translateY(-50%)',
              zIndex: 1,
              backgroundColor: 'white',
              boxShadow: 1,
            }}
          >
            <ChevronLeft />
          </IconButton>
        )}

        {/* Scrollable container */}
        <Box
          ref={scrollRef}
          sx={{
            display: {
              xs: 'flex',
              sm: 'grid',
            },
            gridTemplateColumns: {
              sm: 'repeat(auto-fill, minmax(250px, 1fr))',
            },
            overflowX: {
              xs: 'auto',
              sm: 'unset',
            },
            gap: 2,
            py: 2,
            px: isMobile ? 5 : 0,
            scrollBehavior: 'smooth',
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={feature.id}
              sx={{
                flex: {
                  xs: '0 0 80%',
                  sm: 'unset',
                },
                width: {
                  xs: '80%',
                  sm: '100%',
                },
                scrollSnapAlign: 'start',
              }}
            >
              <CardButton
                index={index}
                feature={feature}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </Box>
          ))}
        </Box>

        {/* Right button (only on mobile) */}
        {isMobile && (
          <IconButton
            onClick={() => scroll('right')}
            sx={{
              position: 'absolute',
              top: '50%',
              right: 0,
              transform: 'translateY(-50%)',
              zIndex: 1,
              backgroundColor: 'white',
              boxShadow: 1,
            }}
          >
            <ChevronRight />
          </IconButton>
        )}
      </Box>
      <Box
        sx={{
          borderRadius: '25px',
          p: '3px', // this creates the gradient border width
          background: 'linear-gradient(135deg, #FC5A4A, #021266)',
          mt: 2,
        }}
      >
        <Paper
          elevation={1}
          sx={{ mt: 0, p: 3, backgroundColor: 'common.white', borderRadius: '22px' }}
        >
          <Typography variant="subtitle2">{features[activeIndex].content}</Typography>
        </Paper>
      </Box>
    </Container>
  );
}
