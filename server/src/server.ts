import express from 'express';

const app = express();

const users = [
  'Isaac',
  'Carlos',
  'Joaquim'
];

app.get('/users', (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = search ? users.filter(user => users.includes(search)) : users;

  response.json(users);
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  response.json(user);
});

app.post('/users', (request, response) => {
  const user = {
    name: 'Isaac',
    mail: 'isaac@gmail.com.br'
  }

  return response.json(user);
});


app.listen(3333)