import { ArrowRight } from '@mui/icons-material';
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import { ServiceType } from '../page';

export default function ServiceSection({
  subServices,
}: {
  subServices: ServiceType['subServices'];
}) {
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
        py: { xs: 8, lg: 12 },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                sx={{
                  //   fontSize: { xs: '2.5rem', md: '3rem' },
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                <Typography
                  component="span"
                  sx={{ color: '#0c0c71', fontSize: 'inherit', fontWeight: 'inherit' }}
                >
                  Our
                </Typography>{' '}
                <Typography
                  component="span"
                  sx={{ color: '#ec2a33', fontSize: 'inherit', fontWeight: 'inherit' }}
                >
                  Services
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 500, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}
              >
                {subServices.description}
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={6}>
            {/* Frontend Services */}
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {subServices.firstSubServices.title && (
                  <Typography
                    variant="h4"
                    sx={{ color: '#0c0c71', mb: { xs: 2, md: 4 }, fontWeight: 600 }}
                  >
                    {subServices.firstSubServices.title}
                  </Typography>
                )}
                <List disablePadding>
                  {subServices.firstSubServices.points.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ListItem sx={{ px: 0, py: 1.5 }}>
                        <ListItemIcon sx={{ minWidth: '32px' }}>
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            style={{
                              width: 8,
                              height: 8,
                              backgroundColor: '#ec2a33',
                              borderRadius: '50%',
                              transition: 'background-color 0.3s',
                            }}
                          />
                        </ListItemIcon>
                        <Typography variant="body1">{item}</Typography>
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </motion.div>
            </Grid>

            {/* Backend Services */}
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {subServices.secondSubServices.title && (
                  <Typography
                    variant="h4"
                    sx={{ color: '#0c0c71', mb: { xs: 2, md: 4 }, fontWeight: 600 }}
                  >
                    {subServices.secondSubServices.title}
                  </Typography>
                )}
                <List disablePadding>
                  {subServices.secondSubServices.points.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ListItem sx={{ px: 0, py: 1.5 }}>
                        <ListItemIcon sx={{ minWidth: '32px' }}>
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            style={{
                              width: 8,
                              height: 8,
                              backgroundColor: '#ec2a33',
                              borderRadius: '50%',
                              transition: 'background-color 0.3s',
                            }}
                          />
                        </ListItemIcon>
                        <Typography variant="body1">{item}</Typography>
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </motion.div>
            </Grid>
          </Grid>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '80px' }}
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
                Starting
              </Typography>
              <Typography
                component="span"
                sx={{ color: '#ec2a33', fontSize: 'inherit', fontWeight: 'inherit' }}
              >
                {`@ ₹${subServices.price.value}`}
              </Typography>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: 'text.secondary', mt: 2, mb: 4, fontWeight: 500 }}
            >
              {subServices.price.description}
            </Typography>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                LinkComponent={Link}
                href="/contact-us"
                // onClick={() => handleConnectClick('quote')}
                variant="contained"
                size="large"
                endIcon={<ArrowRight />}
                sx={{
                  background: 'linear-gradient(to right, #0c0c71, #ec2a33)',
                  px: 5,
                  py: 2,
                  borderRadius: '12px',
                  '&:hover': {
                    boxShadow: 6,
                  },
                }}
              >
                Get Custom Quote
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
