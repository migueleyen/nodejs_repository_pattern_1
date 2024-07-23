import { IUserRepository } from "../../domain/repository/user.repository.interface";
import {config} from '../config/config'
import MongoUserRepository from "./mongo.user.repository";
import ORMUserRepository from "./orm.user.repository";
export const createUserRepository=():IUserRepository=>{

    if(config.repository_type==='mongo'){
        return new MongoUserRepository()
    }
    else{
        return new ORMUserRepository()
    }

}