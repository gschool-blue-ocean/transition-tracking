DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS cohort;

CREATE TABLE cohort (
  id SERIAL PRIMARY KEY,
  cohort_id VARCHAR(80) UNIQUE,
  instructor VARCHAR(80),
  start_date DATE,
  end_date DATE
);

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
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
  cohort_id VARCHAR(80),
  FOREIGN KEY (cohort_id) REFERENCES cohort(cohort_id)
  );
