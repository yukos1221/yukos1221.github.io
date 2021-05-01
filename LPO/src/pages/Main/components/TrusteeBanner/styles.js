import breakpoints from '../../../../lib/breakpoints';

const styles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: "100%",
    height: "100%",
    minHeight: '37rem',
    padding: '7rem 6rem',
    [breakpoints.down('sm')]: {
      padding: '4rem 3rem',
    }
  },
  bannerName: {
    fontWeight: 700,
    fontSize: '2.25rem',
    textAlign: 'right',
    textTransform: 'uppercase',
    lineHeight: '45px',
    marginBottom: '2.25rem',
    [breakpoints.down('sm')]: {
      fontSize: '1.5rem',
      lineHeight: '1.5rem',
      textAlign: 'left',
    }
  },
  trusteeList: {
    display: 'flex',
    flexWrap: 'wrap',
    [breakpoints.down('sm')]: {
      justifyContent: 'center',
    }
  }
});

export default styles;
