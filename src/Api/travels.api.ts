import { ITravel, ITravelForm } from '../Types/travel';
import { travelsApi } from './api';

export const getTravels = (): Promise<ITravel[]> => {
  return travelsApi.get(`public/travel`).json();
};

export const addTravel = (form: ITravelForm): Promise<any> => {
  return travelsApi
    .post(`manager/travel`, {
      json: form,
    })
    .json();
};
