import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { TravelCard } from './TravelCard';
import { ITravel } from '../../../../../../Types/travel';
import { getTravels } from '../../../../../../Api/travels.api';

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

export const TravelsBoard: FC = () => {
  const [travels, setTravels] = useState<ITravel[]>();
  useEffect(() => {
    getTravels().then((travels) => {
      setTravels(travels);
    });
    // eslint-disable-next-line
  }, []);
  return (
    <Wrapper>
      {travels &&
        travels.map((travel, index) => (
          <TravelCard key={index} travel={travel} />
        ))}
    </Wrapper>
  );
};
