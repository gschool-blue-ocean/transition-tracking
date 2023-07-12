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
  const ets = faker.date
    .between({
      from: "2023-01-01",
      to: "2025-01-01",
    })
    .toISOString()
    .split("T")[0];
  const etsDate = new Date(ets);
  const status =
    Math.floor((etsDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)) > 180
      ? "more than 6 months prior ETS"
      : Math.floor((etsDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)) >
        14
      ? "within 6 months prior ETS"
      : Math.floor((etsDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)) > 0
      ? "Clearing"
      : "Seperated";

  const linkedin = `https://www.linkedin.com/in/${first_name}${last_name}/`;
  const github = `https://github.com/` + faker.internet.displayName();
  const comment = "";
  const cohort_id = faker.helpers.arrayElement([
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

  writablestream.write(
    `${first_name},${last_name},${email},${phone},${branch},${ets},${status},${linkedin},${github},${comment},${cohort_id}\n`
  );
}

writablestream.close();

// await sql`COPY students (first_name, last_name, email, phone, branch, ets, status, linkedin, github, comment, cohort_id) FROM 'api/src/db/student_data.csv' WITH DELIMITER ',' CSV`;

sql.end();
