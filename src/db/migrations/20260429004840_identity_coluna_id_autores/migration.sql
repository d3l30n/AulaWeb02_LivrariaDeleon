ALTER TABLE [autores] DROP CONSTRAINT [autores_pkey];--> statement-breakpoint
EXEC sp_rename 'autores.id', [__old_id], 'COLUMN';--> statement-breakpoint
ALTER TABLE [autores] ADD [id] int IDENTITY(1, 1);--> statement-breakpoint
ALTER TABLE [autores] DROP COLUMN [__old_id];--> statement-breakpoint
ALTER TABLE [autores] ADD CONSTRAINT [autores_pkey] PRIMARY KEY ([id]);