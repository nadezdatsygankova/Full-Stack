import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
let result;
let usertype;
let userparticipant;
let response;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://apis.scrimba.com/bored/api/activity");
    const result = response.data;
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  console.log(req.body);
  console.log('Request Type by user:'+req.body.type);
  console.log('Request participants by user:'+req.body.participants);
  usertype=req.body.type;
  userparticipant=req.body.participants;
  console.log ("Request URL to remote server: " + "https://apis.scrimba.com/bored/api/activity?type="+usertype+"&participants="+userparticipant);

  try {
    response = await axios.get("https://apis.scrimba.com/bored/api/activity?type="+usertype+"&participants="+userparticipant);
    result = response.data;
    console.log(result);
    console.log("Result error:  "+result.error);
    if (typeof result.error === 'undefined') {

      console.log("Number result from API call returned:"+ result.length);
      console.log("Result Activity: " + result.activity);
      console.log("Result type: " + result.type);
      console.log("Result participants: " + result.participants);
      console.log("Result error:"+result.error);
      res.render("index.ejs", { data: result });
    } else{

      res.render("index.ejs", {
        error: result.error
      });

    }
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
