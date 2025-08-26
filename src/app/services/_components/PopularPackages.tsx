/* eslint-disable react/no-unknown-property */

'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { CheckCircle, Star, Zap, Rocket, ArrowRight } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';

const packages = [
  {
    icon: <Star size={32} color="white" />,
    name: 'CreatorNest Starter',
    price: '₹30K',
    color: 'linear-gradient(135deg, #021266 0%, rgba(2, 18, 102, 0.8) 100%)',
    bgColor: 'rgba(2, 18, 102, 0.1)',
    borderColor: 'rgba(2, 18, 102, 0.3)',
    features: [
      'Personal brand strategy',
      'Monthly shoot day',
      'Social content + optimization',
      'Growth tracking & analytics',
    ],
  },
  {
    icon: <Zap size={32} color="white" />,
    name: 'Brand Starter Pack',
    price: '₹35K',
    color: 'linear-gradient(135deg, #e62d3e 0%, rgba(230, 45, 62, 0.8) 100%)',
    bgColor: 'rgba(230, 45, 62, 0.1)',
    borderColor: 'rgba(230, 45, 62, 0.3)',
    popular: true,
    features: [
      'One-pager Website',
      'Logo + Branding kit',
      'SEO setup',
      'Starter social media templates',
      'Basic analytics setup',
    ],
  },
  {
    icon: <Rocket size={32} color="white" />,
    name: 'Social Media + 5 Reels',
    price: '₹40K',
    color: 'linear-gradient(135deg, #021266 0%, rgba(2, 18, 102, 0.8) 100%)',
    bgColor: 'rgba(2, 18, 102, 0.1)',
    borderColor: 'rgba(2, 18, 102, 0.3)',
    features: [
      'Alternate-day posting',
      'Content calendar',
      'Story design',
      'Strategy + execution',
      '5 studio-shot videos included',
    ],
  },
];

export default function PopularPackages() {
  const [animatingPrices, setAnimatingPrices] = useState<boolean[]>(
    new Array(packages.length).fill(false),
  );
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              // Start price animation after card becomes visible
              setTimeout(() => {
                setAnimatingPrices((prev) => {
                  const newAnimating = [...prev];
                  newAnimating[index] = true;
                  return newAnimating;
                });
              }, 300);
            }, index * 200);
          }
        },
        { threshold: 0.2 },
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <Box
      id="packages"
      component="section"
      sx={{
        py: 10,
        background: 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style jsx global>{`
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes countUp {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes bounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          40%,
          43% {
            transform: translateX(-50%) translateY(-10px);
          }
          70% {
            transform: translateX(-50%) translateY(-5px);
          }
          90% {
            transform: translateX(-50%) translateY(-2px);
          }
        }
      `}</style>

      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              background: 'linear-gradient(135deg, #021266 0%, #e62d3e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'slideInFromBottom 1s ease forwards',
            }}
          >
            Popular Packages That Work
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 500,
              color: 'rgba(0, 0, 0, 0.7)',
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6,
              letterSpacing: '0.9px',
              fontFamily: 'var(--font-satoshi, sans-serif)',
              animation: 'slideInFromBottom 1s ease 0.2s both',
            }}
          >
            {`Each pack designed to maximize your ROI and minimize your stress. Choose the perfect
            starting point for your brand's growth journey.`}
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {packages.map((pkg, index) => {
            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={uuidv4()} sx={{ height: 'auto' }}>
                <Box
                  sx={{
                    position: 'relative',
                    backgroundColor: '#ffffff',
                    borderRadius: 2.5,
                    border: `2px solid ${pkg.borderColor}`,
                    boxShadow: pkg.popular
                      ? '0 20px 40px rgba(230, 45, 62, 0.15)'
                      : '0 8px 30px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    height: 1,
                    transitionDelay: `${index * 0.1}s`,
                    ...(pkg.popular && {
                      outline: '2px solid #e62d3e',
                      outlineOffset: '2px',
                    }),
                    '&:hover': {
                      transform:
                        'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-16px) scale(1.02)',
                      boxShadow: pkg.popular
                        ? '0 30px 60px rgba(230, 45, 62, 0.25)'
                        : '0 20px 50px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: pkg.bgColor,
                      textAlign: 'center',
                      padding: { xs: 2, lg: 3 },
                      position: 'relative',
                      height: '300px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 3,
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        background: pkg.color,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        // mb: 2,
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        // transform: isHovered ? 'scale(1.2) rotate(10deg)' : 'scale(1) rotate(0deg)',
                      }}
                    >
                      {pkg.icon}
                    </Box>

                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 600,
                        // mb: 2,
                        fontFamily: 'var(--font-clash-display, sans-serif)',
                      }}
                    >
                      {pkg.name}
                    </Typography>

                    <Box
                      sx={{
                        typography: 'h3',
                        fontWeight: 700,
                        // mt: 2,
                        fontFamily: 'var(--font-clash-display, sans-serif)',
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          background: pkg.color,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          display: 'inline-block',
                          animation: animatingPrices[index]
                            ? 'countUp 1.5s ease-out forwards'
                            : 'none',
                        }}
                      >
                        {pkg.price}
                      </Box>
                      <Typography
                        component="span"
                        sx={{
                          fontSize: '18px',
                          color: 'rgba(0, 0, 0, 0.6)',
                          fontWeight: 'normal',
                        }}
                      >
                        /month
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ p: 4 }}>
                    <List sx={{ p: 0, mb: 4 }}>
                      {pkg.features.map((feature, featureIndex) => (
                        <ListItem
                          key={uuidv4()}
                          sx={{
                            px: 0,
                            py: 1,
                            opacity: 0,
                            animation: 'slideInLeft 0.6s ease forwards',
                            animationDelay: `${0.5 + featureIndex * 0.1}s`,
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircle size={20} color="#10b981" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography
                                sx={{
                                  fontSize: '16px',
                                  fontWeight: 500,
                                  color: 'rgba(0, 0, 0, 0.8)',
                                  letterSpacing: '0.9px',
                                  fontFamily: 'var(--font-satoshi, sans-serif)',
                                }}
                              >
                                {feature}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Button
                      fullWidth
                      sx={{
                        background: pkg.popular
                          ? 'linear-gradient(90deg, #e62d3e 0%, #021266 100%)'
                          : pkg.color,
                        color: 'white',
                        border: 'none',
                        borderRadius: '22px',
                        px: 4,
                        py: 2,
                        fontSize: '18px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontFamily: 'var(--font-clash-display, sans-serif)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                        },
                      }}
                    >
                      Get Started
                      <ArrowRight size={20} />
                    </Button>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 500,
              color: 'rgba(0, 0, 0, 0.6)',
              mb: 3,
              letterSpacing: '0.9px',
              fontFamily: 'var(--font-satoshi, sans-serif)',
            }}
          >
            {`Need something custom? We've got you covered.`}
          </Typography>
          <Button
            LinkComponent={Link}
            href="/contact-us"
            sx={{
              backgroundColor: 'white',
              border: '2px solid #021266',
              color: '#021266',
              borderRadius: '22px',
              px: 4,
              py: 2,
              fontWeight: 700,
              fontSize: '18px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'var(--font-clash-display, sans-serif)',
              '&:hover': {
                backgroundColor: '#021266',
                color: 'white',
                transform: 'scale(1.05)',
              },
            }}
          >
            Get Custom Quote
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
