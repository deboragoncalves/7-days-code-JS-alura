import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey("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")

const messageNewsletter = {
  to: 'deboracristinapereira123@gmail.com', 
  from: 'testeEmail@testeEmail.com',
  subject: 'Newsletter Casa Verde',
  text: 'Olá, Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas. Até logo!',
}

export const sendEmailNewsletter = () => {
    sendgrid.send(messageNewsletter)
    .then(() => {
        console.log('Email enviado')
    })
    .catch((error) => {
        console.error(error);
    });
}