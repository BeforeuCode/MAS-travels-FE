import React, { FC } from 'react';
import { createStyles, IconButton, makeStyles, Theme } from '@material-ui/core';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { ICommonProps, IThemed } from '../../../Types/props';

export const buttonStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:hover': {
        background: '#202958',
      },
    },
    expanded: {
      borderRadius: '5px',
      margin: '1rem 2rem 0 2rem;',
      height: '4.5rem',
      display: 'flex',
      alignItems: 'center',
      padding: 0,
      justifyContent: 'start',
    },
    rolled: {
      borderRadius: '5px',
      margin: '1rem 2rem 0 2rem',
      height: '4.5rem',
      width: '4.5rem',
      display: 'flex',
      alignItems: 'center',
      padding: 0,
      justifyContent: 'start',
    },
    active: {
      background: theme.palette.primary.main,
      padding: '0.5rem',
      '&:hover': {
        background: theme.palette.primary.main,
      },
    },
  })
);

export const iconStyles = makeStyles(() =>
  createStyles({
    expanded: {
      marginLeft: '1.5rem',
      width: '2rem',
      height: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rolled: {
      margin: 'auto',
      width: '2rem',
      height: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

const Children = styled.div<IThemed>`
  margin-left: ${({ theme }) => theme.spacing(1.5)};
`;

const Label = styled.div<IThemed>`
  color: ${({ theme }) => theme.palette.background.paper};
  font-size: 1.4rem;
  font-family: Work Sans, sans-serif;
  margin-left: ${({ theme }) => theme.spacing(2.5)};
`;

interface IProps extends ICommonProps {
  isExtended?: boolean;
  label?: string;
  onClick?: () => void;
  isFocused?: boolean;
  linkPath?: string;
}

export const MenuIconButton: FC<IProps> = ({
  label,
  isExtended,
  isFocused,
  onClick,
  linkPath,
  children,
  className,
}) => {
  const buttonClasses = buttonStyles();
  const iconClasses = iconStyles();
  const history = useHistory();
  const redirectTo = (path: string) => {
    history.push(path);
  };
  const getButtonClass = () => {
    let classes = '';
    if (isFocused) {
      classes = `${buttonClasses.active} `;
    }
    const base = isExtended
      ? classes + `${buttonClasses.expanded}`
      : classes + `${buttonClasses.rolled}`;
    return `${base} ${className}`;
  };

  return (
    <IconButton
      onClick={linkPath ? () => redirectTo(linkPath) : onClick}
      className={getButtonClass()}
      classes={{ root: buttonClasses.root }}
    >
      <Children
        className={isExtended ? iconClasses.expanded : iconClasses.rolled}
      >
        {children}
      </Children>
      {isExtended && <Label>{label}</Label>}
    </IconButton>
  );
};
