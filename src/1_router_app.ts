import {Express} from 'express'
import { createUserRepository } from './infrastructure/repository/user.repository.factory';
import UserService from './user.service';

const routerSetup=(app:Express)=>{

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
}

export {routerSetup}