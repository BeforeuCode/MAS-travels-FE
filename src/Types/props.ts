import { ReactNode } from 'react';
import { Theme } from '@material-ui/core';

export interface ICommonProps {
  className?: string;
  children?: ReactNode | ReactNode[];
}

export interface IThemed {
  theme: Theme;
}
