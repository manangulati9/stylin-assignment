import express, { type Request, type Response } from "express";
import cors from "cors";

const app = express();
cors();

const PORT = process.env.PORT ? Number.parseInt(process.env.PORT) : 3000;

app.get("/", (_: Request, res: Response) => {
  res.send("Express on Vercel");
});

app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));
