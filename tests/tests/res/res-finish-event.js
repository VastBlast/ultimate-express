// res must support finish event

const express = require("express");

const app = express();

app.post("/test", (req, res) => {
  res
    .on("finish", () => console.log("res finish"));

  res.send("hello");
});

app.listen(13333, async () => {
  console.log("Server is running on port 13333");

  const data = await fetch("http://localhost:13333/test", {method: 'POST'}).then(res => res.text());
  console.log(data);

  process.exit(0);
});