/* eslint-disable react/no-unknown-property */
/* eslint-disable react/require-default-props */

'use client';

import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

interface StatItem {
  icon: string;
  number: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: '🚀',
    number: 85,
    suffix: '+',
    label: 'Brands Launched',
  },
  {
    icon: '📈',
    number: 5,
    suffix: 'M+',
    label: 'Organic Views Generated',
  },
  {
    icon: '🎬',
    number: 300,
    suffix: '+',
    label: 'Videos Produced',
  },
  {
    icon: '🧠',
    number: 15,
    suffix: '+',
    label: 'Team Experts',
  },
];

function AnimatedCounter({
  target,
  suffix,
  duration = 2000,
  delay = 0,
}: {
  target: number;
  suffix: string;
  duration?: number;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setTimeout(() => {
            setIsVisible(true);
            setHasStarted(true);
          }, delay);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, delay]);

  useEffect(() => {
    if (!isVisible) return;

    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    // eslint-disable-next-line consistent-return
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return (
    <Typography
      ref={ref}
      sx={{
        fontSize: { xs: '50px', sm: '60px', lg: '70px' },
        fontWeight: 700,
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        fontFamily: 'var(--font-clash-display, sans-serif)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.5)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        animation: isVisible ? 'pulse 2s ease-in-out infinite' : 'none',
      }}
    >
      {count}
      {suffix}
    </Typography>
  );
}

export default function AnimatedStats() {
  const [scrollY, setScrollY] = useState(0);
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
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #021266 0%, #e62d3e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translateY(0);
          }
          40%,
          43% {
            transform: translateY(-15px);
          }
          70% {
            transform: translateY(-7px);
          }
          90% {
            transform: translateY(-3px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes floatingBubbles {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(5px) rotate(-1deg);
          }
        }

        @keyframes shimmerGlow {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>

      {/* Background animation */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
          `,
          animation: 'floatingBubbles 10s ease-in-out infinite',
          transform: `translateY(${scrollY * 20}px)`,
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
            'linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0%, transparent 50%, rgba(0, 0, 0, 0.1) 100%)',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: 'white',
              mb: 2,
              fontFamily: 'var(--font-clash-display, sans-serif)',
              animation: 'fadeInDown 1s ease forwards',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            }}
          >
            Results That Speak Volumes
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: 'var(--font-clash-display, sans-serif)',
              animation: 'fadeInDown 1s ease 0.2s both',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
            }}
          >
            {`Real numbers from real brands we've helped grow`}
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center">
          {stats.map((stat, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.label}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: { xs: 2, sm: 4 },
                  borderRadius: 2.5,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  animation: `slideInUp 0.8s ease ${index * 0.2}s both`,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    transform: 'translateY(-8px) scale(1.05)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                    backgroundImage:
                      'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%)',
                    backgroundSize: '200% 100%',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '48px', sm: '64px' },
                    mb: 2,
                    display: 'block',
                    animation: `bounce 2s ease-in-out infinite`,
                    animationDelay: `${index * 0.3}s`,
                    filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.2) rotate(10deg)',
                    },
                  }}
                >
                  {stat.icon}
                </Typography>
                <AnimatedCounter target={stat.number} suffix={stat.suffix} delay={index * 300} />
                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '16px',
                    fontWeight: 500,
                    mt: 1,
                    letterSpacing: '0.9px',
                    fontFamily: 'var(--font-satoshi, sans-serif)',
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
