import { faker } from "@faker-js/faker";
import postgres from "postgres";
import fs from "fs";

const sql = postgres("postgress://localhost:5432/blueocean");
const writablestream = fs.createWriteStream("./api/src/db/student_data.csv");

for (let i = 0; i < 1000; i++) {
  const first_name = faker.person.firstName();
  const last_name = faker.person.lastName();
  const email = faker.internet.email({
    firstName: `${first_name}`,
    lastName: `${last_name}`,
    provider: "blueocean.com",
  });
  const phone = faker.phone.number(`###-###-####`);
  const branch = faker.helpers.arrayElement([
    "Army",
    "Navy",
    "Air Force",
    "Marine",
    "Coast Guard",
  ]);
  const status = faker.helpers.arrayElement([
    "18 month prior ETS",
    "6 month prior ETS",
    "Clearing",
    "Seperated",
  ]);

  const ets = faker.date
    .between({
      from: "2023-01-01",
      to: "2025-01-01",
    })
    .toISOString()
    .split("T")[0];

  const linkedin = `https://www.linkedin.com/in/${first_name}${last_name}/`;
  const github = `https://github.com/` + faker.internet.displayName();
  const comment = "";
  const cohort_name = faker.helpers.arrayElement([
    "mcsp16",
    "mcsp17",
    "mcsp18",
    "mcsp19",
    "mcsp20",
    "mcsp21",
    "mcsp22",
    "mcsp23",
    "mcsp24",
    "mcsp25",
  ]);

  // await sql`INSERT INTO student() VALUES ()`

  writablestream.write(
    `${first_name},${last_name},${email},${phone},${branch},${status},${ets},${linkedin},${github},${comment},${cohort_name}\n`
  );
}
writablestream.close();
sql.end();

// await sql`COPY student (first_name, last_name, email, phone, branch, status, ets, linkedin, github, comment, cohort_name) FROM '/api/src/db/student_data.csv' WITH DELIMITER ',' CSV`;

// COPY student (first_name, last_name, email, phone, branch, status, ets, linkedin, github, comment, cohort_name) FROM '/Users/shuluo/Code/mcsp/transition-tracking/api/src/db/student_data.csv' WITH DELIMITER ',' CSV;
