import styled from '@emotion/styled';
import React, { FC } from 'react';
import { AdminDashboardEmployeeTable } from './Employees/AdminDashboardEmployeesTable';

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

export const AdminDashboard: FC = () => {
  return (
    <Wrapper>
      <AdminDashboardEmployeeTable />
    </Wrapper>
  );
};
