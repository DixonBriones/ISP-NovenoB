import { TutoradoService } from './tutorado.service';
import { TutoradoDTO } from './dto/tutorado.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TutoradoMsg } from 'src/common/constants';

@Controller()
export class TutoradoController {
  constructor(private readonly tutoradoService: TutoradoService) {}

  @MessagePattern(TutoradoMsg.CREATE)
  create(@Payload() tutoradoDTO: TutoradoDTO) {
    return this.tutoradoService.create(tutoradoDTO);
  }

  @MessagePattern(TutoradoMsg.FIND_ALL)
  findAll() {
    return this.tutoradoService.findAll();
  }

  @MessagePattern(TutoradoMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.tutoradoService.findOne(id);
  }
  @MessagePattern(TutoradoMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.tutoradoService.update(payload.id, payload.tutoradoDTO);
  }

  @MessagePattern(TutoradoMsg.DELETE)
  delete(@Payload() id: string) {
    return this.tutoradoService.delete(id);
  }
}
