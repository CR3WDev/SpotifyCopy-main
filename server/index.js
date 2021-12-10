const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require('./database/index')
const routes = require('./routes/index')

app.use(express.json());
app.use(cors());
app.use('/', routes)

app.listen(3002, async() => {
  await sequelize.sync({ force: true })
  console.log("rodando na porta 3002");
});