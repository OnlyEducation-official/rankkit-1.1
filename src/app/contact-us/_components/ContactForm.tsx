'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import contactFormSchema, { ContactFormScehmaType } from '@/types/ContactForm';
import SimpleTextField from '@/components/SimpleTextField';
import PhoneInputField from '@/components/GlobalPhoneField';
import useSnackBar from '@/components/SnackbarContext';
import ServicesBtn from './ServicesBtn';

const services = [
  { id: 1, slug: 'seo', service: 'SEO Services ' },
  { id: 2, slug: 'smm', service: 'Digital Marketing' },
  { id: 3, slug: 'ppc', service: 'Social Media Marketing' },
  { id: 4, slug: 'wd', service: 'Web Development' },
  { id: 5, slug: 'b&m', service: 'Branding & Multimedia' },
  { id: 6, slug: 'sn', service: 'CreatorsNest' },
  { id: 7, slug: 'mp', service: 'Media Production' },
  { id: 8, slug: 'ot', service: 'Other' },
];

export default function ContactForm() {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { isValid, isSubmitted, isSubmitting },
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

        <Typography variant="body1" sx={{ fontSize: 30, fontWeight: 'bold' }}>
          Please Select Your Services.
        </Typography>
        <Stack direction="row" gap={1.5} sx={{ mb: 2, flexWrap: 'wrap' }}>
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

        <Typography variant="body1" sx={{ fontSize: 30, fontWeight: 'bold' }}>
          Share What’s on Your Mind
        </Typography>

        <SimpleTextField
          control={control}
          name="message"
          label="Message"
          multiline
          rows={3}
          sx={{ mb: 2 }}
        />

        {/* <Typography variant="body1" sx={{ fontSize: 30, fontWeight: 'bold' }}>
          How You Heard About Us
        </Typography>
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
        </Stack> */}

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
