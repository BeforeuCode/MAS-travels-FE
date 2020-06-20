import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Button, createStyles, Dialog, makeStyles } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { ICommonProps, IThemed } from '../../../Types/props';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #d5dde3;
  background-color: white;
  height: 6.5rem;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.5rem 0;
  margin: auto 3rem 0 3rem;
  align-items: center;
  border-top: 1px solid #d5dde3;
  height: 8.5rem;
`;

const ChildrenWrapper = styled.div<{ areButtons: boolean }>`
  display: flex;
  height: ${({ areButtons }) => (areButtons ? 'calc(100% - 15rem)' : '100%')};
`;

const CloseIcon = styled(Close)`
  margin: 2.5rem;
  cursor: pointer;
`;

const Title = styled.div<IThemed>`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  margin: auto 3rem;
`;

const CloseButton = styled(Button)`
  && {
    width: 10rem;
    margin-right: 1rem;
  }
`;
const SaveButton = styled(Button)`
  && {
    width: 10rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      width: '70rem',
      height: '80%',
      backgroundColor: '#F8F9FC',
    },
  })
);
export interface IDialogProps extends ICommonProps {
  title: string;
  open: boolean;
  onSaveDisabled?: boolean;
  onClose: () => void;
  onSubmit?: () => void;
}

export const CustomDialog: FC<IDialogProps> = ({
  title,
  open,
  onClose,
  onSubmit,
  onSaveDisabled = false,
  children,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ paper: classes.paper }}
      aria-labelledby="simple-dialog-title"
    >
      <Wrapper>
        <Header>
          <Title>{title}</Title>
          <CloseIcon onClick={onClose} />
        </Header>
        <ChildrenWrapper areButtons={!!onSubmit}>{children}</ChildrenWrapper>
        {onSubmit && (
          <ButtonSection>
            <CloseButton onClick={onClose} variant="outlined">
              Close
            </CloseButton>
            <SaveButton disabled={onSaveDisabled} onClick={onSubmit}>
              Submit
            </SaveButton>
          </ButtonSection>
        )}
      </Wrapper>
    </Dialog>
  );
};
