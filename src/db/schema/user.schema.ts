import { InferModel, sql } from "drizzle-orm";
import { datetime, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const UserSchema = mysqlTable("users", {
  id: varchar("id", { length: 50 }).primaryKey(),
  fullName: varchar("full_name", { length: 100 }).notNull(),
  createdAt: datetime("created_at", { mode: "date" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

// types
export type IUser = InferModel<typeof UserSchema, "select">;
export type ICreateUser = InferModel<typeof UserSchema, "insert">;
