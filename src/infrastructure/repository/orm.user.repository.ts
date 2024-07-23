import {Repository,getRepository} from 'typeorm'
import {User_ORM} from "../../domain/entity/user.entity.orm";
import IUser from "../../domain/model/user.interface";
import {IUserRepository} from "../../domain/repository/user.repository.interface";
import { useTypeorm } from '../database_connect/orm.db_connect_1';

class ORMUserRepository implements IUserRepository{

    // default state property
    /* private userRepository:Repository<User_ORM>

    constructor(){
        this.userRepository=getRepository(User_ORM)
    } */
    private userRepository:Repository<User_ORM>
    constructor(){
        this.userRepository=useTypeorm(User_ORM) as Repository<User_ORM>
    }
    
 

    async save(user: IUser): Promise<void> {
       const ormUser= this.userRepository.create(user);

       // logic for add before save() 
       await this.userRepository.save(ormUser);

    }
    async findById(id: number): Promise<IUser | null> {
     
        return await this.userRepository.findOneBy({id}) || null
    }

}
export default ORMUserRepository