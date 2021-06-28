import "reflect-metadata";
import express from 'express';

import './database';

const app = express();

/**
 * Tipos de parâmetros
 * Routes Params => Sintaxe depois do recurso solicitado "/"
 * Query Params
 * Body Params
 */

app.listen(3000, () => console.log("Server is running"));