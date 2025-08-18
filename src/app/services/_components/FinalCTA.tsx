/* eslint-disable react/no-unknown-property */

'use client';

import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';

export default function FinalCTA() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      sectionRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      observer.disconnect();
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        sectionRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const cards = [
    {
      icon: MessageCircle,
      title: 'Free Consultation',
      description:
        "Let's discuss your brand goals and create a custom strategy that delivers results.",
      buttonText: 'Book Free Call',
      color: 'linear-gradient(135deg, #021266 0%, rgba(2, 18, 102, 0.8) 100%)',
    },
    {
      icon: Calendar,
      title: 'Custom Quote',
      description:
        'Get a detailed proposal tailored to your specific needs and budget requirements.',
      buttonText: 'Get Quote',
      color: 'linear-gradient(135deg, #e62d3e 0%, rgba(230, 45, 62, 0.8) 100%)',
    },
  ];

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        py: 10,
        background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style jsx global>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }

        @keyframes starTwinkle {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        .ripple-effect::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transform: translate(-50%, -50%);
          animation: ripple 0.6s ease-out;
        }
      `}</style>

      {/* Background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '-96px',
          left: '-96px',
          width: 384,
          height: 384,
          background: 'rgba(2, 18, 102, 0.1)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: 'transform 0.3s ease',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '-96px',
          right: '-96px',
          width: 384,
          height: 384,
          background: 'rgba(230, 45, 62, 0.1)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          transition: 'transform 0.3s ease',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
        <Box
          sx={{
            textAlign: 'center',
            mb: 8,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              background: 'linear-gradient(135deg, #021266 0%, #e62d3e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Ready to Build Something Extraordinary?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: 'rgba(0, 0, 0, 0.8)',
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.4,
            }}
          >
            {`Your brand doesn't need more noise — it needs clarity, consistency, and conversion. And
            that's exactly what we bring.`}
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {cards.map((card, index) => {
            const IconComponent = card.icon;

            return (
              <Grid size={{ xs: 12, md: 6 }} key={card.title}>
                <Box
                  className="card-box"
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: 2.5,
                    p: 5,
                    textAlign: 'center',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                    transitionDelay: `${0.3 + index * 0.2}s`,
                    '&:hover': {
                      transform:
                        'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-12px) scale(1.02)',
                      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                    },
                    // 👇 hover effect for icon inside card
                    '&:hover .card-icon': {
                      transform: 'scale(1.2) rotate(10deg)',
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                    },
                    '&:hover .card-button': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  <Box
                    className="card-icon"
                    sx={{
                      width: 64,
                      height: 64,
                      background: card.color,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: 'scale(1) rotate(0deg)',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <IconComponent size={32} color="white" />
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: '32px',
                      fontWeight: 600,
                      mb: 2,
                      fontFamily: 'var(--font-clash-display, sans-serif)',
                    }}
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '16px',
                      fontWeight: 500,
                      color: 'rgba(0, 0, 0, 0.7)',
                      mb: 3,
                      letterSpacing: '0.9px',
                      fontFamily: 'var(--font-satoshi, sans-serif)',
                    }}
                  >
                    {card.description}
                  </Typography>

                  <Button
                    className="card-button"
                    sx={{
                      background: card.color,
                      color: 'white',
                      border: 'none',
                      borderRadius: '22px',
                      px: 4,
                      py: 2,
                      fontSize: '18px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                      mx: 'auto',
                      transition: 'all 0.3s ease',
                      fontFamily: 'var(--font-clash-display, sans-serif)',
                    }}
                  >
                    {card.buttonText}
                    <ArrowRight size={20} style={{ transition: 'transform 0.3s ease' }} />
                  </Button>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
