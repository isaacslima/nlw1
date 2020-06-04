import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');

  response.json([
    'Isaac',
    'Carlos',
    'Joaquim'
  ]);
});

app.post('/users', (request, response) => {
  const user = {
    name: 'Isaac',
    mail: 'isaac@gmail.com.br'
  }

  return response.json(user);
});


app.listen(3333)