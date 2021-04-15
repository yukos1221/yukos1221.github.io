import { MAIN_COLOR, SECONDARY_COLOR } from '../../lib/constants';

const styles = () => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: "100%",
    height: "8.5rem",
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
  },
  logo: {
    height: '100%',
  },
  logoText: {
    marginLeft: '1rem',
    fontFamily: 'Geometric Sans Serif',
    fontSize: '1.375rem',
    textTransform: 'uppercase',
    color: SECONDARY_COLOR,
    width: 'fit-content',
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
