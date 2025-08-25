import * as React from 'react';
import { Button } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { FieldPath, UseFormSetValue } from 'react-hook-form';
import { ContactFormScehmaType } from '@/types/ContactForm';

export default function ServicesBtn({
  allServices,
  service,
  setValue,
  name,
}: {
  allServices: string[];
  service: string;
  setValue: UseFormSetValue<ContactFormScehmaType>;
  name: FieldPath<ContactFormScehmaType>;
}) {
  const selected = Array.isArray(allServices) && allServices.includes(service);

  const handleBtnServices = () => {
    const current = Array.isArray(allServices) ? allServices : [];
    const next = selected ? current.filter((s) => s !== service) : [...current, service];

    // keep RHF state in sync
    setValue(name, next, { shouldDirty: true, shouldValidate: true, shouldTouch: true });
  };

  return (
    <Button
      onClick={handleBtnServices}
      aria-pressed={selected}
      startIcon={selected ? <CheckRoundedIcon fontSize="small" /> : null}
      variant={selected ? 'contained' : 'outlined'}
      color={selected ? 'primary' : 'inherit'}
      disableElevation
      sx={{
        textTransform: 'none',
        borderRadius: 999,
        px: 1.75,
        py: 1,
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 1.2,
        // unified look with previous inputs
        bgcolor: selected ? 'primary.main' : 'grey.50',
        color: selected ? 'primary.contrastText' : 'text.primary',
        borderColor: selected ? 'primary.main' : 'divider',
        boxShadow: selected ? '0 0 0 3px rgba(43,92,255,0.15)' : 'none',
        '&:hover': {
          bgcolor: selected ? 'primary.dark' : 'grey.100',
          borderColor: selected ? 'primary.dark' : 'text.secondary',
        },
        '&:focus-visible': {
          outline: 'none',
          boxShadow: '0 0 0 3px rgba(43,92,255,0.2)',
        },
        // keep width natural; let groups wrap nicely
        width: 'max-content',
      }}
    >
      {service}
    </Button>
  );
}
