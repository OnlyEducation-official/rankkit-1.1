'use client';

import PhoneInputField from '@/components/GlobalPhoneField';
import SimpleAutocomplete from '@/components/SimpleAutocomplete';
import SimpleTextFieldNew from '@/components/SimpleTextFieldNew';
import contactFormSchema, { ContactFormScehmaType } from '@/types/ContactForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function MarketingForm() {
  const { control, watch, setValue } = useForm<ContactFormScehmaType>({
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
  return (
    <Stack
      sx={{
        border: '4px solid white',
        borderRadius: 10,
        paddingInline: 4.5,
        paddingBlock: 5,
        background: 'rgba(255, 255, 255, 0.12)',
        backdropFilter: 'blur(50px)', // main blur effect
        WebkitBackdropFilter: 'blur(40px)', // Safari support
        boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
      }}
      gap={2}
    >
      <Typography variant="subtitle1" fontWeight={500}>
        Get Free
        <Typography component="span" variant="h6" sx={{ fontWeight: 600, fontStyle: 'italic' }}>
          {` Consultation`}
        </Typography>
      </Typography>
      <SimpleTextFieldNew control={control} name="name" label="Your Name" size="small" />
      <PhoneInputField control={control} name="phone" label="Phone Number" />
      <SimpleTextFieldNew control={control} name="email" label="Email" size="small" />
      <SimpleAutocomplete setValue={setValue} watch={watch} />
      <SimpleTextFieldNew
        control={control}
        name="message"
        label="Message"
        multiline
        rows={3}
      />
      <Button 
        sx={{ 
          width: 1, 
          paddingBlock: 2, 
          borderRadius: "71px", 
          backgroundColor:"#ff0000cc" ,
          fontWeight:600,
          color:"#fff",
          border:0,
          textTransform:"uppercase"
        }}
      >
        Submit
      </Button>
    </Stack>
  );
}
