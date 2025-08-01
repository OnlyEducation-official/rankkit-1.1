'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, TextField, Typography } from '@mui/material';

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
  const { control, handleSubmit } = useForm({
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

  const onSubmit = (data) => {
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
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Your Name"
              variant="standard"
              fullWidth
              InputLabelProps={{
                sx: {
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'gray',
                },
              }}
              InputProps={{
                sx: {
                  fontSize: field.value?.length > 0 ? 30 : 16, // Increase size after typing
                  transition: 'font-size 0.3s ease',
                },
              }}
            />
          )}
        />

        <Typography
          sx={{
            marginTop: 1,
          }}
        />

        {/* Phone */}
        <Controller
          name="orgname"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Your Organization's Name"
              variant="standard"
              fullWidth
              InputLabelProps={{
                sx: {
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'gray',
                },
              }}
              InputProps={{
                sx: {
                  fontSize: field.value?.length > 0 ? 30 : 16, // Increase size after typing
                  transition: 'font-size 0.3s ease',
                },
              }}
            />
          )}
        />

        <Typography
          sx={{
            marginTop: 1,
          }}
        />

        {/* Phone */}
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone Number"
              variant="standard"
              fullWidth
              InputLabelProps={{
                sx: {
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'gray',
                },
              }}
              InputProps={{
                sx: {
                  fontSize: field.value?.length > 0 ? 30 : 16, // Increase size after typing
                  transition: 'font-size 0.3s ease',
                },
              }}
            />
          )}
        />

        <Typography
          sx={{
            marginTop: 1,
          }}
        />

        {/* Email */}
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="standard"
              fullWidth
              InputLabelProps={{
                sx: {
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'gray',
                },
              }}
              InputProps={{
                sx: {
                  fontSize: field.value?.length > 0 ? 30 : 16, // Increase size after typing
                  transition: 'font-size 0.3s ease',
                },
              }}
            />
          )}
        />

        <Typography
          sx={{
            marginTop: 1,
          }}
        />

        {/* Services Multi-Select */}
        <Controller
          name="services"
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
                  Which services are you interested in?
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={2}>
                  {services.map((service) => (
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
                      {service.service}
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

        <Typography
          sx={{
            marginTop: 1,
          }}
        />

        {/* Message */}
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Message"
              variant="standard"
              fullWidth
              multiline
              rows={4}
              InputLabelProps={{
                sx: {
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'gray',
                },
              }}
              InputProps={{
                sx: {
                  fontSize: field.value?.length > 0 ? 30 : 16, // Increase size after typing
                  transition: 'font-size 0.3s ease',
                },
              }}
            />
          )}
        />

        <Typography
          sx={{
            marginTop: 1,
          }}
        />

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
