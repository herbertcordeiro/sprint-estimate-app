import styled from 'styled-components';

import {Home} from '@pages/Home/Home';

const App: React.FC = () => {
  return (
    <Container>
      <Home />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export {App};
