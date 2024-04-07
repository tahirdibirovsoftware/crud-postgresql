import { injectable } from 'inversify'
import { Pool } from 'pg'
import 'reflect-metadata'

@injectable()
class PoolService {

 pool: Pool
    constructor(){
        this.pool = new Pool({
            user: 'postgres',
            password: 'postgresdefaultpassword',
            host: 'localhost',
            database: 'store',
            port: 5432
        })
    }


}



export default PoolService