import { FC, useEffect, useMemo, useState } from 'react';
import { CustomDialog } from '../../../../../Components/CustomDialog';
import React from 'react';
import { ITravel } from '../../../../../../../Types/travel';

import { createAssignTravelTableConfig } from '../utils';
import { CellConfig, CustomTable } from '../../../../../Components/CustomTable';
import styled from '@emotion/styled';
import {
  assignTravelToClient,
  getTravels,
} from '../../../../../../../Api/travels.api';

interface IProps {
  open: boolean;
  onClose: () => void;
  clientId: number;
  onTripAssigned: () => void;
}

const StyledTable = styled(CustomTable)`
  && {
    margin-bottom: 4rem;
    width: 100%;
  }
`;

export const AssignTravelDialog: FC<IProps> = ({
  open,
  onClose,
  onTripAssigned,
  clientId,
}) => {
  const [travels, setTravels] = useState<ITravel[]>([]);

  const fetchTravels = () => {
    if (clientId) {
      getTravels().then((travels) => {
        setTravels(travels);
      });
    }
  };

  useEffect(() => {
    fetchTravels();
    // eslint-disable-next-line
  }, [open]);

  const assignTravel = (travelId: number) => {
    assignTravelToClient(travelId, clientId)
      .then(() => {
        onTripAssigned();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const assignTravelTableConfig = useMemo(() => {
    return createAssignTravelTableConfig(assignTravel) as CellConfig<{}>[];
    // eslint-disable-next-line
  }, [travels]);

  return (
    <CustomDialog title={'Client travels'} open={open} onClose={onClose}>
      {assignTravelTableConfig && (
        <StyledTable config={assignTravelTableConfig} data={travels} />
      )}
    </CustomDialog>
  );
};
