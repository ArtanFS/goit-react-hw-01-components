import styled from 'styled-components';
import { Wrapper } from 'components/Wrapper';

export const SectionWrapper = styled(Wrapper)(() => {
  return {
    width: '240px',
    '& h2': { padding: '10px 0' },
  };
});
