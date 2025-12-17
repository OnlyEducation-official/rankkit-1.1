'use client';

import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import React, { ReactNode, ElementType, Fragment } from 'react';
import discoveryImage from '@/assets/images/find.webp';
import taskImage from '@/assets/images/task.webp';
import designImage from '@/assets/images/design.webp';
import uiImage from '@/assets/images/ux-design.webp';
import backendImage from '@/assets/images/backend.webp';
import integrationImage from '@/assets/images/cloud-computing.webp';
import testingImage from '@/assets/images/testing.webp';
import deployImage from '@/assets/images/deployment.webp';
import Image, { StaticImageData } from 'next/image';
import { AlignHorizontalSpaceAround, MoveRight, MoveDown } from 'lucide-react';
import theme from '@/theme/theme';

const developmentList = [
  {
    id: 1,
    title: 'Discovery',
    description:
      'We gather detailed information about your business, goals, and requirements to understand the project scope and objectives, setting the foundation for a successful website.',
    icon: discoveryImage,
    arrowIcon: { xs: true, sm: true, lg: true },
  },
  {
    id: 2,
    title: 'Planning',
    description:
      'We create a comprehensive project plan outlining timelines, milestones, and deliverables, ensuring clear communication and alignment with your business goals throughout the development process.',
    icon: taskImage,
    arrowIcon: { xs: true, sm: false, lg: true },
  },
  {
    id: 3,
    title: 'Design',
    description:
      'Our team develops wireframes and design mockups to establish the visual look and feel of the website, focusing on layout, colour schemes, and user experience.',
    icon: designImage,
    arrowIcon: { xs: true, sm: true, lg: false },
  },
  {
    id: 4,
    title: 'Front-end Development',
    description:
      'We build the website’s user interface using HTML, CSS, and JavaScript, ensuring a responsive, interactive, and visually appealing experience for visitors across all devices.',
    icon: uiImage,
    arrowIcon: { xs: true, sm: false, lg: true },
  },
  {
    id: 5,
    title: 'Back-end Development',
    description:
      'We create server-side logic and database management to handle data processing, storage, and application functionality, ensuring secure and efficient operations behind the scenes.',
    icon: backendImage,
    arrowIcon: { xs: true, sm: true, lg: true },
  },
  {
    id: 6,
    title: 'Integration',
    description:
      'We integrate third-party tools, APIs, and services to enhance website functionality, such as payment gateways, social media, and analytics, ensuring smooth operation and feature expansion.',
    icon: integrationImage,
    arrowIcon: { xs: true, sm: false, lg: false },
  },
  {
    id: 7,
    title: 'Testing',
    description:
      'We conduct thorough testing across different devices and browsers to identify and fix bugs, optimize performance, and ensure all features function correctly before the site goes live.',
    icon: testingImage,
    arrowIcon: { xs: true, sm: true, lg: true },
  },
  {
    id: 8,
    title: 'Deployment',
    description:
      'We migrate the website to the live server, configuring hosting and domain settings and performing final checks to ensure everything is operational and ready for public access.',
    icon: deployImage,
  },
];

