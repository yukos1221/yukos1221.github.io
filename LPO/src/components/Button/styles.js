import { SECONDARY_COLOR } from '../../lib/constants'

const styles = () => ({
  button: {
    backgroundColor: 'white',
    width: '18rem',
    height: '2.75rem',
    textTransform: 'uppercase',
    border: '1px solid white',
    color: SECONDARY_COLOR,
    transitionDuration: '0.3s',
    cursor: 'pointer',
    '&:hover': {
      borderColor: '#dbb54d',
      backgroundColor: '#FAF3CD'
    }
  }
});

export default styles;
