const amigos = require('./amigos');

const logger = (req,res,next) =>  {
    const  { method, path, query, body } = req;
    console.log (` ${method} - ${path} - ${JSON.stringify(body) } - ${ JSON.stringify(query)} `)
    next();
}


const validarAmigoId = (req,res,next) => {
    const idParam = parseInt (req.params.id);
    const idsActuales =  amigos.map(a => {
        return a.id;
    })
    console.log(idParam)
  if (idsActuales.includes(idParam)) { 
    //   res.status(200);
    //   res.json({`El siguiente ID: ${idParam} esta actualmente en uso.`});
    next();
  }else {
    res.status(400);
    res.json ({error: ` id ${idParam} no encontrado`})
  }
}



const verificarIdLenguaje = (req,res,next) => {
    const idLenParam = parseInt (req.params.id);
    const idsActuales =  amigos.map(l => {
        return l.lenguajes.id;
    })
    console.log(idLenParam)
  if (idsActuales.includes(idLenParam)) { 
    //   res.status(200);
    //   res.json({`El siguiente ID: ${idParam} esta actualmente en uso.`});
    next();
  }else {
    res.status(400);
    res.json ({error: ` id ${idLenParam} no encontrado`})
  }
}


module.exports = {logger,validarAmigoId,verificarIdLenguaje}