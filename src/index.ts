import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { users } from './db/schema';
import { uuid } from "drizzle-orm/pg-core";

// Run this command from the terminal to execute Typescript 
// pnpm tsx src/index.ts

// 1. try catch statements

const db = drizzle(process.env.DATABASE_URL!);
const randNum = Math.floor(Math.random() * 100);

async function main() {
    const user: typeof users.$inferInsert = {
      userName: 'Joe' + randNum.toString(),
      email: 'random' + randNum.toString() + '@example.com',
      phoneNumber: '416-999-8888',
      role: 'lender'
  };
    await db.insert(users).values(user);
    console.log('New user created!')
    //const users = await db.select().from(usersTable);
    //console.log('Getting all users from the database: ', users)

/*     await db
      .update(usersTable)
      .set({
        name: 'Ty',
      })
      .where(eq(usersTable.email, user.email));
    console.log('User info updated!') */

    //await db.delete(usersTable).where(eq(usersTable.email, user.email));
    //console.log('User deleted!')
  }
  
  main();

