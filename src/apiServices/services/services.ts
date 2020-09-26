import axios from 'axios';
import { Service } from 'types/service';

export const getServices = async (): Promise<Service[]> => {
  const services = await axios.get<Service[]>('/service/all');
  console.log(services);
  return services.data;
};
