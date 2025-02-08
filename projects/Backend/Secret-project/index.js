
import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

let userIsAuthenticated = false;


app.use(express.urlencoded({ extended: true }));

function checkPassword(req, res, next) {
  if (req.body.password === 'ILoveProgramming') {
    userIsAuthenticated = true;
  }
  next();
}


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(checkPassword);

app.post('/check', (req, res) => {
  if (userIsAuthenticated) {
  res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect('/');
  }
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});