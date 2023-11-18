const addTask = "INSERT INTO tasks(DEADLINE, CATEGORY, STATUS, DESCRIPTION, DELETE_STATUS, LAST_UPDATE) VALUES($1, $2, $3, $4, $5, $6)"; //C
const getTasks = "SELECT * FROM tasks;"; //R
function updateTask(field){
  switch(field){
    case 'deadline':
      return "UPDATE tasks SET deadline = $1, last_update = $2 WHERE id = $3;"; //U
      break;
    case 'category':
      return "UPDATE tasks SET category = $1, last_update = $2 WHERE id = $3;"; //U
      break;
    case 'status':
      return "UPDATE tasks SET status = $1, last_update = $2 WHERE id = $3;"; //U
      break;
    case 'description':
      return "UPDATE tasks SET description = $1, last_update = $2 WHERE id = $3;"; //U
      break;
    default:
      return false;
  }
}
const deleteTask = "DELETE FROM tasks WHERE id = $1"; //D

module.exports = {
  addTask,
  getTasks,
  updateTask,
  deleteTask,
}