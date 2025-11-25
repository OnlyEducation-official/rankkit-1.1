import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface ScrollButtonProps extends ButtonProps {
  scrollTo?: string; // section id
}

export default function ScrollButton(props: ScrollButtonProps) {
  const { scrollTo, onClick, children, variant, color, size, sx, disabled, startIcon, endIcon } =
    props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (onClick) onClick(e);
  };

  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      sx={sx}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
