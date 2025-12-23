import {
  Box,
  Button,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { InboxIcon } from 'lucide-react';
import React from 'react';

const headings = ['Web development', 'Software', 'Ai/ml', 'Heading 3', 'Heading 4', 'Heading 5'];

export default function GridLeftColumn() {
  const [tech, setTech] = React.useState<string>('Web development');
  return (
    <Box sx={{ backgroundColor: '#fa7878ff', borderRadius: 2 }}>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: { xs: 'row', sm: 'column' },
          flexWrap: 'wrap',
          padding: 2,
          //   backgroundColor: '#fa7878ff',
          height: 1,
          gap: 2,
        }}
      >
        {headings.map((head) => (
          <Typography
            key={head}
            variant="subtitle2"
            sx={{
              paddingBlock: 1,
              paddingInline: 2,
              border: '1px solid',
              borderColor: 'grey.200',
              backgroundColor: 'common.white',
              borderRadius: 2,
            }}
          >
            {head}
          </Typography>
        ))}
      </Box>
      <Box sx={{ padding: 2, display: { xs: 'flex', sm: 'none' } }}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
            slotProps={{
              input: {
                sx: {
                  color: 'common.white',
                  borderColor: 'red !important',
                },
              },
              root: {
                sx: {
                  '& fieldset': {
                    borderColor: 'white !important',
                  },
                  '& svg': {
                    color: 'white !important',
                  },
                },
              },
            }}
          >
            {headings.map((head) => (
              <MenuItem value={head} key={head}>
                {head}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
