import { FC, useEffect, useState } from 'react';
import { CustomDialog } from '../../../../../Components/CustomDialog';
import { useFormik } from 'formik';
import styled from '@emotion/styled';
import React from 'react';
import { InputSection } from '../../../../../Components/Forms/InputSection';
import { IInformationCard } from '../../../../../../../Types/travel';
import { getInformationCard } from '../../../../../../../Api/travels.api';

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
  onSubmit: (form: any, travelId: number) => Promise<any>;
  travelId: number;
}

export const EditInformationCardDialog: FC<IProps> = ({
  open,
  onClose,
  onSubmit,
  travelId,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState<IInformationCard>();

  const INITIAL_VALUES: IInformationCard = {
    information: '',
    restrictions: '',
    comments: '',
  };

  useEffect(() => {
    if (travelId) {
      getInformationCard(travelId).then(
        (v) => {
          if (v) {
            fillForm(v);
            setData(v);
          }
        },
        () => null
      );
    }
    // eslint-disable-next-line
  }, [travelId]);

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (form) => {
      setIsSubmitting(true);
      onSubmit(form, travelId)
        .then(() => {
          setIsSubmitting(false);
        })
        .catch((e) => {
          setIsSubmitting(false);
          console.log(e);
        });
    },
    enableReinitialize: true,
    validateOnMount: false,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const handleClose = () => {
    formik.setValues(INITIAL_VALUES);
    setData(undefined);
    onClose();
  };

  const fillForm = (form: any) => {
    formik.setValues({
      information: form?.information,
      restrictions: form?.restrictions,
      comments: form?.comments,
    });
  };

  useEffect(() => {
    fillForm(data);
    // eslint-disable-next-line
  }, [data]);

  return (
    <CustomDialog
      title={'Add new information card'}
      open={open}
      onClose={handleClose}
      onSubmit={formik.handleSubmit}
      onSaveDisabled={isSubmitting}
    >
      <FormWrapper>
        <Inputs>
          <StyledInputSection
            multiline
            rows={5}
            rowsMax={10}
            title={'Information'}
            placeholder={'Information'}
            fieldName={'information'}
            handleChange={formik.handleChange}
            value={formik.values.information}
          />
          <StyledInputSection
            multiline
            rows={5}
            rowsMax={10}
            title={'Restrictions'}
            placeholder={'Restrictions'}
            fieldName={'restrictions'}
            value={formik.values.restrictions}
            handleChange={formik.handleChange}
          />
          <StyledInputSection
            multiline
            rows={5}
            rowsMax={10}
            title={'Comments'}
            placeholder={'Comments'}
            fieldName={'comments'}
            value={formik.values.comments}
            handleChange={formik.handleChange}
          />
        </Inputs>
      </FormWrapper>
    </CustomDialog>
  );
};
