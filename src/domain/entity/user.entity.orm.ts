import {Entity,PrimaryGeneratedColumn,Column, PrimaryColumn} from 'typeorm';
import IUser from '../model/user.interface';

@Entity({name:'orm_users'}) // Rename table name 
export class User_ORM implements IUser{
   
    // @PrimaryGeneratedColumn() autoincrement and unique
    @PrimaryColumn() // manual insert and unique 
    id:number;

    @Column()
    username:string;

    @Column()
    email:string;

    
}
