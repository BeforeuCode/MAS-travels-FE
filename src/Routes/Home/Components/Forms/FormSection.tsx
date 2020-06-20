import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ICommonProps, IThemed } from '../../../../Types/props';

const RequiredPointer = styled.span<IThemed>`
  color: ${({ theme }) => theme.palette.error.main};
`;

interface IWrapper extends IThemed {
  required: boolean;
}

const Wrapper = styled.div<IWrapper>`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ required }) =>
    required ? 1 : ({ theme }) => theme.spacing(4)}};
`;

const Title = styled.div<IThemed>`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  font-size: 1.8rem;
  font-family: Rubik, sans-serif;
  margin: ${({ theme }) => theme.spacing(2, 0.5, 1, 0.5)};
`;

interface IProps extends ICommonProps {
  title?: string;
  required?: boolean;
}

export const FormSection: FC<IProps> = ({
  required = false,
  title,
  children,
  className,
}) => {
  return (
    <Wrapper className={className} required={required}>
      <Title>
        {title}
        {required && <RequiredPointer>*</RequiredPointer>}
      </Title>
      <div>{children}</div>
    </Wrapper>
  );
};
