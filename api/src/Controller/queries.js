export const allCohorts = `SELECT * FROM cohort`;

export const allStudents = `SELECT * FROM students LIMIT 10`;

export const speCohort = `SELECT * FROM cohort WHERE id = $1`;

export const addCohort = `SELECT * FROM cohort WHERE id = $1`;

export const deleteCohort = `DELETE FROM cohort WHERE id = $1`;
