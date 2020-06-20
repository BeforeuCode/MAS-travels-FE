import { IPerson } from './person';

// eslint-disable-next-line
export interface IClient extends IPerson {}

export interface IClientForm {
  name: string;
  lastName: string;
  email: string;
  phone: string;
}
