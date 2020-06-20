import { IThemed } from '../../../Types/props';
import styled from '@emotion/styled';
import { useLocation, useHistory } from 'react-router-dom';
import React, { FC } from 'react';
import { MenuIconButton } from './MenuIconButton';
import { LinkIcon } from './Icons/LinkIcon';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Label = styled.div<IThemed>`
  margin: ${({ theme }) => theme.spacing(4, 2, 0, 2)};
  color: #61657e;
`;

interface IProps {
  isExtended: boolean;
}

export const Campaigns: FC<IProps> = ({ isExtended }) => {
  const location = useLocation();
  const history = useHistory();
  const isActive = (path: string): boolean => location.pathname.includes(path);
  return (
    <Wrapper>
      {isExtended ? (
        <Label>Management</Label>
      ) : (
        <Label style={{ height: '1.4rem' }} />
      )}
      <MenuIconButton
        isExtended={isExtended}
        isFocused={isActive('manager')}
        label={'Manager'}
        onClick={() => {
          history.push('/home/manager');
        }}
      >
        <LinkIcon isFocused={isActive('manager')} />
      </MenuIconButton>
      <MenuIconButton
        isExtended={isExtended}
        isFocused={isActive('admin')}
        label={'Admin'}
        onClick={() => {
          history.push('/home/admin');
        }}
      >
        <LinkIcon isFocused={isActive('admin')} />
      </MenuIconButton>
    </Wrapper>
  );
};
