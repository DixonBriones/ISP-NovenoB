import { CreateTutoradoDto } from './dto/create-tutorado.dto';
import { UpdateTutoradoDto } from './dto/update-tutorado.dto';
import { Tutorado } from './entities/tutorado.entity';
import { Repository } from 'typeorm';
export declare class TutoradoService {
    private readonly tutoradoRepository;
    private readonly logger;
    constructor(tutoradoRepository: Repository<Tutorado>);
    create(createTutoradoDto: CreateTutoradoDto): Promise<Tutorado>;
    findAll(): Promise<Tutorado[]>;
    findOne(id: string): Promise<Tutorado>;
    remove(id: string): Promise<void>;
    update(id: string, updateTutoradoDto: UpdateTutoradoDto): Promise<Tutorado>;
}
