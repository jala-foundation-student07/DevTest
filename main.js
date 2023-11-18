const express = require("express");
const app = express();
const port = 3000;
tasksRoutes = require("./tasks/routes");

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send("Hello World!");
});

app.use('/api/v1/tasks', tasksRoutes);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
})