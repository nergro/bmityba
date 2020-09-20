interface Benefit {
  name: string;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  benefitsTitle: string;
  benefitsDescription: string;
  benefits: Benefit[];
  price: number;
  priceDescription: string;
}
