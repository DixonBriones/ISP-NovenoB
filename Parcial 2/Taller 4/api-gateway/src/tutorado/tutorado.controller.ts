import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TutoradoMSG } from './../common/constants';
import { Observable } from 'rxjs';
import { TutoradoDTO } from './dto/tutorado.dto';
import { ClientProxySuperFlights } from './../common/proxy/client-proxy';
import { ITutorado } from 'src/common/interfaces/tutorado.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('tutorados')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/tutorado')
export class TutoradoController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyTutorado = this.clientProxy.clientProxyTutorado();

  @Post()
  create(@Body() tutoradoDTO: TutoradoDTO): Observable<ITutorado> {
    return this._clientProxyTutorado.send(TutoradoMSG.CREATE, tutoradoDTO);
  }

  @Get()
  findAll(): Observable<ITutorado[]> {
    return this._clientProxyTutorado.send(TutoradoMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<ITutorado> {
    return this._clientProxyTutorado.send(TutoradoMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() tutoradoDTO: TutoradoDTO): Observable<ITutorado> {
    return this._clientProxyTutorado.send(TutoradoMSG.UPDATE, { id, tutoradoDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyTutorado.send(TutoradoMSG.DELETE, id);
  }
}
