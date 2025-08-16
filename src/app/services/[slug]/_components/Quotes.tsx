import { Box, Container, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ServiceType } from '../page';

export default function Quotes({ quotes }: { quotes: ServiceType['quotes'] }) {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {/* Motivational Quotes Section */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          zIndex: 10,
          background: 'linear-gradient(to right, rgba(12,12,113,0.05), rgba(236,42,51,0.05))',
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box textAlign="center">
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h4"
                  component="blockquote"
                  sx={{
                    fontStyle: 'italic',
                    mb: 2,
                    // fontSize: { xs: '1.5rem', md: '2rem' },
                    lineHeight: 1.6,
                  }}
                >
                  {`"${quotes[currentQuote].text}"`}
                </Typography>
                <Typography
                  variant="h6"
                  component="cite"
                  sx={{
                    color: '#0c0c71',
                    fontWeight: 500,
                    fontStyle: 'normal',
                  }}
                >
                  — {quotes[currentQuote].author}
                </Typography>
              </motion.div>

              {/* Quote indicators */}
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 4 }}>
                {quotes.map((_, index) => (
                  <IconButton
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    onClick={() => setCurrentQuote(index)}
                    size="small"
                    sx={{
                      p: 0,
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        transition: 'all 0.3s',
                        backgroundColor: index === currentQuote ? '#ec2a33' : 'grey.300',
                        transform: index === currentQuote ? 'scale(1.25)' : 'scale(1)',
                        '&:hover': {
                          backgroundColor:
                            index === currentQuote ? '#ec2a33' : 'rgba(236,42,51,0.5)',
                        },
                      }}
                    />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}
