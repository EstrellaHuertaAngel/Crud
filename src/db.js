import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: 'mybase.mysql.database.azure.com',
    port: '3306',
    user: 'Novato',
    password: 'Rizzo64$',
    database: 'customersdb'
});
