'use client';

import PhoneInputField from '@/components/GlobalPhoneField';
import SimpleAutocomplete from '@/components/SimpleAutocomplete';
import SimpleTextFieldNew from '@/components/SimpleTextFieldNew';
import useSnackbar from '@/components/SnackbarContext';
import { marketingFormLeadSchema, marketingFormLeadType } from '@/types/ContactForm';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  CircularProgress,
  FormHelperText,
  Slider,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

function ReusableComp({
  title,
  children,
  required,
}: {
  title: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <Stack gap={0.5}>
      <Stack direction="row" gap={0.5} alignItems="center">
        <Typography variant="body1">{title}</Typography>
        {required && (
          <Typography variant="body1" component="span" color="red">
            *
          </Typography>
        )}
      </Stack>
      {children}
    </Stack>
  );
}

export default function MarketingForm() {
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<marketingFormLeadType>({
    resolver: zodResolver(marketingFormLeadSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      services: [],
      message: '',
      maxValue: 20000,
      minValue: 1500000,
    },
  });
  const { openSnackbar } = useSnackbar();
  const minValue = watch('minValue');
  const maxValue = watch('maxValue');

  const formatINR = (value: number) => {
    const x = Math.round(value).toString();
    const lastThree = x.slice(-3);
    const other = x.slice(0, -3);
    const formatted =
      other !== '' ? `${other.replace(/\B(?=(\d{2})+(?!\d))/g, ',')},${lastThree}` : lastThree;
    return `₹ ${formatted}`;
  };
  const DEFAULT_MIN = 20000;
  const DEFAULT_MAX = 1500000;
  const sliderValue: number[] = [
    typeof minValue === 'number' ? minValue : DEFAULT_MIN,
    typeof maxValue === 'number' ? maxValue : DEFAULT_MAX,
  ];
  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    setValue('minValue', Array.isArray(newValue) ? newValue[0] : newValue);
    setValue('maxValue', Array.isArray(newValue) ? newValue[1] : newValue);
  };
  const onSubmit = async (data: marketingFormLeadType) => {
    const payload = {
      data: {
        message: data.message,
        name: data.name,
        email: data.email,
        service: data?.services?.map((item) => ({ title: item })),
        phone: data?.phone.replace(/^\+91[\s-]*/, '').replace(/[^\d]/g, ''),
        minValue: data.minValue,
        maxValue: data.maxValue,
      },
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}client-leads-forms`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_BEARER_TOKEN}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Something went wrong!');
      }
      window.fbq?.('track', 'Lead');
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
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        border: '3px solid white',
        boxShadow: '6px 2px 14px 3px rgba(0, 0, 0, 0.27)',
        borderRadius: 8,
        paddingInline: { xs: 2, md: 3, lg: 4.5 },
        paddingBlock: { xs: 3, md: 5 },
        background: 'rgba(255, 255, 255, 0.12)',
        backdropFilter: 'blur(10px)', // main blur effect
        WebkitBackdropFilter: 'blur(40px)', // Safari support
        maxWidth: { xs: 350, sm: 400, md: 440 },
        // boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
      }}
      gap={{ xs: 0.5, sm: 2 }}
    >
      <Typography variant="subtitle1" fontWeight={500}>
        Get Free
        <Typography component="span" variant="h6" sx={{ fontWeight: 600, fontStyle: 'italic' }}>
          {` Consultation`}
        </Typography>
      </Typography>

      <ReusableComp title="Your Name" required>
        <SimpleTextFieldNew control={control} name="name" size="small" />
      </ReusableComp>
      <ReusableComp title="Phone" required>
        <PhoneInputField control={control} name="phone" />
      </ReusableComp>
      <ReusableComp title="Email" required>
        <SimpleTextFieldNew control={control} name="email" size="small" />
      </ReusableComp>
      <ReusableComp title="Services" required>
        <Box sx={{ maxWidth: { xs: 350, md: 800 } }}>
          <SimpleAutocomplete setValue={setValue} watch={watch} />
          {errors?.services && <FormHelperText error>{errors?.services?.message}</FormHelperText>}
        </Box>
      </ReusableComp>

      <ReusableComp title="Price Range" required>
        <Controller
          name="minValue" // required for input registration
          control={control}
          render={() => (
            <Slider
              getAriaLabel={() => 'Price Range'}
              value={sliderValue}
              min={20000}
              max={1500000}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              disableSwap
              valueLabelFormat={(val: number) => formatINR(val)}
            />
          )}
        />
      </ReusableComp>
      <ReusableComp title="Message">
        <SimpleTextFieldNew control={control} name="message" multiline rows={3} />
      </ReusableComp>

      {/* <SimpleTextFieldNew control={control} name="message" label="Message" multiline rows={3} /> */}
      <Button
        type="submit"
        disabled={isSubmitting}
        sx={{
          width: 1,
          paddingBlock: 1.5,
          // borderRadius: '71px',
          backgroundColor: 'primary.main',
          fontWeight: 600,
          color: '#fff',
          border: 0,
          textTransform: 'uppercase',
          letterSpacing: 1,
          opacity: isSubmitting ? 0.7 : 1,
        }}
      >
        {isSubmitting ? <CircularProgress size={24} sx={{ color: 'error.main' }} /> : 'Submit'}
      </Button>
    </Stack>
  );
}
