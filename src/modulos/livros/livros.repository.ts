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
  async criarLivro(bodyRequest: CriarLivroDto){
    try { 
      await this.db.insert(livrosTabela).values({
        idAutor: bodyRequest.id_autor,
        titulo: bodyRequest.titulo,
        descricao: bodyRequest.descricao,
      });
     
      return `Livro ${bodyRequest.titulo} criado com sucesso`; 
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar livro');
    }
}	
}