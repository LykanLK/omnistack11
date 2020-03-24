const express = require('express');

const app = express();

app.use(express.json()); //antes de todas as requisições, converter o JSON recebido em javascript

/* ROTA / RECURSO */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma inforação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o símbolo '?' e normalmente eles servem para filtros, paginação
 * Route Params: Parâmetros utilizaos para identificar recursos (Ex.: /users/:id)
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server (relacionais)
 * NoSQL: MongoDB, CouchDB etc (não relacionais)
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({ 
        evento: 'Semana Quarentena 1.0',
        aluno: 'Games Fuck'
    });
});

app.listen(3333);