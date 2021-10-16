import express from "express";
import cors from "cors";
import carouselRouter from "./src/routes/carouselRoute.js";

const app = express();
app.use(cors());

app.use("/api/carousel", carouselRouter);

const PORT = process.env.PORT || 3600;
app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`Server is running on port:${PORT}`);
});
