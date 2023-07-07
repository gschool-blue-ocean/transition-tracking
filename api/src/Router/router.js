import { Router } from "express";
import {
  getAllCohort,
  getSpeCohort,
  addTasks,
  delTask,
} from "../Controller/userController.js";

const router = Router();

//Routes for User
router.get("/cohort", getAllCohort);
router.get("/cohort/:cohort_name", getSpeCohort);
router.post("tasks", addTasks);
router.delete("/tasks/:id", delTask);

export default router;
