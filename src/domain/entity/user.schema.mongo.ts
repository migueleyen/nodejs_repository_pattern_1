import {Document, Schema,model} from 'mongoose'
import {IUserDocument} from '../model/user.model'



const UserSchema=new Schema<IUserDocument>({

    id:{
        type:Number,
        unique:true
    },
    username:{
        type:String,
    },
    email:{
        type:String
    }
})

const UserModel=model<IUserDocument>("users",UserSchema)

export {UserModel}