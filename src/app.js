const express = require("express");
require("dotenv").config();

const { router } = require("./routes/users");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/users", router);

app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});
