import axios from 'axios';
import { Mail } from 'types/mail';

export const sendMail = async (
  name: string,
  email: string,
  message: string,
  subject?: string
): Promise<void> => {
  await axios.post<Mail>('/mail', { name, email, message, subject });
};
