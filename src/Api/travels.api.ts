import { ITravel, ITravelForm } from '../Types/travel';
import { travelsApi } from './api';
import { IClient, IClientForm } from '../Types/client';

export const getTravels = (): Promise<ITravel[]> => {
  return travelsApi.get(`public/travel`).json();
};

export const getClientTravels = (clientId: number): Promise<ITravel[]> => {
  return travelsApi.get(`manager/client/travels/${clientId}`).json();
};

export const addTravel = (form: ITravelForm): Promise<any> => {
  return travelsApi.post(`manager/travel`, {
    json: form,
  });
};

export const getClients = (): Promise<IClient[]> => {
  return travelsApi.get(`manager/client`).json();
};

export const addClient = (form: IClientForm): Promise<IClient[]> => {
  return travelsApi.post(`manager/client`, { json: form }).json();
};

export const assignTravelToClient = (
  travelId: number,
  clientId: number
): Promise<any> => {
  return travelsApi.put(`manager/client/assignTravel/${clientId}/${travelId}`);
};

export const deleteTravel = (travelId: number): Promise<any> => {
  return travelsApi.delete(`manager/travel/delete/${travelId}`);
};
