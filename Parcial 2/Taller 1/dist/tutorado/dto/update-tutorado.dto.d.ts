import { CreateTutoradoDto } from './create-tutorado.dto';
declare const UpdateTutoradoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTutoradoDto>>;
export declare class UpdateTutoradoDto extends UpdateTutoradoDto_base {
    direccion: string;
}
export {};
