'use client';

import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Grid, Button, Stack } from '@mui/material';
import { Play, Camera, Mic, Video, Edit, Lightbulb } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

export default function StudioAdvantage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(
          0,
          Math.min(1, (window.innerHeight - rect.top) / window.innerHeight),
        );
        setScrollY(scrollProgress);
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const studioCards = [
    {
      icon: <Camera size={24} color="white" />,
      title: 'Professional Setup',
      description: 'State-of-the-art equipment for every shoot',
    },
    {
      icon: <Lightbulb size={24} color="white" />,
      title: 'Creative Direction',
      description: 'Every frame tells your brand story',
    },
    {
      icon: <Edit size={24} color="white" />,
      title: 'Post Production',
      description: 'Editing that amplifies your message',
    },
    {
      icon: <Video size={24} color="white" />,
      title: 'Multi-Format',
      description: 'Content optimized for every platform',
    },
  ];

  const features = [
    { icon: <Camera size={24} color="rgba(255, 255, 255, 0.8)" />, text: 'Cinematic Shoots' },
    { icon: <Mic size={24} color="rgba(255, 255, 255, 0.8)" />, text: 'Podcast Setups' },
    { icon: <Video size={24} color="rgba(255, 255, 255, 0.8)" />, text: 'Product Videos' },
    { icon: <Edit size={24} color="rgba(255, 255, 255, 0.8)" />, text: 'Post Production' },
  ];

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #021266 0%, #e62d3e 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background overlays */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.2)',
          transform: `translateY(${scrollY * 30}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.2) 100%)',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              sx={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                transition: 'all 1s ease',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: 'white',
                  fontFamily: 'var(--font-clash-display, sans-serif)',
                }}
              >
                The RankKit Studio Advantage
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.9)',
                  mb: 4,
                  fontFamily: 'var(--font-clash-display, sans-serif)',
                }}
              >
                Why wait on third-party vendors when your agency has its own production house?
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 4,
                  lineHeight: 1.6,
                  letterSpacing: '0.9px',
                  fontFamily: 'var(--font-satoshi, sans-serif)',
                }}
              >
                At RankKit Studio, we bring your content to life — with cinematic shoots, podcast
                setups, e-commerce product tables, reels, and more. From scripting to editing, every
                frame is built to perform — inside our 1500 sq. ft. creative space in Navi Mumbai.
              </Typography>

              <Grid container spacing={3} sx={{ mb: 4 }}>
                {features.map((feature, index) => {
                  return (
                    <Grid size={6} key={uuidv4()}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1.5}
                        sx={{
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                          transition: 'all 0.8s ease',
                          transitionDelay: `${0.2 + index * 0.1}s`,
                        }}
                      >
                        {feature.icon}
                        <Typography
                          sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontWeight: 500,
                          }}
                        >
                          {feature.text}
                        </Typography>
                      </Stack>
                    </Grid>
                  );
                })}
              </Grid>

              <Button
                sx={{
                  backgroundColor: 'white',
                  color: '#021266',
                  borderRadius: '22px',
                  px: 4,
                  py: 2,
                  fontWeight: 700,
                  fontSize: '18px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  transition: 'all 0.3s ease',
                  fontFamily: 'var(--font-clash-display, sans-serif)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: '0.5s',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Play size={20} style={{ transition: 'transform 0.3s ease' }} />
                See Our Studio
              </Button>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <Grid
              container
              spacing={2}
              sx={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                transition: 'all 1s ease 0.3s',
              }}
            >
              {studioCards.map((card, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={uuidv4()}>
                  <Box
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: 2,
                      padding: { xs: 2, sm: 3 },
                      transition: 'all 0.3s ease',
                      animation: isVisible ? `floatUpDown 3s ease-in-out infinite` : 'none',
                      animationDelay: `${index * 0.5}s`,
                      height: '100%',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        transform: 'translateY(-8px) scale(1.02)',
                        animation: 'rotateGlow 2s ease-in-out infinite',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {card.icon}
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: 'white',
                        mb: 1,
                      }}
                    >
                      {card.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontWeight: 500,
                      }}
                    >
                      {card.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
