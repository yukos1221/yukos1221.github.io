import breakpoints from '../../lib/breakpoints';
import { MAIN_COLOR, SECONDARY_COLOR } from '../../lib/constants';

const styles = () => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: "100%",
    height: "8.5rem",
    [breakpoints.down('mb')]: {
      height: '6.25rem',
    },
    [breakpoints.down('sm')]: {
      height: '5rem',
    },
    [breakpoints.down('exs')]: {
      height: '3.5rem',
    },
  },
  greyBg: {
    backgroundColor: '#E5E5E5'
  },
  logoBlock: {
    height: '60%',
    display: 'flex',
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    marginLeft: '3rem',
    [breakpoints.down('sm')]: {
      marginLeft: '2rem',
    },
    [breakpoints.down('exs')]: {
      marginLeft: '1rem',
    },
  },
  logo: {
    height: '100%',
  },
  logoText: {
    marginLeft: '1rem',
    fontFamily: 'Geometric Sans Serif',
    fontSize: '22px',
    textTransform: 'uppercase',
    color: SECONDARY_COLOR,
    width: 'fit-content',
    [breakpoints.down('mb')]: {
      fontSize: '18px',
    },
    [breakpoints.down('sm')]: {
      fontSize: '16px',
    },
    [breakpoints.down('exs')]: {
      fontSize: '11px',
    },
  },
  marked: {
    color: MAIN_COLOR,
  },
  nav: {
    flex: 3,
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  navList: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    listStyleType: 'none',
  },
  navItem: {
    cursor: 'pointer',
    textTransform: 'uppercase',
    marginRight: '3rem',
    color: SECONDARY_COLOR,
  }
});

export default styles;
