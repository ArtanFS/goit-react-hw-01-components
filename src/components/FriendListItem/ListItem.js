import styled from 'styled-components';

export const ListItem = styled('li')(({ color }) => {
  return {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    height: '64px',
    fontSize: '20px',
    fontWeight: '500',
    padding: '0 10px',
    marginBottom: '10px',
    borderRadius: '10px',
    border: '2px solid #dcdcdc',
    boxShadow: '5px 5px 8px 2px rgba(0, 0, 0, 0.3)',
    '& span': {
      width: '15px',
      height: '15px',
      backgroundColor: color,
      borderRadius: '50%',
    },
  };
});
