import { ICommonProps } from '../../../../Types/props';
import styled from '@emotion/styled';
import React, { FC } from 'react';
import { HomePageWrapper } from '../../HomePageWrapper';
import { Header } from '../../Components/Header';
import { Redirect, Route } from 'react-router-dom';
import { AdminDashboard } from './Routes/AdminDashboard/AdminDashboard';

const Wrapper = styled.div`
  height: 100%;
  width: calc(100% - 23rem);
  display: flex;
  flex-direction: column;
`;

export const Admin: FC<ICommonProps> = () => {
  return (
    <Wrapper>
      <Header label="MAS Admin Panel" />
      <HomePageWrapper>
        <Route exact path="/home/admin">
          <Redirect to={'/home/admin/dashboard'} />
        </Route>
        <Route exact path="/home/admin/dashboard">
          <AdminDashboard />
        </Route>
      </HomePageWrapper>
    </Wrapper>
  );
};
