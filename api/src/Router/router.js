import { Router } from "express";
import {
	getAllCohorts,
	getAllStudents,
	getSpeCohort,
	addingCohort,
	delCohort,
	addComment,
} from "../Controller/userController.js";

const router = Router();

//Routes for User
router.get("/cohort", getAllCohorts);
router.get("/students", getAllStudents);
router.patch("/students/:id", addComment);
router.get("/cohort/:id", getSpeCohort);
router.post("/cohort", addingCohort);
router.delete("/cohort/:id", delCohort);

export default router;
