import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateTutoradoDto } from './dto/create-tutorado.dto';
import { UpdateTutoradoDto } from './dto/update-tutorado.dto';
import { Tutorado } from './entities/tutorado.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';



@Injectable()
export class TutoradoService {
  private readonly logger = new Logger('TutoradoService');

  constructor( 
    @InjectRepository(Tutorado) 
    private readonly tutoradoRepository: Repository<Tutorado>,
  ){}

    async create(createTutoradoDto: CreateTutoradoDto) {
        try {
          const tutorado =  this.tutoradoRepository.create(createTutoradoDto);
          await this.tutoradoRepository.save(tutorado);
          return tutorado;
        } catch (error) {
          console.log(error)
          if (error.code==='23505')
            throw new BadRequestException(error.detail)
          this.logger.error(error);
          throw new InternalServerErrorException('Error no esperado')
        }
        
    }

  findAll() {
    return this.tutoradoRepository.findBy({estado:true});
  }

  async findOne(id: string) {
    const tutorado= await  this.tutoradoRepository.findOneBy ({ id });
    if (!tutorado)
      throw new NotFoundException(`Tutorado ${id} no encontrado`);
    return tutorado;

  }

  async remove(id: string) {
    const estudiante= await  this.findOne(id);

    await this.tutoradoRepository.update({id:id},{estado:false });

    //await this.tutoradoRepository.remove(estudiante);

    return {...estudiante, id};

  }


  async update(id: string, updateTutoradoDto: UpdateTutoradoDto) {
    const tutorado = await this.tutoradoRepository.preload({
      id: id,
      ...updateTutoradoDto
    });
    if (!tutorado) throw new NotFoundException(`Tutorado ${id} no encontrado`)

    try {
      await  this.tutoradoRepository.save(tutorado)
      return tutorado;
      
    } catch (error) {
      console.log(error)
    }

  }

  prueba():String[]{
    return ['uno','dos','tres'];
  }


}
