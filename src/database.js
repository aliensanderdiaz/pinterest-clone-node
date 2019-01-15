const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pinterest-clone', {
        useNewUrlParser: true
    })
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log('Error en la conexión a la base de datos'))