import {Express} from 'express'
import ORMUserRepository from './infrastructure/repository/orm.user.repository'
import UserService from './user.service'
import IUser from './domain/model/user.interface'
import { config } from './infrastructure/config/config'
import { createConnection ,ConnectionOptions} from 'typeorm'
import mongoose from 'mongoose'
import { createUserRepository } from './infrastructure/repository/user.repository.factory'
import fs from 'fs'
import { typeormConnect } from './infrastructure/database_connect/orm.db_connect_1'
import { mongooseConnect } from './infrastructure/database_connect/mongo.db_connect'


const initSetup=async(app:Express)=>{

  try {

      // toggle or switch repositories

      /* if(config.repository_type==='orm'){
        await typeormConnect() //  Ensure the connection is awaited
      }
      else if(config.repository_type==='mongo'){

        await mongooseConnect() // Ensure the connection is awaited
      }
      */
      // run all repositories
      await Promise.all(
          [
            typeormConnect(),
            mongooseConnect()
          ]
      )
    
       
    
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });


      } catch (error) {
          console.error('Error starting the application:', error);
      }
}
export {initSetup}