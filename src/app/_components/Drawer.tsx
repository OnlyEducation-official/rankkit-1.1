import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Stack } from '@mui/material';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import CloseIcon from '@mui/icons-material/Close';

export default function SidebarDrawer() {
  const [open, setOpen] = React.useState(false);

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
      <List>
        {['About', 'Services', 'Case studies'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
