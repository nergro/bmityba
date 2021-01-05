import axios from 'axios';
import { Mail } from 'types/mail';

export const sendMail = async (
  name: string,
  email: string,
  message: string,
  subject?: string
): Promise<void> => {
  await axios.post<Mail>('/mail', { name, email, message, subject });

  // await fetch("https://balanced-diet.herokuapp.com/api/mail", {
  //   method: "POST", // or 'PUT'
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({ name, email, message, subject })
  // });
};
