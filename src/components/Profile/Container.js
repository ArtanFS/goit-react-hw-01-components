import styled from 'styled-components';

export const Container = styled('div')(() => {
  return {
    width: '180px',
    textAlign: 'center',
    border: '1px solid red',
    margin: '0 auto',
    borderRadius: '10px',
    overflow: 'hidden',
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
