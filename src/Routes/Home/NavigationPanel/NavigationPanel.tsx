import React, { FC, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { PanelSwitcher } from './PanelSwitcher/PanelSwitcher';
import { Divider, Drawer } from '@material-ui/core';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { Logo } from './Logo/Logo';
import { MenuIconButton } from './MenuIconButton';
import { DashboardIcon } from './Icons/DashboardIcon';

const navigationPanelStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: '23rem',
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    open: {
      background: theme.palette.primary.dark,
      width: '23rem',
      border: 'none',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: 'hidden',
    },
    close: {
      background: theme.palette.primary.dark,
      border: 'none',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: '8.5rem',
    },
  })
);

const Wrapper = styled.div`
  display: flex;
`;

const MenuDivider = styled(Divider)`
  && {
    background-color: #292f51;
    height: 2px;
  }
`;

export const NavigationPanel: FC = () => {
  const classes = navigationPanelStyles();

  const [isOpen, setIsOpen] = useState<boolean>(true);
  const stateClasses = isOpen ? `${classes.open}` : `${classes.close}`;
  const location = useLocation();
  const isActive = (path: string): boolean => location.pathname === path;

  const drawerClasses = {
    root: `${classes.drawer} ${stateClasses}`,
    paper: stateClasses,
  };

  const handleDrawerOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <Drawer variant="permanent" role="drawer" classes={drawerClasses}>
        <Logo isExtended={isOpen} />
        <MenuDivider />
        <MenuIconButton
          isFocused={isActive('/home/travels')}
          isExtended={isOpen}
          label={'Travels'}
          linkPath={'/home/travels'}
        >
          <DashboardIcon isFocused={isActive('/home/travels')} />
        </MenuIconButton>
      </Drawer>
      <PanelSwitcher isExtended={isOpen} onClick={handleDrawerOpen} />
    </Wrapper>
  );
};
