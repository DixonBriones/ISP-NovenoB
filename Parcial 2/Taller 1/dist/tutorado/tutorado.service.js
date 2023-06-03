"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutoradoService = void 0;
const common_1 = require("@nestjs/common");
const tutorado_entity_1 = require("./entities/tutorado.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let TutoradoService = class TutoradoService {
    constructor(tutoradoRepository) {
        this.tutoradoRepository = tutoradoRepository;
        this.logger = new common_1.Logger('TutoradoService');
    }
    async create(createTutoradoDto) {
        try {
            const tutorado = this.tutoradoRepository.create(createTutoradoDto);
            await this.tutoradoRepository.save(tutorado);
            return tutorado;
        }
        catch (error) {
            console.log(error);
            if (error.code === '23505')
                throw new common_1.BadRequestException(error.detail);
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('Error no esperado');
        }
    }
    findAll() {
        return this.tutoradoRepository.find({});
    }
    async findOne(id) {
        const tutorado = await this.tutoradoRepository.findOneBy({ id });
        if (!tutorado)
            throw new common_1.NotFoundException(`Tutorado ${id} no encontrado`);
        return tutorado;
    }
    async remove(id) {
        const tutorado = await this.findOne(id);
        await this.tutoradoRepository.remove(tutorado);
    }
    async update(id, updateTutoradoDto) {
        const tutorado = await this.tutoradoRepository.preload(Object.assign({ id: id }, updateTutoradoDto));
        if (!tutorado)
            throw new common_1.NotFoundException(`Tutorado ${id} no encontrado`);
        try {
            await this.tutoradoRepository.save(tutorado);
            return tutorado;
        }
        catch (error) {
            console.log(error);
        }
    }
};
TutoradoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tutorado_entity_1.Tutorado)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TutoradoService);
exports.TutoradoService = TutoradoService;
//# sourceMappingURL=tutorado.service.js.map