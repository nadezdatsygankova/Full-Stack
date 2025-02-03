
import fs from 'fs';
import inquirer from 'inquirer';
import qrImage from 'qr-image';

inquirer
  .prompt([{
    message: "Type in your URL:",
    name: "URL"
  }
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
