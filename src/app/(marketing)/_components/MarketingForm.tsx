'use client';

import PhoneInputField from '@/components/GlobalPhoneField';
import SimpleAutocomplete from '@/components/SimpleAutocomplete';
import SimpleTextFieldNew from '@/components/SimpleTextFieldNew';
import useSnackbar from '@/components/SnackbarContext';
import contactFormSchema, {
  ContactFormScehmaType,
  marketingFormScehmaType,
  marketingFormSchema,
} from '@/types/ContactForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

function ReusableComp({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Stack gap={0.5}>
      <Typography variant="body1">{title}</Typography>
      {children}
    </Stack>
  );
}

export default function MarketingForm() {
  const { control, watch, setValue, handleSubmit, reset } = useForm<ContactFormScehmaType>({
    resolver: zodResolver(marketingFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      services: [],
      message: '',
    },
  });
  const { openSnackbar } = useSnackbar();

  const onSubmit = async (data: marketingFormScehmaType) => {
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

      <ReusableComp title="Your Name">
        <SimpleTextFieldNew control={control} name="name" size="small" />
      </ReusableComp>
      <ReusableComp title="Phone">
        <PhoneInputField control={control} name="phone" />
      </ReusableComp>
      <ReusableComp title="Email">
        <SimpleTextFieldNew control={control} name="email" size="small" />
      </ReusableComp>
      <ReusableComp title="Services">
        <Box sx={{ maxWidth: { xs: 350, md: 800 } }}>
          <SimpleAutocomplete setValue={setValue} watch={watch} />
        </Box>
      </ReusableComp>

      <ReusableComp title="Message">
        <SimpleTextFieldNew control={control} name="message" multiline rows={3} />
      </ReusableComp>

      {/* <SimpleTextFieldNew control={control} name="message" label="Message" multiline rows={3} /> */}
      <Button
        type="submit"
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
        }}
      >
        Submit
      </Button>
    </Stack>
  );
}
