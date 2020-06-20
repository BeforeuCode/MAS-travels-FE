import React, { FC, useEffect, useMemo, useState } from 'react';

import { createClientsTableConfig } from '../utils';
import { Button } from '@material-ui/core';
import { addClient, getClients } from '../../../../../../../Api/travels.api';
import { CellConfig, CustomTable } from '../../../../../Components/CustomTable';
import styled from '@emotion/styled';
import { TableToolbar } from '../../../../../Components/TableToolbar';
import { IClient, IClientForm } from '../../../../../../../Types/client';
import { AddNewClientDialog } from './AddNewClientDialog';
import { ClientTravelsDialog } from './ClientTravelsDialog';
import { AssignTravelDialog } from './AssignTravelDialog';

const StyledTable = styled(CustomTable)`
  && {
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
  && {
    margin-left: auto;
    margin-right: 2.5rem;
  }
`;

export const ManagerDashboardClientsTable: FC = () => {
  const [clients, setClients] = useState<IClient[]>([]);
  const [addNewClientDialogOpen, setAddNewClientDialogOpen] = useState(false);
  const [clientTravelsDialogOpen, setClientTravelsDialogOpen] = useState(false);
  const [assignTravelDialogOpen, setAssignTravelDialogOpen] = useState(false);
  const [dialogClientId, setDialogClientId] = useState();

  const fetchClients = () => {
    getClients().then((clients) => {
      setClients(clients);
    });
  };

  const openShowClientTravelsDialog = (clientId: number) => {
    setDialogClientId(clientId);
    setClientTravelsDialogOpen(true);
  };

  const openAssignTravelDialog = (clientId: number) => {
    setDialogClientId(clientId);
    setAssignTravelDialogOpen(true);
  };

  const openRemoveClientDialog = (clientId: number) => {
    console.log(clientId);
  };

  const travelsTableConfig = useMemo(() => {
    return createClientsTableConfig(
      openShowClientTravelsDialog,
      openAssignTravelDialog,
      openRemoveClientDialog
    ) as CellConfig<{}>[];
    // eslint-disable-next-line
  }, [clients]);

  useEffect(() => {
    fetchClients();
  }, []);

  const onAddNewClient = () => {
    setAddNewClientDialogOpen(true);
  };

  const handleAddNewClientClose = () => {
    setAddNewClientDialogOpen(false);
  };

  const handleClientTravelsDialogClose = () => {
    setClientTravelsDialogOpen(false);
  };
  const handleAddNewClientSubmit = (form: IClientForm) => {
    return addClient(form)
      .then(fetchClients)
      .then(() => setAddNewClientDialogOpen(false));
  };
  const handleAssignTravelDialogClose = () => {
    setAssignTravelDialogOpen(false);
  };
  const handleTripAssigned = () => {
    fetchClients();
  };

  return (
    <>
      {travelsTableConfig && (
        <StyledTable config={travelsTableConfig} data={clients}>
          <TableToolbar label={'Clients'}>
            <StyledButton
              size="small"
              variant={'outlined'}
              onClick={onAddNewClient}
            >
              Add New Client
            </StyledButton>
          </TableToolbar>
        </StyledTable>
      )}
      <AddNewClientDialog
        onSubmit={handleAddNewClientSubmit}
        onClose={handleAddNewClientClose}
        open={addNewClientDialogOpen}
      />
      <ClientTravelsDialog
        open={clientTravelsDialogOpen}
        onClose={handleClientTravelsDialogClose}
        clientId={dialogClientId}
      />
      <AssignTravelDialog
        open={assignTravelDialogOpen}
        onClose={handleAssignTravelDialogClose}
        clientId={dialogClientId}
        onTripAssigned={handleTripAssigned}
      />
    </>
  );
};
