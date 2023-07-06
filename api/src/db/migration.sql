DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(80),
  email VARCHAR(80),
  branch VARCHAR(80),
  status VARCHAR(80),
  ETS date
);
