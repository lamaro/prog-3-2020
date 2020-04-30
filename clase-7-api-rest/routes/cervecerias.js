const crudCervecerias = (app) => {
    const Cerveceria = require('../models/cervecerias.js');
    
    //Funciones de endpoints
    //GET - Devuelve todas las cervecerias
    findAllCervecerias = (req, res) => {
        Cerveceria.find((err, cervecerias) => {
            if (!err) {
                console.log('GET /cervecerias');
                res.send(cervecerias)
            }
        })
    }
    //URLS
    app.get('/cervecerias', findAllCervecerias); 
}

module.exports = crudCervecerias;