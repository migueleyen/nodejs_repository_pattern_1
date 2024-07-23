import IUser from "../model/user.interface"

// Abstract Implementation 
interface IUserRepository{
    save(user:IUser):Promise<void>
    findById(id:number):Promise<IUser|null>
}
export {IUserRepository}