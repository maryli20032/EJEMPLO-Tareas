const express = require('express');
const app = express();
const cors = require('cors');

//setings: configuración del servidor
app.set('port',process.env.PORT || 4000);

//middlewares: funciones que se ejecutan antes de las rutas
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

module.exports = app;