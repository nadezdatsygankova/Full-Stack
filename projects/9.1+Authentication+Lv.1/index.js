import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "tgt",
  port: 5432,
});
db.connect();

let currentUserId = null;


app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  try {
  const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [email]);
  if (checkResult.rows.length > 0) {
    res.send("Email already exists. Try logging in.");
    return;
  }
  else{

      await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, password]);
      res.render("secrets.ejs");
    }

  } catch (err) {
      console.log(err);
    }
  }
);

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  try {
    const result = await db.query(
      "SELECT * FROM users WHERE email = $1",
      [email]);
    if (result.rows.length > 0) {
      currentUserId = result.rows[0].id;
      if (result.rows[0].password === password) {
        res.render("secrets.ejs");
        return;
      }
      else {
        res.send("Wrong password");
        return;
      }
    }
    else {
      res.send("User not found");
      return;
    }

  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
