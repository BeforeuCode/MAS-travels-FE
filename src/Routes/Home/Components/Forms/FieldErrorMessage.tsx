import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as XCircle } from './icons/x-circle.svg';
import { ICommonProps, IThemed } from '../../../../Types/props';

const ErrorMessageBody = styled.div<IThemed>`
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 1rem 0;
  color: ${({ theme }) => theme.palette.error.main};
`;

const Message = styled.div<IThemed>`
  margin-left: 1rem;
  line-height: 2rem;
`;

interface IProps extends ICommonProps {
  message?: string | string[];
}

export const FieldErrorMessage: FC<IProps> = ({ message, className }) => {
  return (
    <ErrorMessageBody className={className}>
      {message && <XCircle />}
      <Message>{message}</Message>
    </ErrorMessageBody>
  );
};
