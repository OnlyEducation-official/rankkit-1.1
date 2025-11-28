/* eslint-disable react/destructuring-assignment */

'use client';

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import SettingsIcon from '@mui/icons-material/Settings';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Button, Container, Typography } from '@mui/material';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import CampaignIcon from '@mui/icons-material/Campaign';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import DataExplorationIcon from '@mui/icons-material/DataExploration';
import { Link } from 'react-scroll';

/* ---------- HORIZONTAL CONNECTOR (same as your original) ---------- */

const ColorlibConnectorHorizontal = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(95deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(95deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
    ...(theme.palette.mode === 'dark' && {
      backgroundColor: theme.palette.grey[800],
    }),
  },
}));

/* ---------- VERTICAL CONNECTOR (same thickness + gradient) ---------- */

const ColorlibConnectorVertical = styled(StepConnector)(({ theme }) => ({
  // Position the line under the center of the icon
  marginLeft: 22, // tweak if needed based on icon size

  [`& .${stepConnectorClasses.line}`]: {
    border: 0,
    width: 3, // same "thickness" as horizontal
    borderRadius: 1,
    height: '70px',
    backgroundColor: '#eaeaf0',
    ...(theme.palette.mode === 'dark' && {
      backgroundColor: theme.palette.grey[800],
    }),
  },

  // Active & completed segments use the same gradient as horizontal
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    backgroundImage:
      'linear-gradient(180deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    backgroundImage:
      'linear-gradient(180deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
}));

/* ---------- STEP ICON ---------- */

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(theme.palette.mode === 'dark' && {
    backgroundColor: theme.palette.grey[700],
  }),
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient(136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient(136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className, icon } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SettingsIcon />,
    2: <Diversity2Icon />,
    // 2: <GroupAddIcon />,
    3: <CampaignIcon />,
    // 3: <VideoLabelIcon />,
    4: <PermMediaIcon />,
    // 4: <VideoLabelIcon />,
    5: <DataExplorationIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(icon)]}
    </ColorlibStepIconRoot>
  );
}

/* ---------- MAIN COMPONENT ---------- */

const steps = [
  'Requirements',
  'Research & Planning',
  'Campaign Creation',
  'Ad Creation',
  'Campaign analytics',
];

export default function CustomizedSteppers() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('md')); // xs: vertical, sm+ : horizontal

  return (
    <Container maxWidth="xl" sx={{ paddingBlock: { xs: 6, lg: 8 } }}>
      <Box sx={{ marginBlockEnd: { xs: 4, md: 8 } }}>
        <Typography variant="h3" sx={{ fontWeight: 600, marginBlockEnd: 1, textAlign: 'center' }}>
          Smart Advertising Starts Here
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            width: { xs: 1, sm: 0.8 },
            textAlign: 'center',
            marginInline: 'auto',
          }}
        >
          A clear, structured approach that turns strategy, research, and creativity into powerful
          conversion-focused campaigns.
        </Typography>
      </Box>
      <Stack sx={{ alignItems: { xs: 'center', md: 'center' } }}>
        <Stack
          spacing={{ xs: 2, md: 6 }}
          sx={{
            justifyContent: 'center',
            maxWidth: { xs: 190, md: '100%' },
            width: '100%',
            marginInline: 'auto',
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', md: 'block' }, // show only md and up
              width: '100%',
            }}
          >
            <Stepper
              orientation="horizontal"
              alternativeLabel={!isXs}
              activeStep={4}
              connector={<ColorlibConnectorHorizontal />}
              sx={{
                '& .MuiStepLabel-label': {
                  fontSize: isXs ? '0.9rem' : '1rem',
                },
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <Box
            sx={{
              display: { xs: 'block', md: 'none' }, // show only md- (mobile)
              width: '100%',
            }}
          >
            <Stepper
              orientation="vertical"
              // alternativeLabel={!isXs}
              activeStep={4}
              connector={<ColorlibConnectorVertical />}
              sx={{
                '& .MuiStepLabel-label': {
                  fontSize: isXs ? '0.9rem' : '1rem',
                },
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Stack>
      </Stack>
      <Box sx={{ width: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Link
          to="servicesSection"
          smooth
          duration={500}
          offset={-10} // adjust if you have fixed navbar
        >
          <Button variant="contained" sx={{ marginBlock: { xs: 4 } }}>
            Get &nbsp; Ready &nbsp; to &nbsp; Strategies
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
