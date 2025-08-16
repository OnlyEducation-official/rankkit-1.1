import { ArrowRight } from '@mui/icons-material';
import { Grid, Typography, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { ServiceType } from '../page';

export default function HeroSection({ heroData }: { heroData: ServiceType['hero'] }) {
  // const handleConnectClick = (method: string) => {
  // console.log(`Connect via ${method}`);
  // Add your connection logic here
  // };
  return (
    <Grid container spacing={6} alignItems="center">
      {/* Left Content */}
      <Grid size={{ xs: 12, md: 6 }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h1"
            sx={{
              //   fontSize: { xs: '3.5rem', md: '5rem', lg: '6rem' },
              fontWeight: 700,
              letterSpacing: '0.05em',
              lineHeight: 1.2,
              mb: 4,
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: 'block', color: '#0c0c71' }}
            >
              {heroData.title.blue}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ display: 'block', color: '#ec2a33' }}
            >
              {heroData.title.red}
            </motion.span>
          </Typography>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {heroData.description.map((str) => (
              <Typography key={uuidv4()} variant="subtitle1" sx={{ mb: 3, fontWeight: 500 }}>
                {str}
              </Typography>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                LinkComponent={Link}
                href="/contact-us"
                // onClick={() => handleConnectClick('consultation')}
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowRight />}
                sx={{
                  bgcolor: '#0c0c71',
                  '&:hover': { bgcolor: '#0a0a5f' },
                  px: 4,
                  py: 2,
                  borderRadius: '12px',
                  '& .MuiButton-endIcon': {
                    transition: 'transform 0.3s',
                  },
                  '&:hover .MuiButton-endIcon': {
                    transform: 'translateX(4px)',
                  },
                }}
              >
                Get Free Consultation
              </Button>
            </motion.div>

            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => handleConnectClick('portfolio')}
                variant="outlined"
                size="large"
                sx={{
                  border: '2px solid #ec2a33',
                  color: '#ec2a33',
                  px: 4,
                  py: 2,
                  borderRadius: '12px',
                  '&:hover': {
                    bgcolor: '#ec2a33',
                    color: 'white',
                    borderColor: '#ec2a33',
                  },
                }}
              >
                View Portfolio
              </Button>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </Grid>

      {/* Right Image */}
      <Grid size={{ xs: 12, md: 6 }}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ position: 'relative', height: '100%' }}
        >
          <Paper
            elevation={0}
            sx={{
              height: { xs: '400px', md: '500px', lg: '600px' },
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
              background: 'transparent',
            }}
          >
            {/* Replace with your actual image component */}
            <Image
              src={heroData.image}
              alt="Website Development"
              // layout="fill"
              objectFit="fill"
              quality={100}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </Paper>
        </motion.div>
      </Grid>
    </Grid>
  );
}
