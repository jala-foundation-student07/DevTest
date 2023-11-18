const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.post('/', controller.addTask); //C

router.get('/', controller.getTasks); //R

router.get('/:id', controller.getTaskByID); //R

router.patch('/', controller.updateTask); //U

router.patch('/complete', controller.markAsComplete); //U

router.delete('/', controller.deleteTask); //D

module.exports = router;