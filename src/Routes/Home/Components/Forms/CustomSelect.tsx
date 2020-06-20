import {
  createStyles,
  FormControl,
  InputLabel,
  InputLabelProps,
  ListItemText,
  MenuItem,
  Select,
  Theme,
} from '@material-ui/core';
import { FC } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from '@emotion/styled';

interface IProps {
  value?: any;
  onChange?: (event: React.ChangeEvent<{ value: unknown }>) => void;
  required?: boolean;
  options: any[];
  menuProps?: any;
  name?: string;
  label?: string;
  className?: string;
  size?: 'medium' | 'small';
  placeholder?: boolean;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const StyledLabel = styled(InputLabel)<
  InputLabelProps & { placeholderLabel?: boolean }
>`
  color: ${({ placeholderLabel }) =>
    placeholderLabel ? '#abb1b6' : '#1b1b1b'} !important;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    label: {
      fontSize: '1.4rem',
      '&.MuiFormLabel-filled': {
        display: 'none',
      },
    },
    checkboxChecked: {
      color: '#c0c8ce !important',
      '&:hover': {
        backgroundColor: 'rgba(105,105,105,0.1) !important',
      },
    },
    checkbox: {
      '&:hover': {
        backgroundColor: 'rgba(105,105,105,0.1)',
      },
    },
    menuItem: {
      '&.Mui-selected': {
        background: 'white',
      },
    },
  })
);

export const CustomSelect: FC<IProps> = ({
  value,
  onChange,
  required,
  options,
  size = 'small',
  label,
  className,
  placeholder = false,
}) => {
  const classes = useStyles();

  return (
    <FormControl variant="outlined" size={size} className={className}>
      <StyledLabel
        shrink={false}
        placeholderLabel={placeholder}
        id="label"
        classes={{
          root: classes.label,
        }}
      >
        {label}
      </StyledLabel>
      <Select
        labelId="label"
        value={value}
        onChange={onChange}
        required={required}
        MenuProps={MenuProps}
      >
        {options.map((option) => (
          <MenuItem
            key={option.id}
            value={option.id}
            divider={true}
            classes={{ root: classes.menuItem }}
          >
            <ListItemText primary={option.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
