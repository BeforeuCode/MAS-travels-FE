import { IPerson } from './person';

export interface IEmployee extends IPerson {
  id: number;
  type: string;
  salary: number;
  workAmount: number;
  employment: string;
  contract: string;
  employeeRanking: number;
  bonus: number;
  languages: string[];
}

export interface IEmployeeForm {
  type: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  salary: number;
  workAmount: number;
  employment: string;
  contract: string;
  employeeRanking: number;
  bonus: number;
  languages: string[];
}
