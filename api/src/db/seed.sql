INSERT INTO cohort(cohort_id, instructor, start_date, end_date) VALUES(1, 'Danny Andrews', '2023-03-27', '2023-07-21');

INSERT INTO students(first_name,
  last_name,
  email,
  phone,
  branch,
  status,
  ETS,
  linkedin,
  github,
  comment,
  cohort_id) VALUES('Phillip', 'Sussman', 'phillip@test.com', '123-123-1234', 'USAF', 'CLEARING', '2023-08-28', '/in/phillipsussman', '/Sussman-P', 'fly guy', 1);
