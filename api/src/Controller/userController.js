import { db } from "../db/database.js";
import { allCohort, speCohort, addingTask, deletingTask } from "./queries.js";

export const getAllCohort = async (req, res) => {
  try {
    const result = await db.query(allCohort);
    res.send(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSpeCohort = async (req, res) => {
  try {
    const cohort_name = req.params.cohort_name;
    console.log(cohort_name);
    const result = await db.query(speCohort, [cohort_name]);
    res.send(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addTasks = async (req, res) => {
  try {
    const { description } = req.body;

    const result = await db.query(addingTask, [description]);
    res.send(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const delTask = async (req, res) => {
  try {
    const id = Number(req.params.id);

    await db.query(deletingTask, [id]).catch(next);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
