/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Controller, Control, FieldValues, FieldPath } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

type SimpleTextFieldProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
} & TextFieldProps;

function SimpleTextFieldNew<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  ...textFieldProps
}: SimpleTextFieldProps<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <TextField
            {...field}
            label={label}
            fullWidth
            variant="outlined"
            size="medium"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            {...textFieldProps}
          />
        );
      }}
    />
  );
}

export default SimpleTextFieldNew;
