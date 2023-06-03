"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutoradoModule = void 0;
const common_1 = require("@nestjs/common");
const tutorado_service_1 = require("./tutorado.service");
const tutorado_controller_1 = require("./tutorado.controller");
const typeorm_1 = require("@nestjs/typeorm");
const tutorado_entity_1 = require("./entities/tutorado.entity");
let TutoradoModule = class TutoradoModule {
};
TutoradoModule = __decorate([
    (0, common_1.Module)({
        controllers: [tutorado_controller_1.TutoradoController],
        providers: [tutorado_service_1.TutoradoService],
        imports: [typeorm_1.TypeOrmModule.forFeature([
                tutorado_entity_1.Tutorado
            ])]
    })
], TutoradoModule);
exports.TutoradoModule = TutoradoModule;
//# sourceMappingURL=tutorado.module.js.map