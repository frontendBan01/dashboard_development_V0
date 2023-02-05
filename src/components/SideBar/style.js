import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
  },
  image: {
    width: '40%',
    borderRadius: '50%',
    marginLeft: '1rem',
  },
  links: { color: theme.palette.text.primary, textDecoration: 'none' },
  genreImages: { filter: theme.palette.mode === 'dark' ? 'dark' : '' },
}));
