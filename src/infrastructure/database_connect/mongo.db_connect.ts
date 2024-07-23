import mongoose from 'mongoose'
import {config} from '../config/config'
const mongooseConnect=async():Promise<void>=>{

    try {
        await mongoose.connect(config.mongoUri)
          console.log('Connect to Mongo Database')
    } catch (error) {
        console.error(`MongoDB: An error  occurred !`)
    }
}
export {mongooseConnect}