import { db } from "../db/database.js";
import {
  allCohorts,
  allStudents,
  speCohort,
  addCohort,
  deleteCohort,
  postComment,
  addStudent,
  cohortComments,
  deleteStudent,
} from "./queries.js";

export const getAllCohorts = async (req, res) => {
  try {
    const result = await db.query(allCohorts);
    res.status(200).send(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const result = await db.query(allStudents);
    res.status(200).send(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSpeCohort = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db.query(speCohort, [id]);
    res.send(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addComment = async (req, res) => {
  try {
    const id = req.params.id;
    const { comment } = req.body;
    const commentkey = comment.split(":")[0];
    const commentValue = comment.split(":")[1];
    const comments = await db.query(
      "SELECT comment FROM students WHERE id = $1",
      [id]
    );
    const commentObject = comments.rows[0].comment;
    commentObject[`${commentkey}`] = `${commentValue}`;
    console.log("backend: ", commentObject);

    if (!comment) {
      res.sendStatus(422);
      return;
    }

    const results = await db.query(postComment, [commentObject, id]);
    res.status(201).send(results.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addingCohort = async (req, res) => {
  try {
    const { cohort_id, instructor, start_date, end_date } = req.body;
    const result = await db.query(addCohort, [
      cohort_id,
      instructor,
      start_date,
      end_date,
    ]);
    res.send(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const delCohort = async (req, res) => {
  try {
    const id = req.params.id;
    await db.query("DELETE FROM students WHERE cohort_id = $1", [id]).catch();
    await db.query(deleteCohort, [id]).catch();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addingStudent = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      branch,
      status,
      ets,
      linkedin,
      github,
      comment,
      cohort_id,
    } = req.body;
    const result = await db.query(addStudent, [
      first_name,
      last_name,
      email,
      phone,
      branch,
      status,
      ets,
      linkedin,
      github,
      comment,
      cohort_id,
    ]);
    res.send(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCohortComments = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db.query(cohortComments, [id]);
    res.send(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const delStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db.query(deleteStudent, [id]).catch();
    res.send(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const delComment = async (req, res) => {
  try {
    const id = req.params.id;
    const commentKey = req.body["key"];
    const comments = await db.query(
      "SELECT comment FROM students WHERE id = $1",
      [id]
    );
    // console.log(comments);
    const commentObject = comments.rows[0].comment;
    delete commentObject[`${commentKey}`];

    const results = await db.query(postComment, [commentObject, id]);
    res.status(201).send(results.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
