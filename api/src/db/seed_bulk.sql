COPY students (first_name, last_name, email, phone, branch, ets, status, linkedin, github, comment, cohort_id) FROM '/docker-entrypoint-initdb.d/student_data.csv' WITH DELIMITER ',' CSV;

