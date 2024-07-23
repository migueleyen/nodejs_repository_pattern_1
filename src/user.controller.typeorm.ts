import {Router} from 'express'
import { createUserRepository } from './infrastructure/repository/user.repository.factory';
import UserService from './user.service';
import { useTypeorm } from './infrastructure/database_connect/orm.db_connect_1';
import { User_ORM } from './domain/entity/user.entity.orm';
import { EntityTarget, ObjectLiteral } from 'typeorm';
import ORMUserRepository from './infrastructure/repository/orm.user.repository';

const controller=Router()



controller.post('/',async (req,res)=>{

    try {
        const { id, username, email } = req.body

        const user=new User_ORM()
        user.id=id;
        user.username=username;
        user.email=email;
        const  newuser=useTypeorm(User_ORM).create();
        // add logic before save
        await useTypeorm(User_ORM).save(newuser)
        

        res.status(201).send('User created');
      } catch (error) {
        res.status(500).send(error.message);
      }

})
controller.get('/:id',async(req,res)=>{

    try {
        const id = Number.parseInt(req.params.id);
        const user = await useTypeorm(User_ORM).findOneBy({id});
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(204).send('User not found');
        }
      } catch (error) {
        res.status(500).send(error.message);
      }
})
  export default controller