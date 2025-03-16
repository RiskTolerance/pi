import { drizzle } from 'drizzle-orm/libsql/node';
import { createClient } from '@libsql/client';

const client = createClient({url: `file:${process.env.DB_FILE_NAME!}`})
const db = drizzle({client});

const result = await db.run('select 1');

console.log(result);