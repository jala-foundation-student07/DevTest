const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.post('/', controller.addTask); //C

router.get('/', controller.getTasks); //R

router.patch('/', controller.updateTask);

module.exports = router;