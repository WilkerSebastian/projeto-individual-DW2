import {Pool} from 'pg';


export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'xablau',
    password: 'postgres',
    port: 5432
});