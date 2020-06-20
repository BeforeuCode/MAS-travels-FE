import React from 'react';
import './App.css';
import styled from '@emotion/styled';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './Routes/Home/Home';
import { GlobalProviders } from './GlobalProviders';

const MainScene = styled.div`
  display: flex;
  height: 100%;
`;

const MainContainer = styled.div`
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <GlobalProviders>
      <BrowserRouter>
        <MainScene>
          <MainContainer>
            <Home />
          </MainContainer>
        </MainScene>
      </BrowserRouter>
    </GlobalProviders>
  );
}

export default App;
