const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  let html = `
<!DOCTYPE html>
<html>
    <head>
        <title>Une petite page HTML</title>
        <meta charset="utf-8" />
    </head>
    <body>
        <h1>Hello World !</h1>
    </body>
</html>`;
  res.send(html);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
