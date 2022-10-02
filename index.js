import dotenv from "dotenv";
dotenv.config();

import express, { Router } from "express";
import cors from "cors";

import { databaseConnect } from "./database/connection/connect.js";
import { makeCreate } from "./factories/createFactory.js";
import { makeDelete } from "./factories/deleteFactory.js";
import { makeFindAll } from "./factories/findAllFactory.js";
import { makeFindById } from "./factories/findByIdFactory.js";
import { makeUpdate } from "./factories/updateFactory.js";

databaseConnect.connection();

const port = process.env.PORT || 3001;
const app = express();
const router = Router();

const create = makeCreate(router);
const delet = makeDelete(router);
const findAll = makeFindAll(router);
const findById = makeFindById(router);
const update = makeUpdate(router);

app.use(express.json());
app.use(cors());

app.use("/api", create.route());
app.use("/api", delet.route());
app.use("/api", findAll.route());
app.use("/api", findById.route());
app.use("/api", update.route());

app.listen(port, () => console.info(`Servidor rodando em http://localhost:${port}`));
