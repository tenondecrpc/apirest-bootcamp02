Hotel = require('../models').Hotel;

module.exports = {
    //Get a list of all clientes using model.buscarTodos()
    buscarTodos(req, res) {
        Hotel.findAll()
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Get an cliente by the unique ID using model.buscarPorId()
    buscarPorId(req, res) {
        Hotel.findById(req.params.id)
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Create a new cliente using model.crear()
    crear(req, res) {
        Hotel.create(req.body)
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Edit an existing cliente details using model.actualizar()
    actualizar(req, res) {
        Hotel.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Delete an existing cliente by the unique ID using model.eliminar()
    eliminar(req, res) {
        Hotel.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    }
};
