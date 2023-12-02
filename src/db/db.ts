import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as roles from "./schema/role.schema";
import * as users from "./schema/user.schema";

const pool = mysql.createPool({
  uri: "mysql://root:myPassWord@localhost:3308/drizzle",
});

export const db = drizzle(pool, {
  logger: false,
  schema: { ...users, ...roles },
});
