//Run this in the terminal to push this to the db.
//npx drizzle-kit push

// https://orm.drizzle.team/docs/sql-schema-declaration#tables-and-columns-declaration

// see this to generate uuid. 
// https://orm.drizzle.team/docs/column-types/pg#default-value

/* ```sql
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  owner_id INT REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(100) NOT NULL, -- e.g., electronics, tools, vehicles
  condition VARCHAR(50), -- e.g., new, used, excellent, etc.
  price_per_day DECIMAL(10, 2) NOT NULL,
  available BOOLEAN DEFAULT TRUE,
  location VARCHAR(255) NOT NULL, -- location of the item for pickup
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); */

import { integer, serial, pgTable, uuid, varchar, timestamp} from "drizzle-orm/pg-core";
import {users} from "./users";

export const items = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    seqNo: serial(),
    ownerId: uuid("owner_Id").notNull().references(() => users.id),
    description: varchar("description", { length: 25 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow(),                                              // Default to current timestamp
  });