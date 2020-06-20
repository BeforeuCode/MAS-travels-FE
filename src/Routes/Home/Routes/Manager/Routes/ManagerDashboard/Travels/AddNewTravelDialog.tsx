import { FC, useState } from 'react';
import { CustomDialog } from '../../../../../Components/CustomDialog';
import { prepareRequiredFieldsValidation } from '../../../../../Components/Forms/utils';
import { useFormik } from 'formik';
import styled from '@emotion/styled';
import React from 'react';
import { InputSection } from '../../../../../Components/Forms/InputSection';
import { ITravelForm } from '../../../../../../../Types/travel';
import { SelectSection } from '../../../../../Components/Forms/SelectSection';
import { FieldErrorMessage } from '../../../../../Components/Forms/FieldErrorMessage';

const FormWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding: 10px 30px;
  overflow: auto;
`;

const Inputs = styled.div``;

const StyledInputSection = styled(InputSection)`
  && {
    padding-bottom: 0;
  }
`;

interface IProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (form: any) => Promise<any>;
}

export const AddNewTravelDialog: FC<IProps> = ({ open, onClose, onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const INITIAL_VALUES: ITravelForm = {
    title: '',
    theme: '',
    type: '',
    price: '',
    rate: 0,
    country: '',
    conveyance: '',
    city: '',
  };
  const REQUIRED_FIELDS = ['title', 'theme', 'type', 'price', 'rate'];

  const requiredFieldsValidation = prepareRequiredFieldsValidation(
    REQUIRED_FIELDS,
    'Field is required'
  );

  const rateOptions = [
    {
      id: '1',
      name: '⭐',
    },
    {
      id: '2',
      name: '⭐⭐ ',
    },
    {
      id: '3',
      name: '⭐⭐⭐ ',
    },
    {
      id: '4',
      name: '⭐⭐⭐⭐ ',
    },
    {
      id: '5',
      name: '⭐⭐⭐⭐⭐ ',
    },
  ];

  const themeOptions = [
    {
      id: 'SIGHTSEEING',
      name: 'Sightseeing',
    },
    {
      id: 'ACTIVITY',
      name: 'Activity',
    },
    {
      id: 'RECREATION',
      name: 'Recreation',
    },
  ];

  const typeOptions = [
    {
      id: 'ABROAD',
      name: 'Abroad',
    },
    {
      id: 'DOMESTIC',
      name: 'Domestic',
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
      if (form.price) {
        const re = /^[0-9\b]+$/;
        if (!re.test(form.price)) {
          errors.price = 'Price needs to be number';
        }
      }
      if (form.type === 'ABROAD') {
        if (!form.country) {
          errors.country = 'Field is required';
        }
        if (!form.conveyance) {
          errors.conveyance = 'Field is required';
        }
      }
      if (form.type === 'DOMESTIC') {
        if (!form.city) {
          errors.city = 'Field is required';
        }
      }
      return errors;
    },
    validateOnMount: false,
    validateOnBlur: false,
    validateOnChange: false,
  });
  return (
    <CustomDialog
      title={'Add new travel'}
      open={open}
      onClose={onClose}
      onSubmit={formik.handleSubmit}
      onSaveDisabled={isSubmitting}
    >
      <FormWrapper>
        <Inputs>
          <InputSection
            required
            title={'Title'}
            placeholder={'Travel title'}
            fieldName={'title'}
            handleChange={formik.handleChange}
          />
          {formik.errors.title && (
            <FieldErrorMessage message={formik.errors.title} />
          )}
          <SelectSection
            selectConfig={themeOptions}
            required
            title={'Theme'}
            placeholder={'Theme'}
            fieldName={'theme'}
            setValue={formik.setFieldValue}
          />
          {formik.errors.theme && (
            <FieldErrorMessage message={formik.errors.theme} />
          )}
          <SelectSection
            selectConfig={rateOptions}
            required
            title={'Rate'}
            placeholder={'Rate'}
            fieldName={'rate'}
            setValue={formik.setFieldValue}
          />
          {formik.errors.rate && (
            <FieldErrorMessage message={formik.errors.rate} />
          )}
          <InputSection
            required
            title={'Price'}
            placeholder={'Travel title'}
            fieldName={'price'}
            handleChange={formik.handleChange}
          />
          {formik.errors.price && (
            <FieldErrorMessage message={formik.errors.price} />
          )}
          <SelectSection
            selectConfig={typeOptions}
            required
            title={'Type'}
            placeholder={'Type'}
            fieldName={'type'}
            setValue={formik.setFieldValue}
          />
          {formik.errors.type && (
            <FieldErrorMessage message={formik.errors.type} />
          )}
          {formik.values.type === 'DOMESTIC' && (
            <>
              <InputSection
                required
                title={'City'}
                placeholder={'City'}
                fieldName={'city'}
                handleChange={formik.handleChange}
              />
              {formik.errors.city && (
                <FieldErrorMessage message={formik.errors.city} />
              )}
            </>
          )}
          {formik.values.type === 'ABROAD' && (
            <>
              <InputSection
                required
                title={'Country'}
                placeholder={'Country'}
                fieldName={'country'}
                handleChange={formik.handleChange}
              />
              {formik.errors.country && (
                <FieldErrorMessage message={formik.errors.country} />
              )}
              <InputSection
                required
                title={'Conveyance'}
                placeholder={'Conveyance'}
                fieldName={'conveyance'}
                handleChange={formik.handleChange}
              />
              {formik.errors.conveyance && (
                <FieldErrorMessage message={formik.errors.conveyance} />
              )}
            </>
          )}
          <StyledInputSection
            multiline
            rows={5}
            rowsMax={10}
            title={'Information'}
            placeholder={'Information'}
            fieldName={'information'}
            handleChange={formik.handleChange}
          />
          <StyledInputSection
            multiline
            rows={5}
            rowsMax={10}
            title={'Restrictions'}
            placeholder={'Restrictions'}
            fieldName={'restrictions'}
            handleChange={formik.handleChange}
          />
          <StyledInputSection
            multiline
            rows={5}
            rowsMax={10}
            title={'Comments'}
            placeholder={'Comments'}
            fieldName={'comments'}
            handleChange={formik.handleChange}
          />
        </Inputs>
      </FormWrapper>
    </CustomDialog>
  );
};
