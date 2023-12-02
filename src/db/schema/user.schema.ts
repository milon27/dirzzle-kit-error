import { InferModel, sql } from "drizzle-orm";
import { datetime, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const UserSchema = mysqlTable(
  "users",
  {
    id: varchar("id", { length: 50 }).primaryKey(),
    fullName: varchar("full_name", { length: 100 }).notNull(),
    // gender: mysqlEnum("gender", ["male", "female"]).notNull().default("male"),
    createdAt: datetime("created_at", { mode: "date" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  }
  // , (table) => {
  //   return {
  //     uq_id_time: unique("uq_id_time").on(table.fullName, table.createdAt),
  //   };
  // }
);

// types
export type IUser = InferModel<typeof UserSchema, "select">;
export type ICreateUser = InferModel<typeof UserSchema, "insert">;
