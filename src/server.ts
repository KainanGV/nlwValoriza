import "reflect-metadata";
import express from 'express';
import { router } from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(router);

/**
 * Tipos de parâmetros
 * Routes Params => Sintaxe depois do recurso solicitado "/"
 * Query Params
 * Body Params
 */

app.listen(3000, () => console.log("Server is running"));