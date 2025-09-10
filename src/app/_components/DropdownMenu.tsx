import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Paper, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

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
  const pathname = usePathname();

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
    <Box
      sx={{
        position: 'relative',
        '&:hover .rotateTarget': {
          transform: 'rotate(90deg)',
        },
      }}
    >
      <Typography
        component={Link}
        href="/services"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          margin: 0,
          cursor: 'pointer',
          textDecoration: 'none',
          color: pathname === '/services' ? 'primary.main' : 'common.black',
          fontWeight: pathname === '/services' ? 600 : 500,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box>Services</Box>
        <Box
          className="rotateTarget"
          sx={{
            paddingTop: 1,
            transition: 'transform 0.3s ease',
            display: 'inline-block',
          }}
        >
          <KeyboardArrowRightIcon />
        </Box>
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
                  cursor: 'pointer',
                  paddingBlock: 1.25,
                  paddingInline: 2.5,
                  fontWeight: pathname === item.href ? 600 : 500,
                  width: 1,
                  textDecoration: 'none',
                  color: pathname === item.href ? 'primary.main' : 'common.black',
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
