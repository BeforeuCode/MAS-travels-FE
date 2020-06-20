import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Button } from '@material-ui/core';

interface IProps {
  travelId: number;
  onEditTravelInformationDialog: (id: number) => void;
}

const StyledButton = styled(Button)`
  && {
    height: 3.5rem;
  }
`;

export const EditTravelInformationButton: FC<IProps> = ({
  travelId,
  onEditTravelInformationDialog,
}) => {
  const openEditTravelInformation = () => {
    onEditTravelInformationDialog(travelId);
  };

  return (
    <>
      <StyledButton
        size="small"
        onClick={openEditTravelInformation}
        variant={'outlined'}
      >
        Edit Information Card
      </StyledButton>
    </>
  );
};
