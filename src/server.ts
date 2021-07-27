import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.use(
  ({ message }: Error, request: Request, response: Response, next: NextFunction) => {
    if (message) {
      return response.status(400).json({ error: message });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error"
    })
  }
);

/**
 * Tipos de parâmetros
 * Routes Params => Sintaxe depois do recurso solicitado "/"
 * Query Params
 * Body Params
 */

app.listen(3000, () => console.log("Server is running"));
