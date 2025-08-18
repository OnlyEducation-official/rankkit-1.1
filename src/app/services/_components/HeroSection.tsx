/* eslint-disable react/no-unknown-property */

'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #f8faff 0%, #ffffff 50%, #fff5f5 100%)',
      }}
    >
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>

      {/* Background overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'linear-gradient(45deg, rgba(2, 18, 102, 0.05) 0%, transparent 50%, rgba(230, 45, 62, 0.05) 100%)',
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />

      {/* Floating elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          left: '8%',
          width: 80,
          height: 80,
          background: 'rgba(2, 18, 102, 0.2)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'float 6s ease-in-out infinite',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: 'transform 0.3s ease',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          right: '12%',
          width: 120,
          height: 120,
          background: 'rgba(230, 45, 62, 0.2)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite reverse',
          transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
          transition: 'transform 0.3s ease',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '20%',
          width: 60,
          height: 60,
          background: 'rgba(147, 51, 234, 0.2)',
          borderRadius: '50%',
          filter: 'blur(30px)',
          animation: 'float 10s ease-in-out infinite',
          transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * 0.025}px)`,
          transition: 'transform 0.3s ease',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <Box
          sx={{
            maxWidth: 960,
            margin: '0 auto',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: 'all 1s ease',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              // fontSize: { xs: '50px', sm: '60px', lg: '70px' },
              fontWeight: 700,
              mb: 3,
              bgcolor: 'primary.main',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.1,
              fontFamily: 'var(--font-clash-display, sans-serif)',
              animation: 'fadeInUp 1s ease 0.2s both',
            }}
          >
            Everything Your Brand Needs <Box component="br" />{' '}
            <Box component="span" sx={{ color: 'error.main !important' }}>
              In One Place
            </Box>
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              color: 'rgba(0, 0, 0, 0.8)',
              mb: 4,
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.4,
              fontFamily: 'var(--font-clash-display, sans-serif)',
              animation: 'fadeInUp 1s ease 0.4s both',
            }}
          >
            {`From startups to established players, RankKit is your creative + digital growth partner.
            We bring together strategy, storytelling, and technology — so you don't juggle vendors,
            you scale with one.`}
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{ mb: 6, animation: 'fadeInUp 1s ease 0.6s both' }}
          >
            <Button
              LinkComponent={Link}
              href="/contact-us"
              sx={{
                background: 'linear-gradient(90deg, #e62d3e 0%, #021266 100%)',
                borderRadius: '22px',
                px: 4,
                py: 2,
                fontWeight: 700,
                fontSize: '18px',
                color: '#fff',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                border: '2px solid white',
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-clash-display, sans-serif)',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              {`Let's Build Your Brand`}
              <ArrowRight size={20} style={{ transition: 'transform 0.3s ease' }} />
            </Button>

            <Button
              sx={{
                backgroundColor: 'white',
                border: '2px solid #021266',
                color: '#021266',
                borderRadius: '22px',
                px: 4,
                py: 2,
                fontWeight: 700,
                fontSize: '18px',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-clash-display, sans-serif)',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': {
                  backgroundColor: '#021266',
                  color: 'white',
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Play size={20} style={{ transition: 'transform 0.3s ease' }} />
              Watch Our Story
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
