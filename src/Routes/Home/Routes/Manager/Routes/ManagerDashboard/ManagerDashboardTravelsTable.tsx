import React, { FC, useEffect, useMemo, useState } from 'react';

import { createTravelsTableConfig } from './utils';
import { Button } from '@material-ui/core';
import { addTravel, getTravels } from '../../../../../../Api/travels.api';
import { ITravel } from '../../../../../../Types/travel';
import { CellConfig, CustomTable } from '../../../../Components/CustomTable';
import styled from '@emotion/styled';
import { TableToolbar } from '../../../../Components/TableToolbar';
import { AddNewTravelDialog } from './AddNewTravelDialog';

const StyledTable = styled(CustomTable)`
  && {
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
  && {
    margin-left: auto;
  }
`;

export const TravelsTable: FC = () => {
  const [travels, setTravels] = useState<ITravel[]>([]);
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  const fetchTravels = () => {
    getTravels().then((travels) => {
      setTravels(travels);
    });
  };

  const openTravelInformationEdit = (travelId: number) => {
    console.log(travelId);
  };

  const travelsTableConfig = useMemo(() => {
    return createTravelsTableConfig(
      openTravelInformationEdit
    ) as CellConfig<{}>[];
  }, []);

  useEffect(() => {
    fetchTravels();
  }, []);

  const onAddNewTravel = () => {
    setAddDialogOpen(true);
  };

  const handleClose = () => {
    setAddDialogOpen(false);
  };
  const handleSubmit = (form: any) => {
    return addTravel(form)
      .then(fetchTravels)
      .then(() => setAddDialogOpen(false));
  };

  return (
    <>
      {travelsTableConfig && (
        <StyledTable config={travelsTableConfig} data={travels}>
          <TableToolbar label={'Travels'}>
            <StyledButton
              size="small"
              variant={'outlined'}
              onClick={onAddNewTravel}
            >
              Add New Travel
            </StyledButton>
          </TableToolbar>
        </StyledTable>
      )}
      <AddNewTravelDialog
        open={addDialogOpen}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </>
  );
};
