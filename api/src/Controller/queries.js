export const allTasks = `SELECT * FROM tasks`;

export const speTask = `SELECT * FROM tasks WHERE id = $1`;

export const addingTask = `SELECT * FROM tasks WHERE id = $1`;

export const deletingTask = `DELETE FROM tasks WHERE id = $1`;