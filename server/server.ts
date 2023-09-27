import express from "express";
import router from "./router/";

/* CONFIGURATION */
const app = express();
app.use(express.json());

/* ROUTE */
app.use("/api", router);

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(`${error} did not connect`);
  }
}
start();
