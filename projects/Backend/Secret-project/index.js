
import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";
import  bodyParser  from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req, res, next) {
  if (req.body.password === 'ILoveProgramming') {
    next();
  } else {
    res.status(401).send('Incorrect password');
  }
}


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(checkPassword);

app.post('/check', (req, res) => {
  res.sendFile(__dirname + "/public/secret.html");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});