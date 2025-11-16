/* eslint-disable react/jsx-props-no-spreading */
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React from 'react';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { ContactFormScehmaType } from '@/types/ContactForm';

export default function SimpleAutocomplete({
  setValue,
  watch,
}: {
  setValue: UseFormSetValue<ContactFormScehmaType>;
  watch: UseFormWatch<ContactFormScehmaType>;
}) {
  return (
    <Autocomplete
      multiple
      size="small"
      disableCloseOnSelect
      options={[
        'SEO Services',
        'Digital Marketing',
        'Social Media Marketing',
        'Web Development',
        'Branding & Multimedia',
        'CreatorsNest',
        'Media Production',
        'Other',
      ]}
      value={watch('services')}
      onChange={(_, newValue) => {
        setValue('services', newValue);
      }}
      renderInput={(params) => {
        const mergedSx = {
          // spacing + layout
          my: 1,
          // Label
          '& .MuiInputLabel-root': {
            fontWeight: 600,
          },
          // Input style
          '& .MuiOutlinedInput-root': {
            bgcolor: 'grey.50',
            borderRadius: 2,
            transition: 'box-shadow .2s ease, border-color .2s ease, background-color .2s ease',
            '& .MuiOutlinedInput-input': {
              py: 1.5, // taller tap target
            },
            // borders
            '& fieldset': { borderColor: 'divider' },
            '&:hover fieldset': { borderColor: 'text.secondary' },
            '&.Mui-focused fieldset': { borderColor: 'primary.main' },
            // focus ring
            '&.Mui-focused': {
              boxShadow: '0 0 0 3px rgba(43,92,255,0.15)', // subtle ring
              bgcolor: 'background.paper',
            },
            // error state
            '&.Mui-error fieldset': { borderColor: 'error.main' },
          },
          // Helper text
          '& .MuiFormHelperText-root': {
            mt: 0.75,
          },
        };

        return <TextField {...params} label="Services" sx={mergedSx} />;
      }}
    />
  );
}
