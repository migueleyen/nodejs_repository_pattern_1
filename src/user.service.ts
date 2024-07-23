import { IUserDocument } from "./domain/model/user.model";
import IUser from "./domain/model/user.interface";
import {IUserRepository }from "./domain/repository/user.repository.interface";

class UserService{
    // Dependency Injection
    constructor(private userRepository:IUserRepository){}

    // Pass IUser Plain Object instead IUserDocument instance of Docunent
    async createUser(user:IUser):Promise<void>{
        await this.userRepository.save(user)

    }

    async getUser(id:number):Promise<IUser| void>{
        return await this.userRepository.findById(id)
    }
}

export default UserService