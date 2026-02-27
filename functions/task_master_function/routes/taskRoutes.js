const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const { taskValidation } = require('../middlewares/validation');

const router = express.Router();

// No userId in the URL anymore.
// Backend will use the logged in user from Catalyst.
router.get('/', getTasks);

router.post('/', taskValidation, createTask);

router.put('/:id', taskValidation, updateTask);

router.delete('/:id', deleteTask);

module.exports = router;