export function ProcessCard({
  id,
  title,
  description,
  icon,
}: {
  id: number;
  title?: string;
  description?: string;
  icon: StaticImageData;
}) {
  return (
    <Grid
      size={{ xs: 12, sm: 5, md: 3 }}
      sx={{
        position: 'relative',
        paddingBlock: 4,
        paddingInline: 2,
        border: '2.5px solid',
        borderColor: '#e0e0e0',
        borderRadius: 3,
        flexDirection: 'column',
        display: 'flex',
        flexGrow: 1,
        alignItems: 'flex-start',
        justifyContent: 'start',
        gap: 1,
        ':before': {
          position: 'absolute',
          content: `"${id}"`,
          width: 30,
          height: 30,
          top: -15,
          left: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          borderRadius: '50%',
          bgcolor: 'primary.main',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Image
          src={icon}
          width={40}
          height={40}
          alt="icon"
          style={{
            width: 'clamp(28px, 3vw, 40px)',
            height: 'clamp(28px, 3vw, 40px)',
          }}
        />
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            fontSize: 'clamp(1rem, calc(1rem + (0.25 * ((100vw - 900px) / 300))), 1.25rem)',
          }}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        variant="overline"
        sx={{
          lineHeight: 1.5,
          fontWeight: 500,
          fontSize: 'clamp(0.75rem, calc(0.75rem + (0.15 * ((100vw - 900px) / 300))), 0.9rem)',
        }}
      >
        {description}
      </Typography>
    </Grid>
  );
}

export default function OurDevelopmentProcess() {
  const isbreakpoint = useMediaQuery('(max-width: 600px)');
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md')); // ≥900px
  // eslint-disable-next-line no-nested-ternary
  const arrowKey = isMobile ? 'xs' : isTablet ? 'sm' : isDesktop ? 'lg' : null;
  return (
    <Grid container>
      <Grid size={12}>
        {' '}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            mb: 2,
            textAlign: 'center',
            lineHeight: 1.2,
            fontSize: {
              xs: '1.75rem',
              sm: '2rem',
              md: '2.25rem',
            },
          }}
        >
          Our Web Development Process
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {/* Section Description */}
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.7,
            textAlign: 'center',
            fontSize: {
              // xs: 0–599
              xs: 'clamp(0.95rem, 1.1vw, 1rem)',

              // sm: 600–899
              // sm: 'clamp(1rem, 1.2vw, 1.05rem)',

              // // md: 900–1199
              // md: 'clamp(1.05rem, 1.3vw, 1.1rem)',

              // // lg: 1200–1535
              // lg: 'clamp(1.1rem, 1.4vw, 1.15rem)',

              // // xl: 1536+
              // xl: 'clamp(1.15rem, 1.5vw, 1.25rem)',
            },

            maxWidth: 820,
          }}
        >
          Our web development approach is comprehensive and centered around your needs, ensuring
          each project aligns with your specific goals. We begin with an in-depth discovery phase to
          grasp your objectives, followed by meticulous planning and design to craft a clear roadmap
          for success.
        </Typography>
      </Grid>
      <Grid
        container
        sx={{
          paddingBlock: { xs: 5, md: 4 },
          paddingInline: { xs: 2, md: 3 },
          justifyContent: 'center',
        }}
        rowSpacing={{ xs: 2, md: 5, lg: 3 }}
        columnSpacing={{ xs: 2, md: 1, lg: 3 }}
      >
        {developmentList.map((item) => (
          <Fragment key={item.id}>
            <ProcessCard
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
            {arrowKey && item.arrowIcon?.[arrowKey] && (
              <Grid
                size={{ xs: 2, sm: 1, lg: 0.5 }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {isbreakpoint ? <MoveDown size={30} /> : <MoveRight size={30} />}
              </Grid>
            )}
            {/* {isMobile && item.arrowIcon?.xs && (
            <Grid
              size={{ xs: 2, sm: 1, lg: 0.5 }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isbreakpoint ? <MoveDown size={30} /> : <MoveRight size={30} />}
            </Grid>
          )}
          {isTablet && item.arrowIcon?.sm && (
            <Grid
              size={{ xs: 2, sm: 1, lg: 0.5 }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isbreakpoint ? <MoveDown size={30} /> : <MoveRight size={30} />}
            </Grid>
          )}
          {isDesktop && item.arrowIcon?.lg && (
            <Grid
              size={{ xs: 2, sm: 1, lg: 0.5 }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isbreakpoint ? <MoveDown size={30} /> : <MoveRight size={30} />}
            </Grid>
          )} */}
            {/* {isbreakpoint
            ? item.arrowIcon?.xs && (
                <Grid
                  size={{ xs: 2, sm: 1, lg: 0.5 }}
                  sx={{
                    paddingBlock: { xs: 0, lg: 2 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {isbreakpoint ? <MoveDown size={30} /> : <MoveRight size={30} />}
                </Grid>
              )
            : item.arrowIcon?.lg && (
                <Grid
                  size={{ xs: 2, sm: 1, lg: 0.5 }}
                  sx={{
                    paddingBlock: { xs: 0, lg: 2 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {isbreakpoint ? <MoveDown size={30} /> : <MoveRight size={30} />}
                </Grid>
              )} */}
          </Fragment>
        ))}
      </Grid>
    </Grid>
  );
}
