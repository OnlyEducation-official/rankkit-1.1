/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */

'use client';

import * as React from 'react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import { MuiTelInput, MuiTelInputCountry } from 'mui-tel-input';

type PhoneInputFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  defaultCountry?: MuiTelInputCountry;
  onlyCountries?: MuiTelInputCountry[];
  preferredCountries?: MuiTelInputCountry[];
  /** Merge extra sx if you need to tweak per-usage */
  sx?: Record<string, any>;
};

function PhoneInputField<T extends FieldValues>({
  name,
  control,
  label,
  placeholder = 'Enter phone number',
  defaultCountry = 'IN',
  onlyCountries,
  preferredCountries,
  sx,
}: PhoneInputFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <MuiTelInput
          {...field}
          value={field.value ?? ''}
          onChange={field.onChange}
          label={label}
          placeholder={placeholder}
          fullWidth
          defaultCountry={defaultCountry}
          onlyCountries={onlyCountries}
          preferredCountries={preferredCountries}
          forceCallingCode
          focusOnSelectCountry
          variant="outlined"
          size="medium"
          autoComplete="tel"
          inputMode="tel"
          error={!!error}
          helperText={error?.message}
          InputLabelProps={{
            shrink: true,
            sx: {
              fontWeight: 600,
            },
          }}
          // Overall look & feel (same style language as the previous answer)
          sx={{
            my: 1,
            '& .MuiOutlinedInput-root': {
              bgcolor: 'grey.50',
              borderRadius: 2,
              transition: 'box-shadow .2s ease, border-color .2s ease, background-color .2s ease',
              '& fieldset': { borderColor: 'divider' },
              '&:hover fieldset': { borderColor: 'text.secondary' },
              '&.Mui-focused fieldset': { borderColor: 'primary.main' },
              '&.Mui-focused': {
                boxShadow: '0 0 0 3px rgba(43,92,255,0.15)', // subtle focus ring
                bgcolor: 'background.paper',
              },
              // input height & padding for comfortable tapping
              '& .MuiOutlinedInput-input': {
                py: 1.5,
              },
            },
            '& .MuiFormHelperText-root': {
              mt: 0.75,
            },
            ...sx,
          }}
          // Fine-tune the inner input element
          slotProps={{
            // native <input>
            htmlInput: {
              // keep typography consistent; avoid dynamic font-size jumps
              style: { fontSize: 16 },
            },
            // country select menu (optional tweaks)
          }}
        />
      )}
    />
  );
}

export default PhoneInputField;
