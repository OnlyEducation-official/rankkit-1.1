import { Mail, Phone } from '@mui/icons-material';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

export default function ReadyToConnext() {
  // const handleConnectClick = () => {
  // console.log(`Connect via ${method}`);
  // Add your connection logic here
  // };
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        zIndex: 10,
        background: 'linear-gradient(to right, rgba(12,12,113,0.1), rgba(236,42,51,0.1))',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                sx={{
                  //   fontSize: { xs: '2.5rem', md: '3rem' },
                  fontWeight: 600,
                  mb: 3,
                }}
              >
                <Typography
                  component="span"
                  sx={{ color: '#0c0c71', fontSize: 'inherit', fontWeight: 'inherit' }}
                >
                  Ready to
                </Typography>{' '}
                <Typography
                  component="span"
                  sx={{ color: '#ec2a33', fontSize: 'inherit', fontWeight: 'inherit' }}
                >
                  Connect?
                </Typography>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: 'text.secondary', mb: 6, fontWeight: 500 }}
              >
                {`Let's discuss your project and bring your vision to life`}
              </Typography>
            </motion.div>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  component="a"
                  href="mailto:akber6335@gmail.com?subject=Inquiry&body=Hello Ali,"
                  variant="outlined"
                  size="large"
                  startIcon={<Mail />}
                  sx={{
                    border: '2px solid #0c0c71',
                    color: '#0c0c71',
                    px: 4,
                    py: 2,
                    borderRadius: '12px',
                    bgcolor: 'background.paper',
                    '&:hover': {
                      bgcolor: '#0c0c71',
                      color: 'white',
                      borderColor: '#0c0c71',
                    },
                    boxShadow: 4,
                  }}
                >
                  Email Us
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  // onClick={() => handleConnectClick('phone')}
                  variant="outlined"
                  size="large"
                  startIcon={<Phone />}
                  sx={{
                    border: '2px solid #ec2a33',
                    color: '#ec2a33',
                    px: 4,
                    py: 2,
                    borderRadius: '12px',
                    bgcolor: 'background.paper',
                    '&:hover': {
                      bgcolor: '#ec2a33',
                      color: 'white',
                      borderColor: '#ec2a33',
                    },
                    boxShadow: 4,
                  }}
                >
                  Call Us
                </Button>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
