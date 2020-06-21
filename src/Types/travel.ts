export interface ITravel {
  id: number;
  title: string;
  theme: string;
  price: string;
  rate: number;
  country: string;
  city: string;
  informationCard: IInformationCard;
  conveyance: string;
}

export interface IInformationCard {
  comments: string;
  information: string;
  restrictions: string;
}

export interface ITravelForm {
  title: string;
  theme: string;
  type: string;
  price: string;
  rate: number;
  country?: string;
  conveyance?: string;
  city?: string;
  comments: string;
  information: string;
  restrictions: string;
}
