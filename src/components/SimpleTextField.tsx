/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Controller, Control, FieldValues, RegisterOptions, FieldPath } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

type SimpleTextFieldProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  label: string;
} & TextFieldProps;

function SimpleTextField<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  ...textFieldProps
}: SimpleTextFieldProps<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label={label}
          fullWidth
          variant="standard"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          InputLabelProps={{
            sx: {
              fontSize: 20,
              fontWeight: 'bold',
              color: 'gray',
            },
          }}
          InputProps={{
            sx: {
              fontSize: field?.value?.length > 0 ? 30 : 16,
              transition: 'font-size 0.3s ease',
            },
          }}
          {...textFieldProps}
        />
      )}
    />
  );
}

export default SimpleTextField;
