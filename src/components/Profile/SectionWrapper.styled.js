import styled from 'styled-components';
import { Wrapper } from 'components/Wrapper.styled';

export const SectionWrapper = styled(Wrapper)(() => {
  return {
    width: '180px',
    marginBottom: '20px',
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
