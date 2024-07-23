import {Model} from "mongoose";

import {UserModel} from "../../domain/entity/user.schema.mongo";
import {IUserRepository} from "../../domain/repository/user.repository.interface";
import IUser from "../../domain/model/user.interface";
import {IUserDocument} from "../../domain/model/user.model"

class MongoUserRepository implements IUserRepository{

    private userModel:Model<IUserDocument>

    constructor(){
        this.userModel=UserModel
    }
    async save(user: IUserDocument): Promise<void> {
        // new instance object
        const newUser=new this.userModel(user)
        await newUser.save()
    }
    async findById(id: number): Promise<IUser | null> {
        const user=await  this.userModel.findOne({id})
        return user
        // return user ? user.toObject() : null;
    }


}

export default MongoUserRepository