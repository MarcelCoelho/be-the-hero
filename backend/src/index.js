/*
Metods HTTP:
   * GET
   * POST
   * PUT
   * DELETE
*/
/*
Tipos de parametros
   * Query params: parametro nomeados enviado na rota após  "?" (filtro, paginação)
   * Route params: identificar recursos users/:id
   * Request body: corpo das requisições, utilizado para criar ou alterar recursos
*/

/*
BD

 * SQL: MySQL, SQLite, Postgree, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc

    Utilizaremos SQLite
    
    * Driver: select * from users
    * Query Builder: table('users').select('*').where()

*/


const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors);
app.use(express.json());

app.use(routes);

app.listen(3333);