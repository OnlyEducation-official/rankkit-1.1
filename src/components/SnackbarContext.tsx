'use client';

import { Alert, Snackbar } from '@mui/material';
import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

// Define types for the Snackbar context
type HandleSnackBar = {
  open: boolean;
  message: string;
  severity: 'success' | 'error' | 'info' | 'warning';
};

interface SnackbarContextProps {
  openSnackbar: (params: {
    snackMessage: string;
    snackSeverity: HandleSnackBar['severity'];
  }) => void;
}

const SnackbarContext = createContext<SnackbarContextProps | undefined>(undefined);

export function SnackbarProvider({ children }: { children: ReactNode }) {
  const [{ open, message, severity }, setSnackbar] = useState<HandleSnackBar>({
    open: false,
    message: '',
    severity: 'info',
  });

  // Function to open the snackbar
  const openSnackbar = ({
    snackMessage,
    snackSeverity,
  }: {
    snackMessage: string;
    snackSeverity: HandleSnackBar['severity'];
  }) => {
    setSnackbar({ open: true, message: snackMessage, severity: snackSeverity });
  };

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({ openSnackbar }),
    [], // Only recreate the context value if the `openSnackbar` function changes
  );

  // Close the snackbar
  const closeSnackbar = () => {
    setSnackbar({ open: false, message: '', severity: 'info' });
  };

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        key="topcenter"
      >
        <Alert onClose={closeSnackbar} severity={severity} variant="filled" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
}

// Custom hook to use the Snackbar context
export const useSnackbar = (): SnackbarContextProps => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};

export default useSnackbar;
