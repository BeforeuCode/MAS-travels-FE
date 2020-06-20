import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Button } from '@material-ui/core';

interface IProps {
  id: number;
  label: string;
  onAction: (id: number) => void;
}

const StyledButton = styled(Button)`
  && {
    height: 3.5rem;
  }
`;

export const TableActionButton: FC<IProps> = ({ id, onAction, label }) => {
  const openEditTravelInformation = () => {
    onAction(id);
  };

  return (
    <>
      <StyledButton
        color="primary"
        size="small"
        onClick={openEditTravelInformation}
        variant={'outlined'}
      >
        {label}
      </StyledButton>
    </>
  );
};
