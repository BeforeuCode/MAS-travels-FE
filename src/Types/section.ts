import * as React from 'react';

export interface ISectionProps {
  title: string;
  tooltip?: string;
  value?: any;
  setValue: (field: string, value: any, shouldValidate?: boolean) => void;
  fieldName: string;
  required?: boolean;
  handleChange?: (
    eventOrPath: string | React.ChangeEvent<any>
  ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
}
