import { Router } from "express";
import {
  getAllCohorts,
  getAllStudents,
  getSpeCohort,
  addingCohort,
  delCohort,
  addComment,
  addingStudent,
  getCohortComments,
  delStudent,
  delComment,
} from "../Controller/userController.js";

const router = Router();

//Routes for User
// get all cohorts
router.get("/cohort", getAllCohorts);
// get all students
router.get("/students", getAllStudents);
// get specific cohort with all enrolled students
router.get("/cohort/:id", getSpeCohort);
// add comment to a specific student
router.patch("/students/:id", addComment);
// delete a specific cohort and its enrolled students
router.delete("/cohort/:id", delCohort);
// create a new cohort
router.post("/cohort", addingCohort);
// create a new student
router.post("/students", addingStudent);
// get all comments from cohort
router.get("/comments/:id", getCohortComments);
// delete student from cohort
router.delete("/students/:id", delStudent);
// delete comment
router.delete("/comment/:id", delComment);

// WIP

export default router;
