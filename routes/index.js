var hotel = require('../controllers/hotel');

// Todas las rutas de la aplicacion deben ser definidos en este archivo
module.exports = function(router) {
    // hoteles
    router.get('/hoteles', hotel.buscarTodos);
    router.get('/hoteles/:id', hotel.buscarPorId);
    router.post('/hoteles', hotel.crear);
    router.put('/hoteles/:id', hotel.actualizar);
    router.delete('/hoteles/:id', hotel.eliminar);

    //Otros modelos o entidades

    return router;
};