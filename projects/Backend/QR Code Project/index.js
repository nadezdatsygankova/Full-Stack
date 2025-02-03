
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
    const url = answers.URL;
    const qr_png = qrImage.image(url);
    qr_png.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
