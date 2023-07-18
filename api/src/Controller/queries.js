export const allCohorts = `SELECT * FROM cohort`;

export const allStudents = `SELECT * FROM students ORDER BY last_name`;

export const postComment = `UPDATE students SET comment = $1 WHERE id = $2 RETURNING *`;

export const speCohort = `SELECT * FROM cohort JOIN students ON students.cohort_id = cohort.cohort_id WHERE cohort.cohort_id = $1`;

export const addCohort = `INSERT INTO cohort(cohort_id, instructor, start_date, end_date) VALUES($1, $2, $3, $4) RETURNING *`;

export const deleteCohort = `DELETE FROM cohort WHERE id = $1`;
