DROP TABLE IF EXISTS cohort;
DROP TABLE IF EXISTS students;

CREATE TABLE cohort (
  id SERIAL PRIMARY KEY,
  cohort_id VARCHAR(50),
  instructor VARCHAR(80),
  start DATE,
  end DATE
);

CREATE TABLE students (
  id SERIAL FOREIGN KEY,
  first_name VARCHAR(80),
  last_name VARCHAR(80),
  email VARCHAR(80),
  phone VARCHAR(80),
  branch VARCHAR(80),
  status VARCHAR(80),
  ETS DATE,
  linkedin VARCHAR(80),
  github VARCHAR(80),
  comment TEXT,
  cohort_id VARCHAR(80)
);
