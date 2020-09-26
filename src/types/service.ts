import { Benefit } from 'types/benefit';
import { Image } from 'types/image';
export interface Service {
  id: string;
  image: Image;
  nameLT: string;
  nameEN: string;
  labelLT?: string;
  labelEN?: string;
  shortDescriptionLT: string;
  shortDescriptionEN: string;
  descriptionLT: string;
  descriptionEN: string;
  price: number;
  priceDescriptionLT: string;
  priceDescriptionEN: string;
  benefitsTitleLT: string;
  benefitsTitleEN: string;
  benefitsDescriptionLT: string;
  benefitsDescriptionEN: string;
  benefits: Benefit[];
}

export type Services = Record<string, Service>;
