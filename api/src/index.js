import app from "./server.js";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

fetch("api/mcsp21");
