import axios from 'axios';
import { Service } from 'types/service';

import { ServiceDTO } from './service.dto';

const wordsOnlyReg = /([A-Za-z])\w+/g;

export const getServices = async (): Promise<Service[]> => {
  const services = await axios.get<ServiceDTO[]>('/service/all');
  console.log(services.data[0].nameEN.match(wordsOnlyReg));
  return services.data.map(x => {
    const name = x.nameEN.toLocaleLowerCase().match(wordsOnlyReg);
    return {
      ...x,
      id: {
        original: x.id,
        pretty: name ? name.join('-') : x.id,
      },
    };
  });
};
