//Run this in the terminal to push this to the db.
//npx drizzle-kit push

//1. add a serial number in there. easier to pull the config?
//2. test out table.

// create table syntax 
// https://orm.drizzle.team/docs/sql-schema-declaration#tables-and-columns-declaration

// see this to generate uuid. 
// https://orm.drizzle.team/docs/column-types/pg#default-value

import { integer, serial, pgTable, uuid, varchar, timestamp} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  //id: integer().primaryKey().generatedAlwaysAsIdentity(),
  id: uuid("id").primaryKey().defaultRandom(),
  seqNo: serial(),
  userName: varchar("userName", { length: 25 }).notNull(), // Name with max length 100, not null
  //fName: varchar("fName", { length: 25 }).notNull(),
  //lName: varchar("lName", { length: 25 }).notNull(),
  email: varchar("email", { length: 50 }).notNull().unique(),  // Unique, not null email
  phoneNumber: varchar("phone_number", { length: 15 }),         // Optional phone number
  role: varchar("role", { length: 20 }).notNull(),              // Role column as varchar
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow(),                                              // Default to current timestamp
});