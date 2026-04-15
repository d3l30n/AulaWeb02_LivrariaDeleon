import {mssqlTable, int, varchar, datetime} from 'drizzle-orm/mssql-core';


export const autoresTabela = mssqlTable('autores', {
    id: int('id').primaryKey().notNull(),
    nome: varchar('nome', { length: 100 }).notNull(),
    email: varchar('email', { length: 255 }).unique().notNull(),
    criadoEm: datetime('criado_em').notNull().defaultGetDate(),
});

export type Autor = typeof autoresTabela.$inferSelect;
export type CriarAutor = typeof autoresTabela.$inferInsert;