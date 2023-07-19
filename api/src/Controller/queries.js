export const allCohorts = `SELECT * FROM cohort`;

export const allStudents = `SELECT * FROM students ORDER BY last_name`;

export const postComment = `UPDATE students SET comment = $1 WHERE id = $2 RETURNING *`;

export const delComment =  `DELETE FROM students WHERE comment = $1 WHERE id = $2 RETURNING *`

export const selComm = `SELECT comment FROM students WHERE id = $1`;

export const speCohort = `SELECT * FROM cohort JOIN students ON students.cohort_id = cohort.cohort_id WHERE cohort.cohort_id = $1 ORDER BY last_name ASC`;

export const addCohort = `INSERT INTO cohort (cohort_id, instructor, start_date, end_date) VALUES ($1, $2, $3, $4) RETURNING *`;

export const deleteCohort = `DELETE FROM cohort WHERE cohort_id = $1`;

export const addStudent = `INSERT INTO students (first_name, last_name, email, phone, branch, status, ets, linkedin, github, comment, cohort_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`;
