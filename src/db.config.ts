import { Pool } from 'pg'


const pool = new Pool({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    database: 'store',
    port: 5432
})

export default pool