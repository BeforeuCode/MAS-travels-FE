import { FC, useState } from 'react';
import { CustomDialog } from '../../../../../Components/CustomDialog';
import { prepareRequiredFieldsValidation } from '../../../../../Components/Forms/utils';
import { useFormik } from 'formik';
import styled from '@emotion/styled';
import React from 'react';
import { InputSection } from '../../../../../Components/Forms/InputSection';
import { SelectSection } from '../../../../../Components/Forms/SelectSection';
import { FieldErrorMessage } from '../../../../../Components/Forms/FieldErrorMessage';
import { IEmployeeForm } from '../../../../../../../Types/employee';

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

export const AddNewEmployeeDialog: FC<IProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const INITIAL_VALUES: IEmployeeForm = {
    type: '',
    name: '',
    lastName: '',
    email: '',
    phone: '',
    salary: 0,
    workAmount: 0,
    employment: '',
    contract: '',
    bonus: 0,
    employeeRanking: 0,
    languages: [],
  };
  const REQUIRED_FIELDS = [
    'type',
    'name',
    'lastName',
    'email',
    'phone',
    'salary',
    'workAmount',
    'employment',
  ];

  const requiredFieldsValidation = prepareRequiredFieldsValidation(
    REQUIRED_FIELDS,
    'Field is required'
  );

  const typeOptions = [
    {
      id: 'MANAGER',
      name: 'Manager',
    },
    {
      id: 'CUSTOMER_SERVICE',
      name: 'Customer Service ',
    },
    {
      id: 'GUIDE',
      name: 'Guide',
    },
  ];

  const employmentOptions = [
    {
      id: 'FULL',
      name: 'Full time',
    },
    {
      id: 'PART',
      name: 'Part time',
    },
  ];

  const contractOptions = [
    {
      id: 'B2B',
      name: 'B2B',
    },
    {
      id: 'CONTRACT',
      name: 'Contract',
    },
  ];

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
      const errors = requiredFieldsValidation(form);
      return errors;
    },
    validateOnMount: false,
    validateOnBlur: false,
    validateOnChange: false,
  });
  return (
    <CustomDialog
      title={'Add new Employee'}
      open={open}
      onClose={onClose}
      onSubmit={formik.handleSubmit}
      onSaveDisabled={isSubmitting}
    >
      <FormWrapper>
        <Inputs>
          <SelectSection
            selectConfig={typeOptions}
            required
            title={'Employee type'}
            placeholder={'Employee type'}
            fieldName={'type'}
            setValue={formik.setFieldValue}
          />
          {formik.errors.type && (
            <FieldErrorMessage message={formik.errors.type} />
          )}
          <InputSection
            required
            title={'Name'}
            placeholder={'Employee name'}
            fieldName={'name'}
            handleChange={formik.handleChange}
          />
          {formik.errors.name && (
            <FieldErrorMessage message={formik.errors.name} />
          )}
          <InputSection
            required
            title={'Last Name'}
            placeholder={'Employee last name'}
            fieldName={'lastName'}
            handleChange={formik.handleChange}
          />
          {formik.errors.lastName && (
            <FieldErrorMessage message={formik.errors.lastName} />
          )}
          <InputSection
            required
            title={'Email'}
            placeholder={'Employee email'}
            fieldName={'email'}
            handleChange={formik.handleChange}
          />
          {formik.errors.email && (
            <FieldErrorMessage message={formik.errors.email} />
          )}
          <InputSection
            required
            title={'Phone'}
            placeholder={'Employee phone'}
            fieldName={'phone'}
            handleChange={formik.handleChange}
          />
          {formik.errors.phone && (
            <FieldErrorMessage message={formik.errors.phone} />
          )}
          <InputSection
            required
            title={'Work amount'}
            placeholder={'Work Amount'}
            fieldName={'workAmount'}
            handleChange={formik.handleChange}
          />
          {formik.errors.workAmount && (
            <FieldErrorMessage message={formik.errors.workAmount} />
          )}
          <InputSection
            required
            title={'Salary'}
            placeholder={'Employee Salary'}
            fieldName={'salary'}
            handleChange={formik.handleChange}
          />
          {formik.errors.salary && (
            <FieldErrorMessage message={formik.errors.salary} />
          )}
          <SelectSection
            selectConfig={employmentOptions}
            required
            title={'Employment type'}
            placeholder={'Employment type'}
            fieldName={'employment'}
            setValue={formik.setFieldValue}
          />
          {formik.errors.employment && (
            <FieldErrorMessage message={formik.errors.employment} />
          )}
          {formik.values.employment === 'FULL' && (
            <>
              <SelectSection
                selectConfig={contractOptions}
                required
                title={'Employment contract'}
                placeholder={'Employment contract'}
                fieldName={'contract'}
                setValue={formik.setFieldValue}
              />
              {formik.errors.contract && (
                <FieldErrorMessage message={formik.errors.contract} />
              )}
            </>
          )}
          {formik.values.type === 'MANAGER' && (
            <>
              <InputSection
                required
                title={'Manager bonus'}
                placeholder={'Manager bonus'}
                fieldName={'bonus'}
                handleChange={formik.handleChange}
              />
              {formik.errors.bonus && (
                <FieldErrorMessage message={formik.errors.bonus} />
              )}
            </>
          )}
          {formik.values.type === 'CUSTOMER_SERVICE' && (
            <>
              <InputSection
                required
                title={'Customer Service ranking'}
                placeholder={'Customer Service ranking'}
                fieldName={'employeeRanking'}
                handleChange={formik.handleChange}
              />
              {formik.errors.employeeRanking && (
                <FieldErrorMessage message={formik.errors.employeeRanking} />
              )}
            </>
          )}
          {formik.values.type === 'GUIDE' && (
            <>
              <InputSection
                required
                title={'Guide languages'}
                placeholder={'Guide languages'}
                fieldName={'languages'}
                handleChange={formik.handleChange}
              />
              {formik.errors.languages && (
                <FieldErrorMessage message={formik.errors.languages} />
              )}
            </>
          )}
        </Inputs>
      </FormWrapper>
    </CustomDialog>
  );
};
