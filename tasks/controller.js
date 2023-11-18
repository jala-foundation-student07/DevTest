const pool = require("../db");
const queries = require("./queries");

const addTask = (req, res) => {
  var datetime = new Date();
  const { deadline=datetime, category='', status='', description='' } = req.body;
  pool.query(queries.addTask, [deadline, category, status, description, false, datetime], (error, results) => {
    if(error) throw error;
    res.status(201).send("Task created successfully!");
  })
}

const getTasks = (req, res) => {
  pool.query(queries.getTasks, (error, results) => {
    if(error) throw error;
    res.status(200).send(results.rows);
  });
}

const updateTask = (req, res) => {
  var datetime = new Date();
  const { id, attribute, value } = req.body;
  if(!queries.updateTask(attribute)) res.status(400).send("Attribute does not exist!")
  pool.query(queries.updateTask(attribute), [value, datetime, id], (error, results) => {
    if(error) throw error;
    res.status(200).send("Task updated successfully!");
  })
}

module.exports = {
  addTask,
  getTasks,
  updateTask,
}