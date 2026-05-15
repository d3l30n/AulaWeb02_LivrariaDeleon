import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE } from 'src/db/database/database.constants';
import type{ DrizzleDb } from 'src/db/types/drizzleDB';
import { InternalServerErrorException } from '@nestjs/common';
import { livrosTabela } from 'src/db/schemas';

@Injectable()
export class LivrosRepository {
  constructor(@Inject(DRIZZLE) private readonly db: DrizzleDb) {}

  async listarLivros(){
    try {
        const livros = await this.db.select().from(livrosTabela);
} catch (error) {
    throw new InternalServerErrorException('Erro ao listar livros'); 
   }
  }
}	