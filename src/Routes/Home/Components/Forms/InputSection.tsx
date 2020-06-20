import React, { ChangeEvent, FC, ReactNode, useEffect, useState } from 'react';

import { CustomInput } from './CustomInput';
import { ICommonProps } from '../../../../Types/props';
import { FormSection } from './FormSection';

interface IProps extends ICommonProps {
  placeholder: string;
  fullWidth?: boolean;
  label?: string;
  title?: string;
  value?: any;
  fieldName: string;
  required?: boolean;
  rows?: number;
  rowsMax?: number;
  multiline?: boolean;
  endAdornment?: ReactNode;
  handleChange?: (
    eventOrPath: string | React.ChangeEvent<any>
  ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
}
export const InputSection: FC<IProps> = ({
  value,
  title,
  required,
  fieldName,
  placeholder,
  label,
  rows,
  rowsMax,
  multiline = false,
  endAdornment,
  fullWidth = true,
  handleChange,
  className,
}) => {
  const [inputValue, setInputValue] = useState<string>();

  useEffect(() => {
    if (value) {
      setInputValue(value);
    }
  }, [value]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    if (handleChange) {
      handleChange(event);
    }
  };

  return (
    <FormSection className={className} title={title} required={required}>
      <CustomInput
        value={inputValue}
        fullWidth={fullWidth}
        multiline={multiline}
        rows={rows}
        rowsMax={rowsMax}
        name={fieldName}
        onChange={onChange}
        label={label}
        placeholder={placeholder}
        endAdornment={endAdornment}
      />
    </FormSection>
  );
};
