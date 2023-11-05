import styled from 'styled-components';

export const List = styled('ul')(() => {
  return {
    display: 'flex',
    '& li': {
      display: 'flex',
      gap: '5px',
      width: '100%',
      height: '50px',
      justifyContent: 'center',
      fontSize: '12px',
      backgroundColor: '#ececec',
      border: '1px solid #dcdcdc',
      borderTop: '2px solid #dcdcdc',
      borderBottom: 'none',
    },
    '& li:first-child': {
      borderLeft: 'none',
    },
    '& li:last-child': {
      borderRight: 'none',
    },
    '& li>:nth-child(2)': {
      fontWeight: '700',
    },
  };
});
