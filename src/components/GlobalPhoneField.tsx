/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */

'use client';

import React from 'react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import { MuiTelInput, MuiTelInputCountry } from 'mui-tel-input';

type PhoneInputFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  defaultCountry?: MuiTelInputCountry;
  onlyCountries?: MuiTelInputCountry[];
};

function PhoneInputField<T extends FieldValues>({
  name,
  control,
  label,
  defaultCountry = 'IN',
  // onlyCountries = [],
}: PhoneInputFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <MuiTelInput
            {...field}
            value={field.value || ''}
            onChange={field.onChange}
            label={label}
            fullWidth
            defaultCountry={defaultCountry}
            // onlyCountries={onlyCountries}
            variant="standard"
            // disableDropdown
            // sx={{}}
            InputLabelProps={{
              sx: {
                fontSize: 20,
                fontWeight: 'bold',
                color: 'gray',
              },
            }}
            slotProps={{
              htmlInput: {
                sx: {
                  fontSize: field?.value?.length > 0 ? 30 : 16,
                  transition: 'font-size 0.3s ease',
                },
              },
            }}
          />
          {error && <p style={{ color: 'red', fontSize: '0.8rem' }}>{error.message}</p>}
        </div>
      )}
    />
  );
}

export default PhoneInputField;
