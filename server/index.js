const express = require("express");
const app = express();
const cors = require("cors")
const port = 3000;

app.use(cors())

const info = [
    {
        name:"whasssssuuup"
    }
]

app.get("/", (req, res) => {
  res.send(info);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
