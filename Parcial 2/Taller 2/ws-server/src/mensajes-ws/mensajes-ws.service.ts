import { Injectable } from '@nestjs/common';
import {Socket} from 'socket.io'
import { Tutorado } from 'src/tutorado/entities/tutorado.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TutoradoService } from 'src/tutorado/tutorado.service';

interface ConnectedClients {
    [id:string]: {
       socket: Socket,
       tutorado: Tutorado
    }
}

@Injectable()
export class MensajesWsService {
    private connectedClients: ConnectedClients={}

    constructor( @InjectRepository(Tutorado)
     private readonly tutoradoRepository: Repository<Tutorado>,
     private readonly tutoradoService: TutoradoService
    ){}

    async registerClient(client:Socket, name: string){
        console.log(this.tutoradoService.prueba());
        const tutorado =await  this.tutoradoRepository.findOneBy({ nombre: name });
        if (!tutorado) throw new Error('Tutorado no encontrado');
        if (!tutorado.estado) throw new Error('No activo');

        this.connectedClients[client.id]= {socket:client, tutorado: tutorado};
    }

    removeClient(clientId:string){
        delete this.connectedClients[clientId];
    }

    getConnectedClients():string[]{
        // return Object.keys(this.connectedClients).length;
        // console.log(this.connectedClients)
        return Object.keys(this.connectedClients);
    }

    getStudentFullName(id:string){
        return this.connectedClients[id].tutorado.nombre;
    }

    verificarDuplicado(name:string){
        const clients = Object.values(this.connectedClients);
        const duplicado = clients.some(client => client.tutorado.nombre==name);

        if (duplicado) {
            console.log("Ya se encuentra conectado al Socket");
            return true; // Ya se encuentra conectado al Socket
        }

        console.log("Bienvenido");
        return false; // Conectado
    }
}
