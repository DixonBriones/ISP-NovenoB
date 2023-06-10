import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';
import { TutoradoService } from './tutorado.service';
import { CreateTutoradoDto } from './dto/create-tutorado.dto';
import { UpdateTutoradoDto } from './dto/update-tutorado.dto';
import { Tutorado } from './entities/tutorado.entity';

@Controller('tutorado')
export class TutoradoController {
  constructor(private readonly tutoradoService: TutoradoService) {}


  @Post()
  create(@Body() createEstudianteDto: CreateTutoradoDto) {
    return this.tutoradoService.create(createEstudianteDto);
  }

  @Get()
  findAll()  {
    return this.tutoradoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.tutoradoService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.tutoradoService.remove(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateTutoradoDto: UpdateTutoradoDto) {
    return this.tutoradoService.update(id, updateTutoradoDto);
  }


}
