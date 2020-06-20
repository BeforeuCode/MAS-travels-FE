import { FC, useState } from 'react';
import { CustomDialog } from '../../../../../Components/CustomDialog';
import { prepareRequiredFieldsValidation } from '../../../../../Components/Forms/utils';
import { useFormik } from 'formik';
import styled from '@emotion/styled';
import React from 'react';
import { InputSection } from '../../../../../Components/Forms/InputSection';
import { FieldErrorMessage } from '../../../../../Components/Forms/FieldErrorMessage';
import { IClientForm } from '../../../../../../../Types/client';

const FormWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding: 10px 30px;
  overflow: auto;
`;

const Inputs = styled.div``;

interface IProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (form: any) => Promise<any>;
}

export const AddNewClientDialog: FC<IProps> = ({ open, onClose, onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const INITIAL_VALUES: IClientForm = {
    name: '',
    lastName: '',
    phone: '',
    email: '',
  };
  const REQUIRED_FIELDS = ['name', 'lastName', 'phone', 'email'];

  const requiredFieldsValidation = prepareRequiredFieldsValidation(
    REQUIRED_FIELDS,
    'Field is required'
  );

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (form) => {
      setIsSubmitting(true);
      onSubmit(form)
        .then(() => {
          setIsSubmitting(false);
        })
        .catch((e) => {
          setIsSubmitting(false);
          console.log(e);
        });
    },
    validate: (form) => {
      return requiredFieldsValidation(form);
    },
    validateOnMount: false,
    validateOnBlur: false,
    validateOnChange: false,
  });
  return (
    <CustomDialog
      title={'Add new Client'}
      open={open}
      onClose={onClose}
      onSubmit={formik.handleSubmit}
      onSaveDisabled={isSubmitting}
    >
      <FormWrapper>
        <Inputs>
          <InputSection
            required
            title={'Name'}
            placeholder={'Client name'}
            fieldName={'name'}
            handleChange={formik.handleChange}
          />
          {formik.errors.name && (
            <FieldErrorMessage message={formik.errors.name} />
          )}
          <InputSection
            required
            title={'Last Name'}
            placeholder={'Client last name'}
            fieldName={'lastName'}
            handleChange={formik.handleChange}
          />
          {formik.errors.lastName && (
            <FieldErrorMessage message={formik.errors.lastName} />
          )}
          <InputSection
            required
            title={'Email'}
            placeholder={'Client email'}
            fieldName={'email'}
            handleChange={formik.handleChange}
          />
          {formik.errors.email && (
            <FieldErrorMessage message={formik.errors.email} />
          )}

          <InputSection
            required
            title={'Phone'}
            placeholder={'Client phone'}
            fieldName={'phone'}
            handleChange={formik.handleChange}
          />
          {formik.errors.phone && (
            <FieldErrorMessage message={formik.errors.phone} />
          )}
        </Inputs>
      </FormWrapper>
    </CustomDialog>
  );
};
