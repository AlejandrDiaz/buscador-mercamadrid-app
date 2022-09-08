const express = require("express");
const cors = require("cors");
const {Client} = require('@elastic/elasticsearch');

const app = express();
var client = new Client({
  node: 'http://localhost:9200',
  auth: {
    username: 'elastic',
    password: '9T_=T9LXugO+Xfjt0UJm'
  }
});


const PrespuestaElastic  = (eresponde) => {
  const respuestaH = eresponde.hits.hits;
  const resultado = respuestaH.map((hit) => hit._source);
  return resultado;
};
        app.use(cors());
        app.get("/elastic", async (req, res, next) => {
        try {
          const { indice = "" } = req.query;
          const { campo = "" } = req.query;
          const { text = "" } = req.query;
          const response = await client.search(
            {
              index: indice,
              from: 0,
              size:100,
              body: {
                query: {
                  query_string: {
                    default_field: campo,
                    query:text,
                  },
                },
              },
            },
            {
              ignore: [404],
              maxRetries: 3,
            }
          );
          res.json({
            message: "Búsqueda Satisfactoria",
            info: PrespuestaElastic(response),
                      
            });
        } catch (err) {
          next(err);
        }
      });

      app.listen(3030, () => {
        console.log("Servidor escuchando en el puerto 3030");
      });


  