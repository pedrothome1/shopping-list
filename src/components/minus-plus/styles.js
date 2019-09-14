import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  box: {
    display: 'flex',
  },
  middle: {
    minWidth: '35px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '1px solid rgba(0, 0, 0, 0.14)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.14)',
  },
  buttonLeft: {
    minWidth: '35px',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    boxShadow: 'none',
    // padding: 0,
  },
  buttonRight: {
    minWidth: '35px',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    boxShadow: 'none',
    // padding: 0,
  },
}));
