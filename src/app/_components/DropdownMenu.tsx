import { Box, Paper, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function DropdownMenu({
  lists,
}: {
  lists: {
    text: string;
    href: string;
  }[];
}) {
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    // Cancel any pending close
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    // Delay before closing
    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 300); // adjust delay as needed
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Typography
        component={Link}
        href="/services"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{ margin: 0, cursor: 'pointer', textDecoration: 'none', color: 'common.black' }}
      >
        Services
      </Typography>

      {open && (
        <Box
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            position: 'absolute',
            top: '38px',
            left: 0,
            background: 'white',
            zIndex: 100,
            transition: 'opacity 0.2s ease-in-out',
            borderRadius: 2,
          }}
        >
          <Paper
            sx={{
              width: 'max-content',
              display: 'flex',
              flexDirection: 'column',
              //   gap: 2,
              borderRadius: 2,
              paddingBlock: 1.5,
            }}
          >
            {lists.map((item) => (
              <Typography
                key={item.text}
                component={Link}
                href={item.href}
                variant="body1"
                sx={{
                  //   width: 'max-content',
                  cursor: 'pointer',

                  paddingBlock: 1.25,
                  paddingInline: 2.5,
                  fontWeight: 500,
                  //   paddingBlock: 1,
                  width: 1,
                  textDecoration: 'none',
                  color: 'common.black',
                  '&:hover': { bgcolor: 'primary.main', color: 'white' },
                }}
              >
                {item.text}
              </Typography>
            ))}
          </Paper>
        </Box>
      )}
    </Box>
  );
}
