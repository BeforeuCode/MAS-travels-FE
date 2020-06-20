import styled from '@emotion/styled';
import React, { FC } from 'react';
import { NavigationPanel } from './NavigationPanel/NavigationPanel';
import { Route } from 'react-router-dom';

const HomeBody = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const Home: FC = () => {
  return (
    <HomeBody>
      <NavigationPanel />
      <Route exact path="/home/user"></Route>
      <Route exact path="/home/manager"></Route>
      <Route exact path="/home/admin"></Route>
    </HomeBody>
  );
};
