import fs from 'fs'
import { DataSource, EntityTarget, ObjectLiteral, Repository } from 'typeorm';

let typeormDB:DataSource;

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

    const dataSource=new DataSource(ormConfig)


    console.log('Connect to ORM Database 1')
    typeormDB=await dataSource.initialize()
}

const useTypeorm=(
    entity:EntityTarget<ObjectLiteral>
):Repository<ObjectLiteral>=>{
    if(!typeormDB){
        throw new Error('Typeorm has not been initialized!')
    }
    return typeormDB.getRepository(entity)
}

export {typeormConnect,useTypeorm}