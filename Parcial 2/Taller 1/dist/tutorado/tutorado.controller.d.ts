import { TutoradoService } from './tutorado.service';
import { CreateTutoradoDto } from './dto/create-tutorado.dto';
import { UpdateTutoradoDto } from './dto/update-tutorado.dto';
import { Tutorado } from './entities/tutorado.entity';
export declare class TutoradoController {
    private readonly tutoradoService;
    constructor(tutoradoService: TutoradoService);
    create(createEstudianteDto: CreateTutoradoDto): Promise<Tutorado>;
    findAll(): Promise<Tutorado[]>;
    findOne(id: string): Promise<Tutorado>;
    remove(id: string): Promise<void>;
    update(id: string, updateTutoradoDto: UpdateTutoradoDto): Promise<Tutorado>;
}
