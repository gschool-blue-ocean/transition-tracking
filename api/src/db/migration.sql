-- Drop existing tables if they exist
DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS cohort;
DROP TABLE IF EXISTS tasks;

-- Create the cohort table
CREATE TABLE cohort (
  id SERIAL PRIMARY KEY,
  cohort_name VARCHAR(255),
  instructor VARCHAR(255),
  start_date DATE,
  end_date DATE
);

-- Create the student table with a foreign key referencing cohort_name in cohort table
CREATE TABLE student (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(255),
  branch VARCHAR(255),
  status VARCHAR(255),
  ets DATE,
  linkedin VARCHAR(255),
  github VARCHAR(255),
  comment TEXT,
  cohort_name VARCHAR(255) NOT NULL
);

