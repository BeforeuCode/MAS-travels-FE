import React, { FC } from 'react';
import styled from '@emotion/styled';
import { IThemed } from '../../../../Types/props';
import LogoSmall from '../../../../Styles/Images/LogoSmall.png';
import { FullLogo } from './FullLogo';

const StyledLogo = styled.div`
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SmallLogo = styled.img<IThemed>`
  margin: auto;
  width: 4.5rem;
  height: 3.8rem;
`;

interface IProps {
  isExtended?: boolean;
  className?: string;
}

export const Logo: FC<IProps> = ({ isExtended = false }) => {
  const logoComponent = isExtended ? (
    <FullLogo />
  ) : (
    <SmallLogo src={LogoSmall} />
  );
  return <StyledLogo>{logoComponent}</StyledLogo>;
};
