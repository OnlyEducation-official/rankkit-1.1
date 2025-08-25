/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Controller, Control, FieldValues, FieldPath } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

type SimpleTextFieldProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  label: string;
  /** optional placeholder for cleaner UI */
  placeholder?: string;
} & TextFieldProps;

function SimpleTextField<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  ...textFieldProps
}: SimpleTextFieldProps<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        // merge any incoming sx/InputProps with our styling (non-destructive)
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
          ...(textFieldProps.sx as object),
        };

        const mergedInputProps = {
          placeholder,
          ...textFieldProps.inputProps,
        };

        const mergedInputSx = {
          ...(textFieldProps.InputProps?.sx as object),
        };

        return (
          <TextField
            {...field}
            {...textFieldProps}
            label={label}
            fullWidth
            variant="outlined"
            size="medium"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            InputLabelProps={{
              shrink: true,
              ...textFieldProps.InputLabelProps,
            }}
            inputProps={mergedInputProps}
            InputProps={{
              ...textFieldProps.InputProps,
              sx: mergedInputSx,
            }}
            sx={mergedSx}
          />
        );
      }}
    />
  );
}

export default SimpleTextField;
