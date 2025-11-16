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
          '& .MuiInputLabel-root': {
            fontWeight: 500,
          },
          '& .MuiOutlinedInput-root': {
            bgcolor: 'grey.50',
            borderRadius: 2,
          },
        };

        return <TextField {...params} label="Services" sx={mergedSx} />;
      }}
    />
  );
}
