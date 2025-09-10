import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const sideBarData = [
  { text: 'Home', href: '/' },
  { text: 'Studio', href: '/studio' },
  { text: 'Services', href: '/services' },
  { text: 'Web development', href: '/services/web-development' },
  { text: 'Branding & Multimedia', href: '/services/branding-and-multimedia' },
  { text: 'CreatorsNest', href: '/services/creator-nest' },
  { text: 'Media Production', href: '/services/media-production' },
  { text: 'SEO Services', href: '/services/seo-services' },
  { text: 'Digital Marketing', href: '/services/digital-marketing' },
  { text: 'Social Media Management', href: '/services/social-media-management' },
];

export default function SidebarDrawer() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const list = () => (
    <Box sx={{ width: 250 }}>
      <Stack
        direction="row"
        sx={{
          paddingBlock: 2,
          paddingInline: 2,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Image src={logo} alt="logo" width={135} style={{ aspectRatio: '3.66 / 1' }} />
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <Divider />

      <List>
        {sideBarData.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton href={item.href}>
              <ListItemText
                primary={item.text}
                // sx={{
                // }}
                slotProps={{
                  primary: {
                    sx: {
                      color: pathname === item.href ? 'primary.main' : 'common.black',
                      fontWeight: pathname === item.href ? 600 : 500,
                    },
                  },
                  // root: {
                  // },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <List />
      </List>

      {/* Contact */}
      <Box sx={{ paddingInline: 2 }}>
        <Typography fontWeight="bold">Contact</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            listStyleType: 'none',
            gap: { xs: '10px', md: '20' },
            marginTop: { xs: '5px', md: '10' },
          }}
        >
          <li>
            {' '}
            Ambience Court, 1702-1703, Phase 2, Sector 19E, Vashi, Navi Mumbai, Maharashtra 400703
          </li>
          <li>+91 - 9090434376</li>
          <li>info@rankkit.com</li>
          <Box
            component={Link}
            href="/contact-us"
            onClick={() => {
              handleClose();
              router.push('/contact-us');
            }}
            sx={{
              cursor: 'pointer',
              // textDecoration: 'none',
              color: '#000000de',
              textDecoration: 'underline',
            }}
          >
            Contact Us
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <MenuIcon />
      </IconButton>
      <Drawer open={open} anchor="right" onClose={handleClose}>
        {list()}
      </Drawer>
    </div>
  );
}
