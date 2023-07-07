import app from "./middleware.js";
import dotenv from "dotenv";


dotenv.config({ path: "../.env" });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
