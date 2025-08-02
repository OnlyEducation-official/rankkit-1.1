import { ContactFormScehmaType } from '@/types/ContactForm';
import { Button } from '@mui/material';
import React from 'react';
import { FieldPath, UseFormSetValue } from 'react-hook-form';

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
  const handleBtnServices = (clickedService: string) => {
    const myServices = allServices as string[];
    const checkServicesAvailable = myServices.findIndex((item) => item === clickedService) ?? -1;
    if (checkServicesAvailable === -1) {
      myServices.push(clickedService);
      setValue(name, myServices);
    } else {
      myServices.splice(checkServicesAvailable, 1);
      setValue(name, myServices);
    }
  };

  return (
    <Button
      onClick={() => handleBtnServices(service)}
      sx={{
        backgroundColor: allServices?.includes(service) ? 'gray' : 'transparent',
        color: allServices?.includes(service) ? 'white' : 'black',

        border: '1px solid #ccc',
        textTransform: 'none',
        px: 2,
        py: 1,
        borderRadius: '100px',
        width: 'max-content',
        fontWeight: 'semibold',
        fontSize: 20,
      }}
    >
      {service}
    </Button>
  );
}
