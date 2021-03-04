
//1 importar
const express = require('express');
const amigos = require('./amigos');
const middlewares = require('./middlewares');

//2 crear una instancia de express

const app = express();

//3. agregar middlewares adicionales
// los middlewares se agrean  usando app.use
app.use(express.json()); //reemplaza al body parser
app.use(middlewares.logger);

//4. Crear rutas.

//traer datos de amigos
app.get('/amigos',(req,res) => {
    res.status(200)
    res.json(amigos)
})

//traer hobbies
app.get("/amigos/hobbies", (req, res) => {
    res.status(200);
const response = amigos.map( ({ nombre, hobbies }) => ({ nombre, hobbies }) )
    res.json(response);
  });

  //traer lenguajes
  app.get("/amigos/lenguajes", (req, res) => {
    res.status(200);
const response = amigos.map( ({ nombre, lenguajes }) => ({ nombre,lenguajes }) )
    res.json(response);
  });


  // amigos/4  verificar si existe amigo con id 4

  app.put("/amigos/:id",middlewares.validarAmigoId, (req, res) => {
    const idParam = req.params.id;
    const amigoBody = req.body;
      amigos.forEach((a) => {
        if (a.id == idParam) {
          a.id = amigoBody.id;
        }
      });
      res.status(204);
      res.json({});
  });




   // amigos/4/hobbies/1 verificar si existe hobbie con ese id 
   app.put("/amigos/lenguajes/:id",middlewares.verificarIdLenguaje, (req, res) => {
    const idLenParam = req.params.id;
    const idLenBody = req.body;
      amigos.forEach((h) => {
        if (l.id == idLenParam) {
          l.lenguajes = idLenBody.id;
        }
      });
      res.status(204);
      res.json({});
  });


   












//5. iniciar el servidor
app.listen(3005, () => {
    console.log("servidor iniciado en puerto 3005");
  });




// traer datos de amigos
  // traer hobbies y otro para traer lenguajes (ahorita no)
  // amigos/4/hobbies/1  verificar si existe amigo con id 4
  //  verificar si existe hobbie con ese id 

