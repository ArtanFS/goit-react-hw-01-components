import styled from 'styled-components';

export const Container = styled('div')(() => {
  return {
    width: '180px',
    textAlign: 'center',
    margin: '0 auto',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '2px solid #dcdcdc',
    boxShadow: '5px 5px 8px 2px rgba(0, 0, 0, 0.3)',
    '& div': { padding: '10px 0' },
    '& img': { margin: '0 auto' },
    '& p': {
      padding: '5px 0',
      fontSize: '14px',
      fontWeight: '500',
    },
    '& p:nth-child(2)': {
      paddingTop: '10px',
      fontWeight: '700',
      fontSize: '18px',
    },
  };
});
