import { Router } from "express";
import { 
    getAllTasks,
    getSpeTask,
    addTasks,
    delTask,
    } from "../Controller/userController.js";

const router = Router();

//Routes for User
router.get('/tasks', getAllTasks);
router.get('/tasks/:id', getSpeTask);
router.post('tasks', addTasks);
router.delete('/tasks/:id', delTask);


export default router;