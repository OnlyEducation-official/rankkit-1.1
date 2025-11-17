/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { ContactFormScehmaType } from '@/types/ContactForm';

const SERVICE_OPTIONS = [
  'SEO Services',
  'Digital Marketing',
  'Social Media Marketing',
  'Web Development',
  'Branding & Multimedia',
  'CreatorsNest',
  'Media Production',
  'Other',
];

export default function SimpleAutocomplete({
  setValue,
  watch,
}: {
  setValue: UseFormSetValue<ContactFormScehmaType>;
  watch: UseFormWatch<ContactFormScehmaType>;
}) {
  // Selected values from RHF
  const selectedServices = (watch('services') || []) as string[];

  // For the "+N selected" popover
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleOpenSummary = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseSummary = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Autocomplete
        multiple
        size="small"
        disableCloseOnSelect
        options={SERVICE_OPTIONS}
        value={selectedServices}
        onChange={(_, newValue) => {
          setValue('services', newValue);
        }}
        renderTags={(value, getTagProps) => {
          // If 0, 1 or 2 selected → show them normally
          if (value.length <= 2) {
            return value.map((option, index) => (
              <Chip {...getTagProps({ index })} key={option} label={option} size="small" />
            ));
          }

          // If more than 2 selected:
          // - show first 2 as normal chips
          // - show "+N selected" as a summary badge
          const firstTwo = value.slice(0, 2);
          const remainingCount = value.length - 2;

          return [
            ...firstTwo.map((option, index) => (
              <Chip {...getTagProps({ index })} key={option} label={option} size="small" />
            )),
            <Chip
              key="more-selected"
              label={`+${remainingCount}`}
              size="small"
              color="primary"
              variant="outlined"
              // onClick={handleOpenSummary}
              // prevent chip click from opening/closing dropdown weirdly
              onMouseDown={(e) => e.stopPropagation()}
            />,
          ];
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

      {/* Popover showing ALL selected options when "+N selected" is clicked */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseSummary}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <List sx={{ p: 1, minWidth: 220 }}>
          <Typography variant="subtitle2" sx={{ px: 1, pt: 1, pb: 0.5, fontWeight: 600 }}>
            Selected services
          </Typography>
          {selectedServices.length === 0 ? (
            <ListItem>
              <Typography variant="body2" color="text.secondary">
                No service selected.
              </Typography>
            </ListItem>
          ) : (
            selectedServices.map((service) => (
              <ListItem key={service} sx={{ py: 0.25 }}>
                <Typography variant="body2">{service}</Typography>
              </ListItem>
            ))
          )}
        </List>
      </Popover>
    </>
  );
}
