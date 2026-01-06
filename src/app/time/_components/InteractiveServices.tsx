'use client';

import * as React from 'react';
import { Box, Container, Grid, Typography, Paper, Stack, IconButton } from '@mui/material';

import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import { v4 as uuidv4 } from 'uuid';
/* --------------------------------------------------
 * TYPES
 * -------------------------------------------------- */
type Service = {
  id: string;
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
};

/* --------------------------------------------------
 * DATA
 * -------------------------------------------------- */
const serviceDetails: Service[] = [
  {
    id: 'strategy',
    icon: PaletteOutlinedIcon,
    title: 'Brand Strategy',
    tagline: 'Foundation for everything',
    description:
      "We begin with deep research and strategic insight to uncover your brand's unique positioning.",
    highlights: [
      'Market & competitive analysis',
      'Brand positioning statement',
      'Core values definition',
      'Target audience mapping',
    ],
  },
  {
    id: 'identity',
    icon: EditOutlinedIcon,
    title: 'Visual Identity',
    tagline: "Your brand's visual voice",
    description: 'Custom logos, color systems, and typography that capture your brand essence.',
    highlights: [
      'Logo design (multiple concepts)',
      'Color palette development',
      'Typography selection',
      'Brand mark variations',
    ],
  },
  {
    id: 'collateral',
    icon: GridViewOutlinedIcon,
    title: 'Brand Collateral',
    tagline: 'Consistent across touchpoints',
    description:
      'Comprehensive design systems that ensure consistency across all physical and digital materials.',
    highlights: [
      'Business cards & stationery',
      'Packaging design',
      'Signage & environmental design',
      'Marketing collateral',
    ],
  },
  {
    id: 'digital',
    icon: SmartphoneOutlinedIcon,
    title: 'Digital Design',
    tagline: 'Modern digital experiences',
    description:
      'Website design, apps, and digital interfaces that bring your brand to life online.',
    highlights: [
      'Website design & prototyping',
      'Mobile app design',
      'UI/UX systems',
      'Digital brand guidelines',
    ],
  },
];

/* --------------------------------------------------
 * COMPONENT
 * -------------------------------------------------- */
export default function InteractiveServices() {
  const [activeService, setActiveService] = React.useState('strategy');
  const active = serviceDetails.find((s) => s.id === activeService);

  if (!active) return null;

  const ActiveIcon = active.icon;

  return (
    <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box textAlign="center" mb={10}>
          <Typography variant="h3" fontWeight={700} mb={2}>
            Our Services in Depth
          </Typography>
          <Typography color="text.secondary" maxWidth={600} mx="auto">
            Explore our comprehensive branding services designed to elevate your brand.
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="stretch">
          {/* Navigation */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2}>
              {serviceDetails.map((service) => {
                const Icon = service.icon;
                const isActive = service.id === activeService;

                return (
                  <Paper
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    elevation={isActive ? 6 : 0}
                    sx={{
                      p: 3,
                      cursor: 'pointer',
                      borderRadius: 2,
                      border: isActive ? 'none' : '1px solid',
                      borderColor: 'divider',
                      bgcolor: isActive ? 'grey.900' : 'background.paper',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        bgcolor: isActive ? 'grey.900' : 'grey.50',
                      },
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: isActive ? 'background.paper' : 'grey.100',
                        }}
                      >
                        <Icon
                          sx={{
                            color: isActive ? 'text.primary' : 'primary.main',
                          }}
                        />
                      </Box>

                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight={600}
                          color={isActive ? 'common.white' : 'text.primary'}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color={isActive ? 'grey.400' : 'text.secondary'}
                        >
                          {service.tagline}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                );
              })}
            </Stack>
          </Grid>

          {/* Details */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 5,
                height: '100%',
                borderRadius: 3,
                bgcolor: 'grey.50',
              }}
            >
              <Stack spacing={4}>
                <Stack direction="row" spacing={3} alignItems="center">
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 2,
                      bgcolor: 'primary.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ActiveIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>

                  <Box>
                    <Typography variant="h4" fontWeight={700}>
                      {active.title}
                    </Typography>
                    <Typography color="text.secondary">{active.tagline}</Typography>
                  </Box>
                </Stack>

                <Typography color="text.secondary" fontSize="1.05rem">
                  {active.description}
                </Typography>

                <Box>
                  <Typography variant="overline" color="text.primary" fontWeight={600}>
                    What’s Included
                  </Typography>

                  <Stack spacing={1.5} mt={2}>
                    {active.highlights.map((item) => (
                      <Stack
                        key={uuidv4()}
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        justifyItems="center"
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            mt: '7px',
                          }}
                        />
                        <Typography color="text.secondary">{item}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
