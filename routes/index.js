var clientes = require('../controllers/clientes');

// Todas las rutas de la aplicacion deben ser definidos en este archivo
module.exports = function(router) {
    // clientes
    router.get('/clientes', clientes.index);
    router.get('/clientes/:id', clientes.show);
    router.post('/clientes', clientes.create);
    router.put('/clientes/:id', clientes.update);
    router.delete('/clientes/:id', clientes.delete);

    //Otros

    return router;
};