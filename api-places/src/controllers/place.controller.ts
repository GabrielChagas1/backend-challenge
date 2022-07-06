import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaceModel } from 'src/models/place.model';
import { PlaceUpdateSchema } from 'src/schemas/placeUpdate.schema';
import { Repository } from 'typeorm';
import { PlaceSchema } from '../schemas/place.schema';

@Controller('/place')
export class PlaceController {
  constructor(
    @InjectRepository(PlaceModel) private model: Repository<PlaceModel>,
  ) {}

  @Post()
  public async create(@Body() body: PlaceSchema): Promise<PlaceModel> {
    return this.model.save(body);
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PlaceModel> {
    const person = await this.model.findOne({ where: { id } });
    if (!person) {
      throw new NotFoundException(
        `Não foi encontrado o registro com o id ${id}`,
      );
    }
    return person;
  }

  @Get()
  public async getAll(): Promise<PlaceModel[]> {
    return this.model.find();
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: PlaceUpdateSchema,
  ): Promise<PlaceModel> {
    const person = await this.model.findOne({ where: { id } });
    if (!person) {
      throw new NotFoundException(
        `Não foi encontrado o registro com o id ${id}`,
      );
    }

    await this.model.update({ id }, body);

    return this.model.findOne({ where: { id } });
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const person = await this.model.findOne({ where: { id } });
    if (!person) {
      throw new NotFoundException(
        `Não foi encontrado o registro com o id ${id}`,
      );
    }

    await this.model.delete(id);

    return `O registro com o id ${id} foi deletado com sucesso!`;
  }
}
