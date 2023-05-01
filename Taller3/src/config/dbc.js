const mongoose = require('mongoose')
const {MONGODB_PASSWORD,MONGODB_USERNAME}=require('./index');

module.exports.dbc = async () => {
    try{
        await mongoose.
            connect(`mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@192.168.30.28:27017/taller3?authSource=admin`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
        console.log('Conexion exitosa con la base de datos')
    }catch(err){
        console.error(err)
        throw new Error('Error de conexion con la base de datos')
    }
}