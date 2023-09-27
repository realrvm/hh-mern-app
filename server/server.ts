import express from "express";

const app = express();

app.use(express.json());

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
