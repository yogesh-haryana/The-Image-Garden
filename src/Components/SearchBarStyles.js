import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  searchbar: {
    width: '300px',
    height: '30px',
    borderRadius: '6px 0 0 6px',
    border: '1px solid black',
    borderRight: 'none',
  },
  searchButton: {
    height: '34px',
    width: '35px',
    background: '#2196F3',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '0 6px 6px 0',
    border: '1px solid black',
    borderLeft: 'none',
  },
  searchForm: {
    display: 'table',
    margin: '0 auto',
  },
});

export default useStyle;
