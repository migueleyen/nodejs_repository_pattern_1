import {Express} from 'express'
import { createUserRepository } from './infrastructure/repository/user.repository.factory';
import UserService from './user.service';

import mongooseUsersRouter from './user.controller.mongoose';
import typeormUsersRouter from './user.controller.typeorm'
const routerSetup=(app:Express)=>{
   
  
    app.get('/', async (req, res) => {
      res.send('Home Page')
        

    })
    .use('/api/mongoose/users',mongooseUsersRouter)
    .use('/api/typeorm/users',typeormUsersRouter)


   
}

export {routerSetup}