const express = require('express')
const cors = require("cors");
const {PORT}=require('./config');

const corsOptions = {
    origin: "*"
  };
  

class Servidor{
    constructor(){
        this.app = express()
        this.port = PORT

        require('./config/dbc').dbc()

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: false}))
        this.app.use(cors(corsOptions))
    }

    routes(){
        this.app.use('/api/v1/tutoria', require('./routes/tutoria.routes'))

    }

    listen(){

        this.app.listen(this.port, () => {
            console.log(`Servicio funcionando correctamente en http://localhost:${this.port}`)
        })
    }

    close(){
        this.app.listen(this.port, () => {
            console.log(`Server cerrado`)
        }).close();
    }
}

module.exports = Servidor;