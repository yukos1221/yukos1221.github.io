import { MAIN_COLOR } from '../../../../../../lib/constants';

const styles = () => ({
  container: {
    width: "100%",
    height: "100%",
    minWidth: '280px',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.625rem',
    fontFamily: 'Museo Sans Cyrl',
    backgroundColor: '#232323',
  },
  image: {
    width: '100%',
    border: '2px solid #FFA600',
  },
  titleBlock: {
    margin: '2rem 0',
    height: '2.75rem',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Museo Sans Cyrl',
    fontWeight: 700,
    fontSize: '1.125rem',
    color: MAIN_COLOR
  },
  description: {
    color: 'white',
    fontSize: '0.875rem',
    marginBottom: '1.5rem',
  },
  bottomRow: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 'auto',
  },
  dateIcon: {
    width: '1rem',
    height: '1rem',
    marginRight: '0.375rem',
    transform: 'translate(0, 2px)',
  },
  dateBlock: {
    color: 'white',
    marginLeft: 'auto',
  },
});

export default styles;
