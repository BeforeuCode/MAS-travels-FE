import { CellConfig } from '../../../../Components/CustomTable';
import { ITravel } from '../../../../../../Types/travel';
import React, { ReactElement } from 'react';
import { TableActionButton } from '../../../../Components/TableActionButton';
import { IClient } from '../../../../../../Types/client';
import styled from '@emotion/styled';

const ActionButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const createTravelsTableConfig = (
  openDialog: (travelId: number) => void,
  removeTravel: (travelId: number) => void
): CellConfig<ITravel>[] => {
  return [
    {
      name: 'Travel ID',
      propKey: 'id',
    },
    {
      name: 'Title',
      propKey: 'title',
    },
    {
      name: 'Theme',
      propKey: 'theme',
    },
    {
      name: 'Price',
      propKey: 'price',
    },
    {
      name: 'Rate',
      propKey: 'rate',
    },
    {
      name: 'Country',
      propKey: 'country',
    },
    {
      name: 'Conveyance',
      propKey: 'conveyance',
    },
    {
      name: 'City',
      propKey: 'city',
    },
    {
      name: '',
      renderCell(values: ITravel): ReactElement {
        return (
          <ActionButtonsWrapper>
            <TableActionButton
              id={values.id}
              label={'Edit Info'}
              onAction={openDialog}
            />
            <TableActionButton
              id={values.id}
              label={'Remove'}
              onAction={removeTravel}
            />
          </ActionButtonsWrapper>
        );
      },
    },
  ];
};

export const createClientsTableConfig = (
  openShowClientTravelsDialog: (clientId: number) => void,
  openAssignTravelDialog: (clientId: number) => void,
  openRemoveClientDialog: (clientId: number) => void
): CellConfig<IClient>[] => {
  return [
    {
      name: 'Client ID',
      propKey: 'id',
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
      name: '',
      renderCell(values: IClient): ReactElement {
        return (
          <ActionButtonsWrapper>
            <TableActionButton
              id={values.id}
              label={'Show travels'}
              onAction={openShowClientTravelsDialog}
            />
            <TableActionButton
              id={values.id}
              label={'Assign travel'}
              onAction={openAssignTravelDialog}
            />
            <TableActionButton
              id={values.id}
              label={'Remove client'}
              onAction={openRemoveClientDialog}
            />
          </ActionButtonsWrapper>
        );
      },
    },
  ];
};

export const createClientsTravelsTableConfig = (): CellConfig<ITravel>[] => {
  return [
    {
      name: 'Travel ID',
      propKey: 'id',
    },
    {
      name: 'Title',
      propKey: 'title',
    },
    {
      name: 'Theme',
      propKey: 'theme',
    },
    {
      name: 'Price',
      propKey: 'price',
    },
    {
      name: 'Rate',
      propKey: 'rate',
    },
    {
      name: 'Country',
      propKey: 'country',
    },
    {
      name: 'Conveyance',
      propKey: 'conveyance',
    },
    {
      name: 'City',
      propKey: 'city',
    },
  ];
};

export const createAssignTravelTableConfig = (
  assignTravel: (travelId: number) => void
): CellConfig<ITravel>[] => {
  return [
    {
      name: 'Travel ID',
      propKey: 'id',
    },
    {
      name: 'Title',
      propKey: 'title',
    },
    {
      name: 'Theme',
      propKey: 'theme',
    },
    {
      name: 'Price',
      propKey: 'price',
    },
    {
      name: 'Rate',
      propKey: 'rate',
    },
    {
      name: 'Country',
      propKey: 'country',
    },
    {
      name: 'Conveyance',
      propKey: 'conveyance',
    },
    {
      name: 'City',
      propKey: 'city',
    },
    {
      name: '',
      renderCell(values: ITravel): ReactElement {
        return (
          <TableActionButton
            id={values.id}
            label={'Assign travel'}
            onAction={assignTravel}
          />
        );
      },
    },
  ];
};
