import express from "express";
import animeRoutes from "./src/routes/animeRoutes";

const app = express();

app.use(express.json());

const PORT = 3500;

app.use("/anime", animeRoutes);

app.get("/", (req, res) => {
  res.send("Go to the /anime route!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
