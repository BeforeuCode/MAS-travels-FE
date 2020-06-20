import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ICommonProps, IThemed } from '../../Types/props';

export const ScrollContainer = styled.div<IThemed>`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: ${({ theme }) => theme.spacing(4, 4)};
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export const HomePageWrapper: FC<ICommonProps> = ({ children, className }) => {
  return <ScrollContainer className={className}>{children}</ScrollContainer>;
};
