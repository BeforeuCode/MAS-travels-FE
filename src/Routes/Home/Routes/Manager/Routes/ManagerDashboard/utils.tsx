import { CellConfig } from '../../../../Components/CustomTable';
import { ITravel } from '../../../../../../Types/travel';
import React, { ReactElement } from 'react';
import { EditTravelInformationButton } from './AddTravelInformationButton';

export const createTravelsTableConfig = (
  openDialog: (travelId: number) => void
): CellConfig<ITravel>[] => {
  return [
    {
      name: 'Travel ID',
      propKey: 'id',
    },
    {
      name: 'Title',
      propKey: 'title',
    },
    {
      name: 'Theme',
      propKey: 'theme',
    },
    {
      name: 'Price',
      propKey: 'price',
    },
    {
      name: 'Rate',
      propKey: 'rate',
    },
    {
      name: 'Country',
      propKey: 'country',
    },
    {
      name: 'Conveyance',
      propKey: 'conveyance',
    },
    {
      name: 'City',
      propKey: 'city',
    },
    {
      name: '',
      renderCell(values: ITravel): ReactElement {
        return (
          <EditTravelInformationButton
            travelId={values.id}
            onEditTravelInformationDialog={openDialog}
          />
        );
      },
    },
  ];
};
