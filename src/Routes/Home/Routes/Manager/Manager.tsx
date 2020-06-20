import { ICommonProps } from '../../../../Types/props';
import styled from '@emotion/styled';
import React, { FC } from 'react';
import { HomePageWrapper } from '../../HomePageWrapper';
import { Header } from '../../Components/Header';
import { Redirect, Route } from 'react-router-dom';
import { ManagerDashboard } from './Routes/ManagerDashboard/ManagerDashboard';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Manager: FC<ICommonProps> = () => {
  return (
    <Wrapper>
      <Header label="MAS Manager Panel" />
      <HomePageWrapper>
        <Route exact path="/home/manager">
          <Redirect to={'/home/manager/dashboard'} />
        </Route>
        <Route exact path="/home/manager/dashboard">
          <ManagerDashboard />
        </Route>
      </HomePageWrapper>
    </Wrapper>
  );
};
