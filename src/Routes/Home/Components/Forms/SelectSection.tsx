import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { CustomSelect } from './CustomSelect';
import { ISectionProps } from '../../../../Types/section';
import { FormSection } from './FormSection';

const StyledSelect = styled(CustomSelect)`
  && {
    width: 100%;
    background: white;
    .MuiSvgIcon-root {
      top: auto;
    }
  }
`;
interface IProps extends ISectionProps {
  placeholder: string;
  selectConfig: any[];
}

export const SelectSection: FC<IProps> = ({
  value,
  setValue,
  fieldName,
  title,
  selectConfig,
  required,
  placeholder,
}) => {
  const [selectValue, setSelectValue] = useState<string>('');

  useEffect(() => {
    setSelectValue(value);
  }, [value]);

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    const targetValue = event.target.value as string;
    setSelectValue(targetValue);
    setValue(fieldName, targetValue);
  };

  return (
    <FormSection title={title} required={required}>
      <div>
        <StyledSelect
          onChange={handleChange}
          size={'medium'}
          value={selectValue}
          options={selectConfig}
          label={placeholder}
          placeholder={true}
        />
      </div>
    </FormSection>
  );
};
