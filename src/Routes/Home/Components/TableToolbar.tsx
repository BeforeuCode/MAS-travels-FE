import React, { FC } from 'react';
import { createStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface ITableToolbarProps {
  label: string;
}

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight: {},
    title: {
      fontFamily: 'Rubik, sans-serif',
      fontSize: '1.6rem',
      fontWeight: 500,
      color: '#1b1b1b',
      marginRight: '2rem',
      padding: '1rem',
    },
  })
);

export const TableToolbar: FC<ITableToolbarProps> = ({ label, children }) => {
  const classes = useToolbarStyles();
  return (
    <Toolbar className={classes.root}>
      <Typography className={classes.title} variant="h6" component="div">
        {label}
      </Typography>
      {children}
    </Toolbar>
  );
};
