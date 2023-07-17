
COPY students (first_name, last_name, email, phone, branch, ets, status, linkedin, github, comment, cohort_id) FROM '/docker-entrypoint-initdb.d/student_data.csv' WITH (FORMAT CSV, DELIMITER ';', ESCAPE '\');

--Use the command below to bulk insert into Heroku postgresql database:

-- \copy students (first_name, last_name, email, phone, branch, status, ets, linkedin, github, comment, cohort_id) FROM 'api/src/db/student_data.csv' WITH DELIMITER ',' CSV;