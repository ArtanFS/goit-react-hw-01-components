import styled from 'styled-components';
import { Wrapper } from 'components/Wrapper.styled';

export const SectionWrapper = styled(Wrapper)(() => {
  return {
    width: '240px',
    marginBottom: '20px',

    '& h2': {
      padding: '10px 0',
      textTransform: 'uppercase',
      borderBottom: '2px solid #dcdcdc',
    },
    '& li': {
      borderTop: 'none',
    },
  };
});
