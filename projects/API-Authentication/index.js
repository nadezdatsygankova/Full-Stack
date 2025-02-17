import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = "nadiard";
const yourPassword = "nadiard";
const yourAPIKey = "74b3d8d3-9994-4c50-9fe3-da59dff14188";
const yourBearerToken = "389f3fdc-b685-44a5-bfea-c5f95f3bff5a";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", (req, res) => {
  axios.get(API_URL + "random")
    .then((response) => {
      console.log(response.data);
      let dataResponse =JSON.stringify(response.data);
    res.render("index.ejs", { content: dataResponse });
  })
    .catch((error) => {
    res.status(404).send(error.message);
  })
});

app.get("/basicAuth", (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  axios.get(API_URL + "all", {
    auth: {
      username: yourUsername,
      password: yourPassword,
    },
    })
    .then((response) => {
      console.log(response.data);
      let dataResponse = JSON.stringify(response.data);
      res.render("index.ejs", { content: dataResponse });
      })
      .catch((error) => {
        res.status(404).send(error.message);
        });
});

app.get("/apiKey", (req, res) => {
  axios.get(API_URL + "filter", {
    params: {
      score: 5,
      apiKey: yourAPIKey,
    }
    })
    .then((response) => {
      console.log(response.data);
      let dataResponse = JSON.stringify(response.data);
      res.render("index.ejs", { content: dataResponse });
      }
      )
      .catch((error) => {
        res.status(404).send(error.message);
        });
});

app.get("/bearerToken", (req, res) => {
  axios.get(API_URL + "secrets/42", {
    headers: {
      Authorization: "Bearer " + yourBearerToken,
      }
      })
      .then((response) => {
        console.log(response.data);
        let dataResponse = JSON.stringify(response.data);
        res.render("index.ejs", { content: dataResponse });
        }
        )
        .catch((error) => {
          res.status(404).send(error.message);
          });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
