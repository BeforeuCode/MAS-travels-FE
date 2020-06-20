import styled from '@emotion/styled';
import React, { FC } from 'react';
import { TravelsTable } from './ManagerDashboardTravelsTable';

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

export const ManagerDashboard: FC = () => {
  return (
    <Wrapper>
      <TravelsTable />
    </Wrapper>
  );
};
