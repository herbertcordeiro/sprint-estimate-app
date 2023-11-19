import styled from 'styled-components';
import {Outlet} from 'react-router-dom';

import {Header} from '@components/Header/Header';
import {Footer} from '@components/Footer/Footer';

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  display: flex;
  flex: 1;
`;

export {App};
