import app from "./server.js";

const PORT = process.env.PORT;

app.get("/api/mcsp/:id", async (req, res) => {
  const id = req.params.id;
  sql`SELECT * FROM cohort JOIN student ON cohort.cohort_name = student.cohort_name WHERE cohort.cohort_name = mcsp${id}`.then(
    (rows) => {
      res.send(rows[0]);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
