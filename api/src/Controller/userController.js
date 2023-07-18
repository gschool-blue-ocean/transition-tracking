import { db } from "../db/database.js";
import {
	allCohorts,
	allStudents,
	speCohort,
	addCohort,
	deleteCohort,
	postComment,
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
		const { comment } = req.body;
		const commentkey = comment.split(":")[0];
		const commentValue = comment.split(":")[1];
		const commentObject = {};
		commentObject[`${commentkey}`] = `${commentValue}`;
		const { id } = req.params;
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

		console.log("adding Cohort");

		const result = await db.query(addCohort, [cohort_id, instructor, start_date, end_date]);
		res.send(result.rows[0]);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const delCohort = async (req, res) => {
	try {
		const id = Number(req.params.id);

		await db.query(deleteCohort, [id]).catch(next);
		res.sendStatus(204);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
