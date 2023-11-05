import styled from 'styled-components';

export const Wrapper = styled('div')(() => {
  return {
    textAlign: 'center',
    margin: '0 auto',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '2px solid #dcdcdc',
    boxShadow: '5px 5px 8px 2px rgba(0, 0, 0, 0.3)',
    '&:not(:last-child)': { marginBottom: '20px' },
  };
});
