import { Stack, Box, Typography } from '@mui/material';
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
      name: 'Wide network of professional models for fashion, lifestyle, and commercial shoots.',
    },
    {
      id: 2,
      name: 'Tailored talent selection to perfectly match your brand’s identity and audience.',
    },
    {
      id: 3,
      name: 'Experienced in diverse media formats — from photo shoots to video campaigns.',
    },
    {
      id: 4,
      name: 'High-quality content creation designed for maximum engagement on all platforms.',
    },
    {
      id: 5,
      name: 'Seamless coordination from casting to final delivery for stress-free production.',
    },
    {
      id: 6,
      name: 'Proven track record of impactful brand collaborations across industries.',
    },
  ];

  return (
    <Stack>
      <Box>
        <Typography variant="h4" fontWeight={600} marginBlockEnd={1}>
          Professional Models, Powerful Brand Stories
        </Typography>
        <Typography sx={{ paddingLeft: 0 }}>
          We collaborate with a diverse roster of professional models to bring brands to life
          through authentic, captivating visuals. Our talent partnerships ensure every campaign
          connects with the right audience and leaves a lasting impression.
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
