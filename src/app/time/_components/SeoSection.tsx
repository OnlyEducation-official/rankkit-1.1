import { Grid, Typography } from '@mui/material';
import React from 'react';
import imageone from '@/assets/images/gallery/gallery1.png';
import { v4 as uuidv4 } from 'uuid';
import SeoCard from './SeoCard';

const seoCardList = [
  {
    icon: imageone,
    heading: 'Increased brand visibility',
    description:
      ' E-commerce SEO can help your website rank higher in search engine results pages, which can increase your brand’s visibility and credibility. This can lead to more traffic and conversions for your website.',
  },
  {
    icon: imageone,
    heading: 'More traffic and sales',
    description:
      ' By optimizing your website for search engines, you can attract more qualified traffic to your website, which can lead to more sales and revenue. By optimizing your website for search engines, you can attract more qualified traffic to your website, which can lead to more sales and revenue.',
  },
  {
    icon: imageone,
    heading: 'Improved user experience',
    description:
      'E-commerce SEO can help improve the user experience of your website, making it easier for customers to find what they’re looking for and complete their purchases. This can lead to higher conversion rates and more satisfied customers.',
  },
  {
    icon: imageone,
    heading: 'Lower advertising costs',
    description:
      'E-commerce SEO can be a cost-effective way to attract traffic to your website. By ranking higher in search engine results pages, you can reduce your reliance on paid advertising and save money on advertising costs.',
  },
  {
    icon: imageone,
    heading: 'Increased customer trust',
    description:
      'A high-quality website that ranks well in search engine results pages can help establish trust between your brand and your customers. This can lead to more repeat business and positive word-of-mouth referrals.',
  },
  {
    icon: imageone,
    heading: 'Increased customer trust',
    description:
      'A high-quality website that ranks well in search engine results pages can help establish trust between your brand and your customers. This can lead to more repeat business and positive word-of-mouth referrals.',
  },
  {
    icon: imageone,
    heading: 'Increased customer trust',
    description:
      'A high-quality website that ranks well in search engine results pages can help establish trust between your brand and your customers. This can lead to more repeat business and positive word-of-mouth referrals.',
  },
  {
    icon: imageone,
    heading: 'Increased customer trust',
    description:
      'A high-quality website that ranks well in search engine results pages can help establish trust between your brand and your customers. This can lead to more repeat business and positive word-of-mouth referrals.',
  },
  {
    icon: imageone,
    heading: 'Increased customer trust',
    description:
      'A high-quality website that ranks well in search engine results pages can help establish trust between your brand and your customers. This can lead to more repeat business and positive word-of-mouth referrals.',
  },
  {
    icon: imageone,
    heading: 'Increased customer trust',
    description:
      'A high-quality website that ranks well in search engine results pages can help establish trust between your brand and your customers. This can lead to more repeat business and positive word-of-mouth referrals.',
  },
  {
    icon: imageone,
    heading: 'Increased customer trust',
    description:
      'A high-quality website that ranks well in search engine results pages can help establish trust between your brand and your customers. This can lead to more repeat business and positive word-of-mouth referrals.',
  },
];

export default function SeoSection() {
  return (
    <Grid container spacing={3}>
      <Grid size={12} sx={{ textAlign: 'center' }}>
        <Typography
          variant="h2"
          sx={{
            position: 'relative',
            display: 'inline-block',
            pb: 1.5,

            fontSize: {
              xs: 'clamp(1.6rem, 5vw, 2rem)',
              sm: 'clamp(1.8rem, 4vw, 2.4rem)',
              md: 'clamp(2rem, 3vw, 2.8rem)',
              lg: '3rem',
            },
            fontWeight: 700,
          }}
        >
          What Are The Benefits Of E-Commerce SEO?
        </Typography>
      </Grid>
      <Grid container spacing={{ xs: 2, md: 3, lg: 2 }}>
        {seoCardList.map((item) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            sx={{ paddingInline: { xs: 0 }, paddingBlock: { xs: 2, sm: 2, md: 3 } }}
            key={uuidv4()}
          >
            <SeoCard image={item.icon} heading={item.heading} description={item.description} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
