const mongoose = require('mongoose'); // Importar mongoose
require('dotenv').config({ path: 'variables.env' }); // Importar variables de entorno

const conectarDB = async () => { // Función para conectar a la base de datos
    try { // Intentar conectar
        await mongoose.connect(process.env.DB_MONGO, { // Conectar a la base de datos
            useNewUrlParser: true, // Configuración de mongoose
            useUnifiedTopology: true // Configuración de mongoose
            // useFindAndModify: false, // Configuración de mongoose
            // useCreateIndex: true // Configuración de mongoose
        }); // Conectar a la base de datos
        console.log('DB Conectada'); // Mensaje de conexión exitosa
    } catch (error) { // Si hay un error
        console.log('Hubo un error'); // Mensaje de error
        console.log(error); // Mostrar error
        process.exit(1); // Detener la app
    }
}

module.exports = conectarDB; // Exportar la función