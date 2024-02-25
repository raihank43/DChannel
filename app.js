const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes");
const requestIp = require('request-ip');


app.use(requestIp.mw())
app.use(express.static("public"))
app.set("view engine", "ejs");

app.use(router);

app.listen(port, () => {
  console.log(`running app on localhost:${port}....`);
});
