
import express from 'express';
const app = express();
const port = 3000;

// we receive a GET request to the root URL
app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact</h1>');
  });

app.post('/register', (req, res) => {
  res.sendStatus(201);
}
);

app.put('/user/nadia', (req, res) => {
  res.sendStatus(200);
});

app.delete('/user/nadia', (req, res) => {
  res.sendStatus(200);
}
);

app.patch('/user/nadia', (req, res) => {
  res.sendStatus(200);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});