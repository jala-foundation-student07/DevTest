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
  const { sortDeadline=false, filterCategory='', filterStatus=false } = req.body;
  pool.query(queries.getTasks, (error, results) => {
    if(error) throw error;
    var result = results.rows;
    //Sort by deadline
    if(sortDeadline){
      result.sort(function (a,b){
        if(a.deadline>b.deadline) return 1;
        if(a.deadline<b.deadline) return -1;
        return 0;
      });
    }
    //Filter by category
    if(filterCategory){
      result = result.filter(function (value){
        if(value.category === filterCategory) return true;
        return false;
      });
    }
    //Filter by status
    if(filterStatus){
      result = result.filter(function (value){
        if(value.status === filterStatus) return true;
        return false;
      });
    }
    res.status(200).send(result);
  });
}

const getTaskByID = (req, res) => {
  const id = req.params.id;
  pool.query(queries.getTaskByID, [id], (error, results) => {
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

const deleteTask = (req, res) => {
  var datetime = new Date();
  const { id } = req.body;
  pool.query(queries.deleteTask, [datetime, id], (error, results) => {
    if(error) throw error;
    res.status(200).send("Task deleted successfully!");
  })
}

const markAsComplete = (req, res) => {
  var datetime = new Date();
  const { id } = req.body;
  if((typeof id) === "number"){
    pool.query(queries.markAsComplete, [datetime, id], (error, results) => {
      if(error) throw error;
      res.status(200).send("Task marked as completed!");
    })
  }
  else{
    for(var i=0; i<id.length; i++){
      pool.query(queries.markAsComplete, [datetime, id[i]], (error, results) => {
        if(error) throw error;
        console.log(`Task with ID: ${id[i]} marked as completed!`);
      })
    }
    res.status(200).send("All tasks marked as completed!");
  }
}

module.exports = {
  addTask,
  getTasks,
  getTaskByID,
  updateTask,
  markAsComplete,
  deleteTask,
}