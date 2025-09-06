'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import contactFormSchema, { ContactFormScehmaType } from '@/types/ContactForm';
import SimpleTextField from '@/components/SimpleTextField';
import PhoneInputField from '@/components/GlobalPhoneField';
import useSnackBar from '@/components/SnackbarContext';
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
  console.log('hello', process.env.RESEND_API_KEY);

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isValid, isSubmitted, isSubmitting },
  } = useForm<ContactFormScehmaType>({
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
  const { openSnackbar } = useSnackBar();

  const onSubmit = async (data: ContactFormScehmaType) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Something went wrong!');
      }

      openSnackbar({
        snackMessage: 'Your message has been sent successfully!',
        snackSeverity: 'success',
      });
      reset();
    } catch (err) {
      openSnackbar({
        snackMessage: `Failed to send message. Please try again. ${err}`,
        snackSeverity: 'error',
      });
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          flex: 1, // 50% width
        }}
      >
        <Stack rowGap={5} sx={{ paddingBlockStart: '20px' }}>
          <SimpleTextField control={control} name="name" label="Your Name" />
          <SimpleTextField control={control} name="orgname" label="Your Organization's Name" />
          <PhoneInputField control={control} name="phone" label="Phone Number" />
          <SimpleTextField control={control} name="email" label="Email" />
        </Stack>

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

        <SimpleTextField control={control} name="message" label="Message" multiline rows={3} />

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

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ typography: 'subtitle1', fontWeight: 600, marginBlockStart: 3 }}
          disabled={(isSubmitted && !isValid) || isSubmitting}
        >
          {isSubmitting && (
            <CircularProgress size={20} sx={{ color: 'common.white', position: 'absolute' }} />
          )}
          Submit
        </Button>
      </Box>
    </Box>
  );
}
