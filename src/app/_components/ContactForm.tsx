/* eslint-disable react/jsx-props-no-spreading */

'use client';

import React from 'react';
import { useForm, Controller, UseFormWatch } from 'react-hook-form';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import contactFormSchema, { ContactFormScehmaType } from '@/types/ContactForm';
import SimpleTextField from '@/components/SimpleTextField';

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

// interface ContactSubmit {
//   name: '';
//   phone: '';
//   orgname: '';
//   email: '';
//   services: [];
//   hearAboutUs: [];
//   message: '';
// }

function ServicesBtn({
  allServices,
  service,
  watch,
}: {
  allServices: string[];
  service: string;
  watch: UseFormWatch<ContactFormScehmaType>;
}) {
  const handleBtnServices = (service: string) => {
    const myServices = watch('services') as string[];
    const checkServicesAvailable = myServices.findIndex((item) => item === service) ?? -1;
    if (checkServicesAvailable === -1) {
      myServices.push(service);
      setValue('services', myServices);
    } else {
      myServices.splice(checkServicesAvailable, 1);
      setValue('services', myServices);
    }
  };

  return (
    <Button
      onClick={() => handleBtnServices(service)}
      sx={{
        backgroundColor: allServices?.includes(service) ? 'gray' : 'transparent',
        color: allServices?.includes(service) ? 'white' : 'black',

        border: '1px solid #ccc',
        textTransform: 'none',
        px: 2,
        py: 1,
        borderRadius: '100px',
        width: 'fit-content',
        fontWeight: 'semibold',
        fontSize: 20,
      }}
    >
      {service}
    </Button>
  );
}

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

  const handleBtnServices = (service: string) => {
    const myServices = watch('services') as string[];
    const checkServicesAvailable = myServices.findIndex((item) => item === service) ?? -1;
    if (checkServicesAvailable === -1) {
      myServices.push(service);
      setValue('services', myServices);
    } else {
      myServices.splice(checkServicesAvailable, 1);
      setValue('services', myServices);
    }
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

        {/* Services Multi-Select */}
        {/* Select services */}
        <Typography variant="body1" sx={{ mb: 3, fontSize: 30, fontWeight: 'bold' }}>
          Which services are you interested in?
        </Typography>
        <Stack direction="row" gap={1.5}>
          {services.map((service) => (
            <Button
              key={service.id}
              onClick={() => handleBtnServices(service.slug)}
              sx={{
                backgroundColor: watch('services')?.includes(service.slug) ? 'gray' : 'transparent',
                color: watch('services')?.includes(service.slug) ? 'white' : 'black',

                border: '1px solid #ccc',
                textTransform: 'none',
                px: 2,
                py: 1,
                borderRadius: '100px',
                width: 'fit-content',
                fontWeight: 'semibold',
                fontSize: 20,
              }}
            >
              {service.service}
            </Button>
          ))}
        </Stack>
        {/* Select services end */}

        {/* Message */}
        <SimpleTextField control={control} name="message" label="Message" multiline rows={3} />

        <Controller
          name="hearAboutUs"
          control={control}
          render={({ field }) => {
            const selectedServices = field.value;

            const handleClick = (slug) => {
              if (selectedServices.includes(slug)) {
                field.onChange(selectedServices.filter((s) => s !== slug));
              } else {
                field.onChange([...selectedServices, slug]);
              }
            };

            const clearAll = () => field.onChange([]);

            return (
              <Box>
                <Typography variant="body1" sx={{ mb: 3, fontSize: 30, fontWeight: 'bold' }}>
                  What's on your mind?
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={2}>
                  {hear.map((service) => (
                    <Button
                      key={service.id}
                      onClick={() => handleClick(service.slug)}
                      sx={{
                        backgroundColor: selectedServices.includes(service.slug)
                          ? 'gray'
                          : 'transparent',
                        color: selectedServices.includes(service.slug) ? 'white' : 'black',
                        border: '1px solid #ccc',
                        textTransform: 'none',
                        px: 2,
                        py: 1,
                        borderRadius: '100px',
                        fontWeight: 'semibold',
                        fontSize: 20,
                      }}
                    >
                      {service.hear}
                    </Button>
                  ))}
                  <Button
                    variant="text"
                    onClick={clearAll}
                    sx={{
                      textTransform: 'none',
                      ml: 2,
                      color: selectedServices.length > 0 ? 'black' : 'gray',
                      border: '1px solid #ccc',
                      borderRadius: '100px',
                    }}
                  >
                    Clear All
                  </Button>
                </Box>
              </Box>
            );
          }}
        />

        {/* Submit Button */}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>

      {/* Right Box */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          flex: 1, // 50% width
          p: 4,
        }}
      >
        n
      </Box>
    </Box>
  );
}
