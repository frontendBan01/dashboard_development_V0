import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  searchContainer: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
  },
  input: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '-10px',
      marginBottom: '10px',
      color: theme.palette.mode === 'light' ? 'black' : 'white',
      filter: theme.palette.mode === 'light' && 'invert(1)',
    },
  },
}));
