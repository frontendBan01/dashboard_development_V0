import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
    // background: '#5855DF80!important',
  }, //
  toolBar: {
    height: '70px',
  },
  body: {
    background: '#5855DF80!important',
  },
  content: {
    flexGrow: 1,
    padding: '3em 1em',
  },
}));
