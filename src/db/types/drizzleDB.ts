import { drizzle } from "drizzle-orm/node-mssql";
import * as schema from '../schemas/index';
export type DrizzleDb = ReturnType<typeof drizzle<typeof schema>>;