/* eslint-disable react/jsx-props-no-spreading */

'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Stack, Typography } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import contactFormSchema, { ContactFormScehmaType } from '@/types/ContactForm';
import SimpleTextField from '@/components/SimpleTextField';
import ServicesBtn from './ServicesBtn';

const services = [
  { id: 1, slug: 'seo', service: 'SEO' },
  { id: 2, slug: 'smm', service: 'Social Media Marketing' },
  { id: 3, slug: 'ppc', service: 'Google Ads' },
  { id: 4, slug: 'content', service: 'Content Marketing' },
];

const hear = [
  { id: 1, slug: 'referral', hear: 'Referral' },
  { id: 2, slug: 'media', hear: 'Media & News' },
  { id: 3, slug: 'instagram', hear: 'Instagram' },
  { id: 4, slug: 'facebook', hear: 'Facebook' },
  { id: 5, slug: 'search', hear: 'Search' },
  { id: 6, slug: 'linkedin', hear: 'LinkedIn' },
];

export default function ContactForm() {
  const { control, handleSubmit, watch, setValue } = useForm<ContactFormScehmaType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      orgname: '',
      email: '',
      services: [],
      hearAboutUs: [],
      message: '',
    },
  });

  const onSubmit = (data: ContactFormScehmaType) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100vh', // optional if you want full screen height
      }}
    >
      {/* Left Form Box */}
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          flex: 1, // 50% width
          p: 10,
          borderRight: '1px solid #eee', // optional separator
        }}
      >
        {/* Name */}
        <Stack rowGap={5}>
          <SimpleTextField control={control} name="name" label="Your Name" />
          <SimpleTextField control={control} name="orgname" label="Your Organization's Name" />
          <SimpleTextField control={control} name="phone" label="Phone Number" />
          <SimpleTextField control={control} name="email" label="Email" />
        </Stack>

        {/* Select services */}
        <Typography variant="body1" sx={{ mb: 3, fontSize: 30, fontWeight: 'bold' }}>
          Which services are you interested in?
        </Typography>
        <Stack direction="row" gap={1.5} sx={{ flexWrap: 'wrap' }}>
          {services.map((service) => (
            <ServicesBtn
              key={service.id}
              service={service.service}
              allServices={watch('services') as string[]}
              setValue={setValue}
              name="services"
            />
          ))}
        </Stack>
        {/* Select services end */}

        {/* Message */}
        <SimpleTextField control={control} name="message" label="Message" multiline rows={3} />

        {/* Hear about us */}
        <Stack direction="row" gap={1.5} sx={{ flexWrap: 'wrap' }}>
          {hear.map((obj) => (
            <ServicesBtn
              key={obj.id}
              service={obj.hear}
              setValue={setValue}
              allServices={watch('hearAboutUs') as string[]}
              name="hearAboutUs"
            />
          ))}
        </Stack>

        {/* Submit Button */}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
