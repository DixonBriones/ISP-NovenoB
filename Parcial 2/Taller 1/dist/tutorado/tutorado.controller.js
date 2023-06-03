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
exports.TutoradoController = void 0;
const common_1 = require("@nestjs/common");
const tutorado_service_1 = require("./tutorado.service");
const create_tutorado_dto_1 = require("./dto/create-tutorado.dto");
const update_tutorado_dto_1 = require("./dto/update-tutorado.dto");
let TutoradoController = class TutoradoController {
    constructor(tutoradoService) {
        this.tutoradoService = tutoradoService;
    }
    create(createEstudianteDto) {
        return this.tutoradoService.create(createEstudianteDto);
    }
    findAll() {
        return this.tutoradoService.findAll();
    }
    findOne(id) {
        return this.tutoradoService.findOne(id);
    }
    remove(id) {
        return this.tutoradoService.remove(id);
    }
    update(id, updateTutoradoDto) {
        return this.tutoradoService.update(id, updateTutoradoDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tutorado_dto_1.CreateTutoradoDto]),
    __metadata("design:returntype", void 0)
], TutoradoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TutoradoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TutoradoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TutoradoController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tutorado_dto_1.UpdateTutoradoDto]),
    __metadata("design:returntype", void 0)
], TutoradoController.prototype, "update", null);
TutoradoController = __decorate([
    (0, common_1.Controller)('tutorado'),
    __metadata("design:paramtypes", [tutorado_service_1.TutoradoService])
], TutoradoController);
exports.TutoradoController = TutoradoController;
//# sourceMappingURL=tutorado.controller.js.map