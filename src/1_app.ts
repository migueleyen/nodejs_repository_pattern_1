import express from 'express'
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



const app=express()

// body parser post json
app.use(express.json())

const startApp=async()=>{

  try {
      if(config.repository_type==='orm'){
        await typeormConnect() //  Ensure the connection is awaited
      }
      else if(config.repository_type==='mongo'){

        await mongooseConnect() // Ensure the connection is awaited
      }
  // Depending on your configuration or environment, select the repository
  const userRepository=createUserRepository()

  const userService=new UserService(userRepository)

  app.post('/api/users', async (req, res) => {
      try {
        const { id, username, email } = req.body
        await userService.createUser({ id, username, email });
        res.status(201).send('User created');
      } catch (error) {
        res.status(500).send(error.message);
      }
    });
    
    app.get('/api/users/:id', async (req, res) => {
      try {
        const id = Number.parseInt(req.params.id);
        const user = await userService.getUser(id);
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(204).send('User not found');
        }
      } catch (error) {
        res.status(500).send(error.message);
      }
    });
    
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });


      } catch (error) {
          console.error('Error starting the application:', error);
      }
}
startApp()