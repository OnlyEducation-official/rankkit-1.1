import { Typography, Chip, Box } from '@mui/material';
import { LucideProps } from 'lucide-react';
import React, { ForwardRefExoticComponent, RefAttributes, useState } from 'react';
import Link from 'next/link';
import { MultiServices } from './CoreServices';

export default function CoreServiceCards({
  service,
  index,
  IconComponent,
}: {
  service: MultiServices;
  index: number;
  IconComponent: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      component={Link}
      href={`services/${service.href}`}
      sx={{
        backgroundColor: '#ffffff',
        borderRadius: 2,
        p: 4,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transitionDelay: `${index * 0.1}s`,
        '&:hover': {
          transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-8px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
        },
        height: 'auto',
        flex: 1,
        textDecoration: 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        sx={{
          width: 64,
          height: 64,
          backgroundColor: service.bgColor,
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3,
          transition: 'all 0.3s ease',
          transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
        }}
      >
        <Box
          sx={{
            width: 32,
            height: 32,
            background: service.color,
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <IconComponent size={20} />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          mb: 2,
          flexWrap: 'wrap',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: '32px',
            fontWeight: 600,
            color: 'grey.800',
            fontFamily: 'var(--font-clash-display, sans-serif)',
          }}
        >
          {service.title}
        </Typography>
        {service.badge && (
          <Chip
            label={service.badge}
            size="small"
            sx={{
              background: 'linear-gradient(135deg, #e62d3e 0%, rgba(230, 45, 62, 0.8) 100%)',
              color: 'white',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          />
        )}
      </Box>

      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 500,
          color: 'rgba(0, 0, 0, 0.7)',
          lineHeight: 1.6,
          letterSpacing: '0.9px',
          fontFamily: 'var(--font-satoshi, sans-serif)',
        }}
      >
        {service.description}
      </Typography>
    </Box>
  );
}
