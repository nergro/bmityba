import axios from 'axios';
import { dummyContacts } from 'services/dummyData/dummyContacts';
import { Contacts } from 'types/contacts';

export const getContacts = async (): Promise<Contacts> => {
  const contacts = await axios.get<Contacts[]>('/contacts/all');

  return contacts.data.length > 0 ? contacts.data[0] : dummyContacts;
};
