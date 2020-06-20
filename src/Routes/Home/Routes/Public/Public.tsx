import { ICommonProps } from '../../../../Types/props';
import styled from '@emotion/styled';
import React, { FC } from 'react';
import { HomePageWrapper } from '../../HomePageWrapper';
import { Header } from '../../Components/Header';
import { Redirect, Route } from 'react-router-dom';
import { TravelsBoard } from './Routes/TravelsBoard/TravelsBoard';
import { Travel } from './Routes/Travel/Travel';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Public: FC<ICommonProps> = () => {
  return (
    <Wrapper>
      <Header label="MAS Travels ✈🛫" />
      <HomePageWrapper>
        <Route exact path="/home/public">
          <Redirect to={'/home/public/travels'} />
        </Route>
        <Route exact path="/home/public/travels">
          <TravelsBoard />
        </Route>
        <Route exact path="/home/public/travels/:id">
          <Travel />
        </Route>
      </HomePageWrapper>
    </Wrapper>
  );
};
