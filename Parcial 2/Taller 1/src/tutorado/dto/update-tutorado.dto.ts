import { PartialType } from '@nestjs/mapped-types';
import { CreateTutoradoDto } from './create-tutorado.dto';
import { IsBoolean, IsNotEmpty, IsOptional,IsString } from 'class-validator';

export class UpdateTutoradoDto extends PartialType(CreateTutoradoDto) {
    @IsString()
    @IsNotEmpty()
    direccion:string;
}
