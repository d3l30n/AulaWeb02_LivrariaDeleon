import { Module } from '@nestjs/common';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';
@Module({
  controllers: [LivrosController],
  providers: [LivrosService, LivrosRepository],
  exports: [],
})
export class LivrosModule {}
