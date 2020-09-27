import { getLocale } from 'services/localStorage';
import { Contacts } from 'types/contacts';

export const dummyContacts: Contacts = {
  phone: getLocale() === 'lt' ? 'Kraunasi...' : 'Loading...',
  email: getLocale() === 'lt' ? 'Kraunasi...' : 'Loading...',
  locationLT: 'Kraunasi...',
  locationEN: 'Loading...',
};
