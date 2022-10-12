import Router from "express";

import transactionsRoutes from "../routes/TransactionsRoutes.js";

const routes = Router();

// Métodos HTTP
// GET - Buscar/listar informações do nosso servidor
// POST - Publicar informações
// PUT - Atualização das informações
// PATCH - Atualização parcial das informações
// DELETE - Deleção da informação

routes.use(transactionsRoutes);

export default routes;


















// import Router from 'express';

// const routes = Router();

// routes.get("/", (request, response) => {
//   response.status(200).json({
//     message: "OK"
//   });
// });

// // routes.post("/transactions", (request, response) => {
// //   console.log(request.body)
// //   response.sendStatus(201);
// // });

// export default routes;


