import { FC, useEffect, useMemo, useState } from 'react';
import { CustomDialog } from '../../../../../Components/CustomDialog';
import React from 'react';
import { ITravel } from '../../../../../../../Types/travel';

import { createClientsTravelsTableConfig } from '../utils';
import { CellConfig, CustomTable } from '../../../../../Components/CustomTable';
import styled from '@emotion/styled';
import { getClientTravels } from '../../../../../../../Api/travels.api';

interface IProps {
  open: boolean;
  onClose: () => void;
  clientId: number;
}

const StyledTable = styled(CustomTable)`
  && {
    margin-bottom: 4rem;
    width: 100%;
  }
`;

export const ClientTravelsDialog: FC<IProps> = ({
  open,
  onClose,
  clientId,
}) => {
  const [travels, setTravels] = useState<ITravel[]>([]);

  const fetchTravels = () => {
    if (clientId) {
      getClientTravels(clientId).then((travels) => {
        setTravels(travels);
      });
    }
  };

  useEffect(() => {
    fetchTravels();
    // eslint-disable-next-line
  }, [open]);

  const clientTravelsTableConfig = useMemo(() => {
    return createClientsTravelsTableConfig() as CellConfig<{}>[];
  }, []);

  return (
    <CustomDialog title={'Client travels'} open={open} onClose={onClose}>
      <StyledTable config={clientTravelsTableConfig} data={travels} />
    </CustomDialog>
  );
};
