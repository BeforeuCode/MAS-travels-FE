import styled from '@emotion/styled';
import React, { FC } from 'react';
import { ManagerDashboardTravelsTable } from './Travels/ManagerDashboardTravelsTable';
import { ManagerDashboardClientsTable } from './Clients/ManagerDashboardClientsTable';

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

export const ManagerDashboard: FC = () => {
  return (
    <Wrapper>
      <ManagerDashboardClientsTable />
      <ManagerDashboardTravelsTable />
    </Wrapper>
  );
};
