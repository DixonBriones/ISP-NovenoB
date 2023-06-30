import { TutoradoDTO } from './dto/tutorado.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TUTORADO } from 'src/common/models/models';
import { ITutorado } from 'src/common/interfaces/tutorado.interface';

@Injectable()
export class TutoradoService {
  constructor(@InjectModel(TUTORADO.name) private readonly model: Model<ITutorado>) {}

  
  async create(tutoradoDTO: TutoradoDTO): Promise<ITutorado> {
    const newTutorado = new this.model(tutoradoDTO);
    return await newTutorado.save();
  }

  async findAll(): Promise<ITutorado[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<ITutorado> {
    return await this.model.findById(id);
  }

  async update(id: string, tutoradoDTO: TutoradoDTO): Promise<ITutorado> {
    return await this.model.findByIdAndUpdate(id, tutoradoDTO , { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
