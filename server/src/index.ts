import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import type { Handler } from "aws-lambda";
import serverless from "serverless-http";

const app = express();
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.send("Hello World");
});

const app_handler = serverless(app);

const startServer = async () => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};

startServer();

export const handler: Handler = async (event, context) => {
  const response = app_handler(event, context);
  return response;
};
