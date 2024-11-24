import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Grid2';
import AppBar from '@mui/material/AppBar';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  '& .MuiToolbar-root': {
    justifyContent: 'space-between'
  },
  '& .MuiOutlinedInput-root': {
    flexGrow: 1,
    maxWidth: '40%',
    backgroundColor: theme.palette.common.white,
    height: '40px'
  }
}));

const StyledStocksContainer = styled(Grid2)(({ theme }) => ({
  margin: '94px 24px 36px'
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(1),
  overflowY: 'scroll',
  scrollbarWidth: 'none',
  fontSize: '14px',
  height: '100px',
  '& span': {
    fontSize: '12px',
    color: theme.palette.grey[300]
  }
}));

export { StyledPaper, StyledStocksContainer, StyledAppBar };
