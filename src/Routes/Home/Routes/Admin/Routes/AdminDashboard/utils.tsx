import { CellConfig } from '../../../../Components/CustomTable';
import { IEmployee } from '../../../../../../Types/employee';
import React, { ReactElement } from 'react';
import { TableActionButton } from '../../../../Components/TableActionButton';

export const createEmployeesTableConfig = (
  removeEmployee: (employeeId: number) => void
): CellConfig<IEmployee>[] => {
  return [
    {
      name: 'Emmplyee ID',
      propKey: 'id',
    },
    {
      name: 'Type',
      propKey: 'type',
    },
    {
      name: 'Name',
      propKey: 'name',
    },
    {
      name: 'Last Name',
      propKey: 'lastName',
    },
    {
      name: 'Email',
      propKey: 'email',
    },
    {
      name: 'Phone',
      propKey: 'phone',
    },
    {
      name: 'Salary',
      propKey: 'salary',
    },
    {
      name: 'Work Amount',
      propKey: 'workAmount',
    },
    {
      name: 'Employment',
      propKey: 'employment',
    },
    {
      name: 'Contract',
      propKey: 'contract',
    },
    {
      name: 'Ranking',
      propKey: 'employeeRanking',
    },
    {
      name: 'Bonus',
      propKey: 'bonus',
    },
    {
      name: 'Languages',
      propKey: 'languages',
    },
    {
      name: '',
      renderCell(values: IEmployee): ReactElement {
        return (
          <TableActionButton
            id={values.id}
            label={'Remove'}
            onAction={removeEmployee}
          />
        );
      },
    },
  ];
};
