import {
  BadRequestException,
  HttpCode,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AtualizarAutoDto, CriarAutorDto } from './autores.dto';
import { AutoresRepository } from './autores.repository';

let autores = [
  {
    id: 1,
    nome: 'Hera Silveira',
    email: 'Hera.Ramos@gmail.com',
  },

  {
    id: 2,
    nome: 'Ana Paula',
    email: 'Ana.Paula@gmail.com',
  },
  {
    id: 3,
    nome: 'Paulo Henrique',
    email: 'Paulo.Henrique@gmail.com',
  },
  {
    id: 4,
    nome: 'João da Silva',
    email: 'joao.silva@gmail.com',
  },
];

@Injectable()
export class AutoresService {
  constructor(private readonly autoresRepository: AutoresRepository){}

  async listarAutores() {
    return await this.autoresRepository.listarAurtores();
  }


  async listarAutor(id: number) {
    const autorEncontrado = await this.autoresRepository.listarAutor(id);

    if (!autorEncontrado) {
      throw new NotFoundException(`Autor com id ${id} não encontrado`);
    }
    return autorEncontrado;
  }

  criarAutor(bodyRequest: CriarAutorDto) {
   return this.autoresRepository.criarAutor(bodyRequest);
  }

  async atualizarAutor(idAutor: number, bodyRequest: AtualizarAutoDto) {
   await this.listarAutor(idAutor);

   return this.autoresRepository.atualizarAutor(idAutor, bodyRequest);

  }

  deletarAutor(idAutor: number) {
    this.listarAutor(idAutor);
    
    autores = autores.filter((autor) => autor.id !== idAutor);

    return autores;
    }
  }

