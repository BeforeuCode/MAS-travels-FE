import React, { FC } from 'react';
import styled from '@emotion/styled';
import LogoBig from '../../../../Styles/Images/LogoBig.png';
import { IThemed } from '../../../../Types/props';

const LogoContainer = styled.div<IThemed>`
  margin: ${({ theme }) => theme.spacing(3.5, 4.5)};
  height: 4rem;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.palette.primary.light};
`;

const LogoImage = styled.img<IThemed>`
  margin-right: ${({ theme }) => theme.spacing(1)};
  width: 12.5rem;
  height: 3.8rem;
`;

export const FullLogo: FC = () => {
  return (
    <LogoContainer>
      <LogoImage src={LogoBig} />
    </LogoContainer>
  );
};
