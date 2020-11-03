import { wordsOnlyReg } from 'apiServices/common/regExp';
import axios from 'axios';
import { Service } from 'types/service';

import { ServiceDTO } from './service.dto';

export const getServices = async (): Promise<Service[]> => {
  const services = await axios.get<ServiceDTO[]>('/service/all');

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
