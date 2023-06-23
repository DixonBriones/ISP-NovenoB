import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { TutoradoService } from './tutorado.service';
import { Tutorado } from './entities/tutorado.entity';
import { UpdateTutoradoInput, CreateTutoradoInput } from './dto/index';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Tutorado)
export class TutoradoResolver {
  constructor(private readonly tutoradoService: TutoradoService) {}

  @Mutation(() => Tutorado)
  async createTutorado(@Args('createTutoradoInput') createTutoradoInput: CreateTutoradoInput)
  :Promise<Tutorado> {
    return this.tutoradoService.create(createTutoradoInput);
  }

  @Query(() => [Tutorado], { name: 'tutorados' })
  async findAll():Promise<Tutorado[]> {
    return this.tutoradoService.findAll();
  }

  @Query(() => Tutorado, { name: 'tutorado' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Tutorado> {
    return this.tutoradoService.findOne(id);
  }

  @Mutation(() => Tutorado)
  updateTutorado(@Args('updateTutoradoInput') updateTutoradoInput: UpdateTutoradoInput): Promise<Tutorado> {
    return this.tutoradoService.update(updateTutoradoInput.id, updateTutoradoInput);
  }

  @Mutation(() => Tutorado)
  removeTutorado(@Args('id', { type: () => ID }) id: string): Promise<Tutorado> {
    return this.tutoradoService.remove(id);
  }
}
