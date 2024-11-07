import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import type { Handler } from "aws-lambda";

const app = express();
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 3000;

export const handler: Handler = async (event, context) => {
  console.log("EVENT: \n" + JSON.stringify(event, null, 2));

  app.get("/", (_, res) => {
    res.send("Hello World");
  });

  app.listen(3000, () => {
    console.log(`Server started on port ${PORT}`);
  });

  return JSON.stringify(context.logStreamName);
};
