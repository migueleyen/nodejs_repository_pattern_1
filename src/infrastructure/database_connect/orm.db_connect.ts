import fs from 'fs'
import {createConnection} from 'typeorm'

const typeormConnect=async():Promise<void>=>{
    // Read ormconfig.json
    const ormConfig=JSON.parse(fs.readFileSync('ormconfig.json','utf-8'))

    // Check the Database Type before stablished the connection
    const dbType=ormConfig.type;
    console.log(`Database type: ${dbType}`)

    if(dbType==='postgres'){

    console.log('Using PostgreSQL as ORM database')

    }else if(dbType==='mysql'){
    console.log('Using MySQL as ORM database')
    }
    else {
    console.log(`Using ${dbType} as ORM database`);
    }
    // Stablish connection
    await createConnection(ormConfig)
    console.log('Connect to ORM Database')
}

export {typeormConnect}