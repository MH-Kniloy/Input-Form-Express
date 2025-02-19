const express = require("express");
const app = express();
const cors = require("cors")
const port = 3000;

app.use(cors())

app.use(express.json())

const info = []

app.get("/", (req, res) => {
  res.send(info);
});

app.post("/info", (req, res)=>{
  info.push(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
