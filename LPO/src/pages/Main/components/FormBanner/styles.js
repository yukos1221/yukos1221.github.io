import { MAIN_COLOR } from '../../../../lib/constants';

const styles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: "100%",
    minHeight: '10rem',
    height: "100%",
    backgroundColor: MAIN_COLOR,
    padding: '6rem',
  },
  bannerName: {
    fontWeight: 700,
    fontSize: '2.25rem',
    textTransform: 'uppercase',
    color: 'white',
    lineHeight: '45px',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
  },
  leftPart: {
    flex: 1,
    marginRight: '10rem',
    '& > :not(:last-child)': {
      marginBottom: '1.875rem',
    }
  },
  rightPart: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  inputBlock: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontWeight: 300,
    fontSize: '1rem',
    fontFamily: 'Museo Sans Cyrl',
    color: 'black',
    marginBottom: '0.625rem',
  },
  labelStrong: {
    extend: 'label',
    fontWeight: 500,
  },
  input: {
    border: '2px solid #232323',
    backgroundColor: MAIN_COLOR,
    minHeight: '3rem',
    fontSize: '1.25rem',
    padding: '0 0.375rem',
    transitionDuration: '0.3s',
    '&:focus': {
      borderColor: '#666666',
      outline: 'none',
    }
  },
  rowWithCheckbox: {
    display: 'flex',
    alignItems: 'center',
  },
  checkboxBlock: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '1rem',
    marginTop: '28px',
  },
  checkbox: {
    color: '#232323 !important'
  },
  textArea: {
    extend: 'input',
    resize: 'none',
    minHeight: '12.5rem',
    padding: '0.375rem',
    transitionDuration: '0.3s',
    marginBottom: '1.875rem',
    '&:focus': {
      borderColor: '#666666',
      outline: 'none',
    }
  },
  submitButton: {
    marginLeft: 'auto',
    marginTop: 'auto',
  }
});

export default styles;
