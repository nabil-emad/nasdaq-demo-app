import { FC, forwardRef, SyntheticEvent } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const AlertComponent = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface AlertComponentProps {
  data: {
    text: string;
    severity?: 'error' | 'warning' | 'info' | 'success';
  };
  config: {
    isOpen: boolean;
  };
  eventHandlers: {
    setOpen: (open: boolean) => void;
  };
}

const Alert: FC<AlertComponentProps> = ({ data, config, eventHandlers }) => {
  const { text, severity = 'error' } = data;
  const { isOpen } = config;
  const { setOpen } = eventHandlers;

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={isOpen}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <AlertComponent
        onClose={handleClose}
        severity={severity}
        sx={{ '& .MuiAlert-message': { fontSize: '14px' } }}
      >
        {text}
      </AlertComponent>
    </Snackbar>
  );
};

export default Alert;
