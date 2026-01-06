import { Grid, Typography } from '@mui/material';
import ImageOne from '@/assets/images/backend.webp';
import React from 'react';
import Feature from './Feature';

export default function FeatureSection() {
  const list = [
    {
      direction: 'row',
      image: ImageOne,
      title: 'Search Engine Optimization (SEO)',
      description:
        'Climb the search rankings with performance-focused strategies by the Best SEO Services in Mumbai. As a seasoned SEO agency, we help you increase organic visibility, drive qualified traffic, and generate leads that convert.',
      highlights: [
        'Keyword research and content mapping',
        'On-page and off-page optimization',
        'Technical SEO audits and schema implementation',
        'Link building and outreach campaigns',
        'Local SEO for enhanced community presence',
        'Comprehensive analytics and reporting',
      ],
      hightlightTitle: 'We Provide :',
      descriptionTwo:
        'As one of the top-trusted SEO providers offerings complete digital marketing solutions, we tailor our strategies to your business goals. Whether you need to boost local search rankings or dominate global markets, our expert team crafts customized SEO plans that deliver measurable results.',
    },
    {
      direction: 'row-reverse',
      image: ImageOne,
      title: 'Search Engine Optimization (SEO)',
      description:
        'Climb the search rankings with performance-focused strategies by the Best SEO Services in Mumbai. As a seasoned SEO agency, we help you increase organic visibility, drive qualified traffic, and generate leads that convert.',
      hightlightTitle: 'We Provide &nbsp;:',
      highlights: [
        'Keyword research and content mapping',
        'On-page and off-page optimization',
        'Technical SEO audits and schema implementation',
        'Link building and outreach campaigns',
        'Local SEO for enhanced community presence',
        'Comprehensive analytics and reporting',
      ],
      descriptionTwo:
        'As one of the top-trusted SEO providers offerings complete digital marketing solutions, we tailor our strategies to your business goals. Whether you need to boost local search rankings or dominate global markets, our expert team crafts customized SEO plans that deliver measurable results.',
    },
  ];
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Typography variant="h4" fontWeight={700} textAlign="center">
          Our Digital Marketing Services
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center">
          {`We offer a comprehensive suite of digital marketing services designed to elevate your
          brand's online presence and drive measurable results. Our expert team specializes in
          crafting tailored strategies that align with your business goals, ensuring maximum impact
          across all digital channels.`}
        </Typography>
      </Grid>
      {list.map((item) => (
        <Feature
          key={item.direction}
          description={item.description}
          descriptionTwo={item.descriptionTwo}
          direction={item.direction}
          highlights={item.highlights}
          image={item.image}
          title={item.title}
          hightlightTitle={item.hightlightTitle}
        />
      ))}
    </Grid>
  );
}
