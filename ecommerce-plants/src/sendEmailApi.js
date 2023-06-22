import { API_KEY } from './apiKey.js';
import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_pklqwo6";
const TEMPLATE_ID = "template_5053gew";

export const sendEmailNewsletter = form => {
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, API_KEY)
      .then((result) => {
      }, (error) => {
          console.log(error.text);
      });
}