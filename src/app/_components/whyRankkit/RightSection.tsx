import { Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logo1 from '@/assets/images/home/whyRankkitLogo1.png';
import logo3 from '@/assets/images/home/whyRankkitLogo3.png';
import logo4 from '@/assets/images/home/whyRankkitLogo4.png';
import logo5 from '@/assets/images/home/whyRankkitLogo5.png';
import logo6 from '@/assets/images/home/whyRankkitLogo6.png';
import logo2 from '@/assets/images/home/whyRankkitLogo2.png';

const whyRankkitData = [
  {
    icon: logo1,
    title: 'End-to-end solutions',
    description: [
      'We don’t just build campaigns; we create ecosystems.',
      'From branding to development, marketing, and analytics, our integrated approach ensures every part of your digital presence works in perfect harmony to generate measurable impact.',
    ],
  },
  {
    icon: logo2,
    title: 'Creative excellence',
    description: [
      'Our work is where imagination meets precision.',
      'Every design, every headline, and every strategy is crafted to make your brand stand out while maintaining a clear path to performance and growth.',
      'We push boundaries with bold ideas while staying rooted in strategies that deliver measurable impact.',
    ],
  },
  {
    icon: logo3,
    title: 'In-house expertise',
    description: [
      'Our multidisciplinary team of designers, developers, marketers, and content creators works under one roof.',
      'This eliminates dependency on third-party vendors and ensures speed, quality, and consistency in everything we deliver.',
    ],
  },
  {
    icon: logo4,
    title: 'ROI-driven strategies',
    description: [
      'Our work is where imagination meets precision.',
      'Every design, every headline, and every strategy is crafted to make your brand stand out while maintaining a clear path to performance and growth.',
      'We push boundaries with bold ideas while staying rooted in strategies that deliver measurable impact.',
    ],
  },
  {
    icon: logo5,
    title: 'Scalable solutions',
    description: [
      'Whether you’re a startup finding your voice or an enterprise ready to scale, our solutions grow with you.',
      'We design flexible strategies that adapt to your evolving needs and market demands.',
    ],
  },
  {
    icon: logo6,
    title: 'Proven track record',
    description: [
      'From small businesses to leading brands, we’ve helped clients achieve measurable growth across industries.',
      'Our results speak for themselves, powered by a mix of creativity, strategy, and relentless execution.',
    ],
  },
];

export default function RightSection() {
  return (
    <Grid container spacing={{ xs: 3, md: 4 }} sx={{ paddingBlockStart: { sm: 3, md: 0 } }}>
      {whyRankkitData.map((item) => (
        <Grid
          size={{ xs: 12, sm: 6, md: 12 }}
          key={item.title}
          sx={{
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
            paddingInline: 4,
            paddingBlock: 5,
            backdropFilter: 'blur(50px)',
            borderRight: 'outset',
          }}
        >
          <Stack direction="row" gap={2} alignItems="center">
            <Image
              alt="icons"
              src={item.icon}
              width={50}
              height={50}
              style={{ aspectRatio: '1/1' }}
            />
            <Typography variant="h5" fontWeight={500} sx={{ color: 'primary.main' }}>
              {item.title}
            </Typography>
          </Stack>
          {item.description.map((desc, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Typography key={i} variant="body1" mt={i === 0 ? 2 : 1}>
              {desc}
            </Typography>
          ))}
        </Grid>
      ))}
    </Grid>
  );
}
