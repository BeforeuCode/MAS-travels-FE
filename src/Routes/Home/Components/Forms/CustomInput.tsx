import React, { ChangeEvent, FC } from 'react';
import { InputAdornment, TextField } from '@material-ui/core';
import styled from '@emotion/styled';
import { ICommonProps, IThemed } from '../../../../Types/props';

const Input = styled(TextField)<IThemed>`
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 4px;
`;

export interface IInputProps extends ICommonProps {
  value?: unknown;
  defaultValue?: string;
  variant?: 'standard' | 'outlined' | 'filled';
  placeholder?: string;
  label?: string;
  type?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  endAdornment?: any;
  multiline?: boolean;
  rows?: string | number;
  rowsMax?: string | number;
  fullWidth?: boolean;
  margin?: 'dense' | 'none';
}
export const CustomInput: FC<IInputProps> = ({
  value,
  defaultValue,
  placeholder,
  label,
  className,
  type,
  name,
  required = false,
  onChange,
  disabled,
  endAdornment,
  multiline,
  rows,
  rowsMax,
  fullWidth = true,
  margin,
}) => {
  return (
    <Input
      margin={margin}
      disabled={disabled}
      value={value}
      className={className}
      placeholder={placeholder}
      label={label}
      variant={'outlined'}
      type={type}
      defaultValue={defaultValue}
      name={name}
      required={required}
      onChange={onChange}
      fullWidth={fullWidth}
      multiline={multiline}
      rows={rows}
      rowsMax={rowsMax}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        endAdornment: endAdornment && (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ),
      }}
    />
  );
};
