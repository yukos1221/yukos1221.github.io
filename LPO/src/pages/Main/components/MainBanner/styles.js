import { MAIN_COLOR, SECONDARY_COLOR } from '../../../../lib/constants';
import backgroundPhoto from '../../../../assets/images/main_banner.png'
import breakpoints from '../../../../lib/breakpoints';

const styles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: "100%",
    height: "100%",
    minHeight: '37rem',
    backgroundImage: `url(${backgroundPhoto})`,
    background: MAIN_COLOR,
    padding: '7rem 6rem',
    [breakpoints.down('900')]: {
      padding: '4.5rem'
    },
    [breakpoints.down('exs')]: {
      padding: '4rem 2rem'
    }
  },
  mainTitle: {
    fontFamily: 'Geometric Sans Serif',
    fontSize: '5rem',
    textTransform: 'uppercase',
    color: SECONDARY_COLOR,
    textAlign: 'right',
    marginBottom: '2.5rem',
    textShadow: '1rem 0.625rem 0rem rgba(0, 0, 0, 0.1)',
    [breakpoints.down('1920')]: {
      fontSize: '3.375rem'
    },
    [breakpoints.down('900')]: {
      fontSize: '1.875rem'
    }
  },
  secondTitle: {
    width: '65%',
    marginLeft: 'auto',
    fontFamily: 'Museo Sans Cyrl',
    fontWeight: 300,
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    textAlign: 'right',
    marginBottom: '1.5rem',
    [breakpoints.down('900')]: {
      width: '100%',
      fontSize: '1.125rem'
    }
  },
  description: {
    width: '100%',
    maxWidth: '37.5rem',
    marginLeft: 'auto',
    fontFamily: 'Museo Sans Cyrl',
    fontWeight: 300,
    fontSize: '1rem',
    textAlign: 'right',
    [breakpoints.down('900')]: {
      maxWidth: '100%',
    }
  },
  buttonsRow: {
    marginTop: '2.5rem',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginLeft: '3rem'
  }
});

export default styles;
