import express from "express";
import router from "./Router/router.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'none'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;"
  );
  next();
});

export default app;
