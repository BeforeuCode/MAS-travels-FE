import styled from '@emotion/styled';
import React, { FC } from 'react';
import { NavigationPanel } from './NavigationPanel/NavigationPanel';
import { Route } from 'react-router-dom';
import { Public } from './Routes/Public/Public';
import { Manager } from './Routes/Manager/Manager';

const HomeBody = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const Home: FC = () => {
  return (
    <HomeBody>
      <NavigationPanel />
      <Route path="/home/public">
        <Public />
      </Route>
      <Route path="/home/manager">
        <Manager />
      </Route>
      <Route path="/home/admin">{/*<Admin />*/}</Route>
    </HomeBody>
  );
};
