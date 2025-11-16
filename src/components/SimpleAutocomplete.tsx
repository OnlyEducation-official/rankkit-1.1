/* eslint-disable react/jsx-props-no-spreading */
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import React, { useState } from 'react';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { ContactFormScehmaType } from '@/types/ContactForm';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
];

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
