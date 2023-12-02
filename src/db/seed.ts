import { db } from "./db";
import { UserSchema } from "./schema/user.schema";

const seed = async () => {
  const sameDate = new Date();
  await db.insert(UserSchema).values([
    {
      id: "a",
      fullName: "a",
      createdAt: sameDate,
    },
    {
      id: "b",
      fullName: "a",
      createdAt: sameDate,
    },
  ]);
};

seed()
  .then(() => {
    console.log("Seed Done");
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(0);
  });
