import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  itemsContainer: {
    textAlign: 'center',
    margin: '0 auto',
  },
  ul: {
    display: 'flex',
    justifyContent: 'center',
    '& li': {
      width: '100px',
      margin: '5px',
      '& a': {
        display: 'block',
        textDecoration: 'none',
        width: '90%',
        height: '18px',
        lineHeight: '18px',
        border: '1px solid blue',
        borderRadius: '4px',
        backgroundColor: 'blue',
        color: '#fff',
        fontSize: '14px',
        padding: '2px',
        cursor: 'pointer',
      },
    },
  },

});

export default useStyle;
