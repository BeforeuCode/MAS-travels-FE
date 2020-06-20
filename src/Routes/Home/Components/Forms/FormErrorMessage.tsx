import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ICommonProps, IThemed } from '../../../../Types/props';

const Wrapper = styled.div<IThemed>`
  height: 7rem;
`;

const ErrorMessageBody = styled.div<IThemed>`
  padding: 2rem 2.5rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.error.light};
  color: ${({ theme }) => theme.palette.error.main};
`;

interface IProps extends ICommonProps {
  message: string;
}

export const FormErrorMessage: FC<IProps> = ({ message, className }) => {
  return (
    <Wrapper className={className}>
      {message && (
        <ErrorMessageBody>
          <span>{message}</span>
        </ErrorMessageBody>
      )}
    </Wrapper>
  );
};
