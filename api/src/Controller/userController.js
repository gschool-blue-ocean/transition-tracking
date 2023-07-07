import { db } from "../db/database.js";
import { allCohorts, speCohort, addCohort, deleteCohort } from "./queries.js";

export const getAllCohorts = async (req, res) => {
	try {
		const result = await db.query(allCohorts);
		res.send(result.rows);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const getSpeCohort = async (req, res) => {
	try {
		const id = Number(req.params.id);
		const result = await db.query(speCohort, [id]);
		res.send(result.rows[0]);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const addingCohort = async (req, res) => {
	try {
		const { description } = req.body;

		const result = await db.query(addCohort, [description]);
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
