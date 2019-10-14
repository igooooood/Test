const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

let id = 0;

const generateId = () => {
  id++;
  return id;
}

const removeItem = (id, array) => {
  array.map((item, index) => {
    if (item.id === id) {
      array.splice(index, 1);
    }
  });
}

const editItem = (id, newText, array) => {
  array.map(item => {
    if (item.id === id) {
      item.text = newText;
    }
  });
}

const addItem = (text, array) => {
  array.push({
    "id": generateId(),
    "text": text
  })
}

let todos = [
  {
    "id": generateId(),
    "text": 'Create Server'
  },
  {
    "id": generateId(),
    "text": 'learn http requests'
  }
]

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.render('home')
})

app.get('/todos', (request, response) => {
  response.status(200).send(JSON.stringify(todos));
})

app.post('/todos', (request, response) => {
  if (request.body.text !== '') {
    addItem(request.body.text, todos);
    response.status(201).end();
  } else {
    console.log('text is empty');
    response.status(400).send(JSON.stringify({"message": "Text is empty"}));
  }
})

app.delete('/todos/:id', (request, response) => {
  removeItem(parseInt(request.params.id), todos)
  response.status(204).end()
})

app.put('/todos/:id', (request, response) => {
  if (request.body.text !== '') {
    editItem(parseInt(request.params.id), request.body.text, todos);
    response.status(204).end()
  } else {
    console.log('text is empty');
    response.status(400).send(JSON.stringify({"message": "Text is empty"}));
  }
})

app.listen(3000)
