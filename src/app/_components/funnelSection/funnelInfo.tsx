import { Stack, Box, Button, Container, Typography, useMediaQuery } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface fun {
  id: number;
  name: string;
}

export default function FunnelInfo() {
  const funnelList = [
    {
      id: 1,
      name: 'Dynamic Retargeting with Custom Messaging',
    },
    {
      id: 2,
      name: 'WhatsApp AI Assistants',
    },
    {
      id: 3,
      name: 'Microsites & Project Landing Pages',
    },
    {
      id: 4,
      name: 'Exclusive Pre-Booking Webinars & Q&A Sessions',
    },
    {
      id: 0,
      name: 'Google My Business & Maps Optimization',
    },
  ];

  return (
    <Stack>
      <Box>
        <h3>Turning Interest into Site Visits</h3>
        <Typography sx={{ paddingLeft: 0 }}>
          Now that we’ve caught their attention, it’s time to nurture leads and push them closer to
          a decision.
        </Typography>

        <List sx={{ listStyleType: 'disc', paddingLeft: 2 }}>
          {funnelList.map((funnel: fun) => (
            <ListItem key={funnel.id} sx={{ display: 'list-item' }}>
              <ListItemText primary={funnel.name} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Stack>
  );
}
