import { Router ,Request,Response} from "express";
import MongoUserRepository from "./infrastructure/repository/mongo.user.repository";
import UserService from "./user.service";
import { UserModel } from "./domain/entity/user.schema.mongo";

const controller=Router()


controller.post('/',async (req:Request,res:Response)=>{
    
  
    try {
        const { id, username, email } = req.body

        const newUser=new UserModel({
          id,
          username,
          email
        });
     

        await newUser.save();
        res.status(201).send('User created');
      } catch (error) {
        res.status(500).send(error.message);
      }

})
.get('/:id',async(req,res)=>{
  
    try {
        const id = Number.parseInt(req.params.id);
        const user = await UserModel.findOne({id});
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