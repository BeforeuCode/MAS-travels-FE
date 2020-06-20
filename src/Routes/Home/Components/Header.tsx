import styled from '@emotion/styled';
import React, { FC } from 'react';

const Wrapper = styled.div`
  width: 100%;
  height: 8rem;
  background: #ffffff;
  border-bottom: 1px solid #eaeef1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
`;
const Label = styled.div`
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 3.3rem;
  color: #000000;
  margin-left: 3rem;
`;

interface IProps {
  label?: string;
}

export const Header: FC<IProps> = ({ label }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
    </Wrapper>
  );
};
