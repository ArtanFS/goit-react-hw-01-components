import styled from 'styled-components';

export const Table = styled('table')(() => {
  return {
    width: '360px',
    textAlign: 'center',
    margin: '0 auto',
    border: '2px solid #dcdcdc',
    borderCollapse: 'collapse',
    boxShadow: '5px 5px 8px 2px rgba(0, 0, 0, 0.3)',
    '& th': {
      padding: '10px 0 12px',
      color: '#fff',
      backgroundColor: '#55ffff',
      border: '1px solid #dcdcdc',
    },
    '& td': {
      textTransform: 'capitalize',
      padding: '5px 0 8px',
      border: '1px solid #dcdcdc',
    },
    '& tr:nth-child(odd)': {
      backgroundColor: '#f0ffff',
    },
    '& tr:nth-child(even)': {
      backgroundColor: '#efefef',
    },
  };
});
