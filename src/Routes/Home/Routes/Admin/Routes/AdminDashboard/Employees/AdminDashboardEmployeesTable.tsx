import React, { FC, useEffect, useMemo, useState } from 'react';

import { createEmployeesTableConfig } from '../utils';
import { Button } from '@material-ui/core';
import {
  addEmployee,
  deleteEmployee,
  getEmployees,
} from '../../../../../../../Api/travels.api';
import { CellConfig, CustomTable } from '../../../../../Components/CustomTable';
import styled from '@emotion/styled';
import { TableToolbar } from '../../../../../Components/TableToolbar';
import { IEmployee } from '../../../../../../../Types/employee';
import { AddNewEmployeeDialog } from './AddNewEmployeeDialog';

const StyledTable = styled(CustomTable)`
  && {
    margin-bottom: 4rem;
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
  && {
    margin-left: auto;
    margin-right: 2.5rem;
  }
`;

export const AdminDashboardEmployeeTable: FC = () => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  const fetchEmployees = () => {
    getEmployees().then((employees) => {
      setEmployees(employees);
      return employees;
    });
  };

  const removeEmployee = (employeeId: number) => {
    deleteEmployee(employeeId)
      .then(() => {
        fetchEmployees();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const employeesTableConfig = useMemo(() => {
    return createEmployeesTableConfig(removeEmployee) as CellConfig<{}>[];
    // eslint-disable-next-line
  }, [employees]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const onAddNewEmployee = () => {
    setAddDialogOpen(true);
  };

  const handleClose = () => {
    setAddDialogOpen(false);
  };

  const handleSubmit = (form: any) => {
    return addEmployee(form)
      .then(fetchEmployees)
      .then(() => setAddDialogOpen(false));
  };

  return (
    <>
      {employeesTableConfig && (
        <StyledTable config={employeesTableConfig} data={employees}>
          <TableToolbar label={'Travels'}>
            <StyledButton
              size="small"
              variant={'outlined'}
              onClick={onAddNewEmployee}
            >
              Add New Employee
            </StyledButton>
          </TableToolbar>
        </StyledTable>
      )}
      <AddNewEmployeeDialog
        open={addDialogOpen}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </>
  );
};
