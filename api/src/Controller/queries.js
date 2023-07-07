export const allCohort = `SELECT * FROM cohort`;

export const speCohort = `SELECT * FROM student JOIN cohort ON cohort.cohort_name = student.cohort_name WHERE cohort.cohort_name = $1`;

export const addingTask = `SELECT * FROM tasks WHERE id = $1`;

export const deletingTask = `DELETE FROM tasks WHERE id = $1`;
