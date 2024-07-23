import dotenv from 'dotenv'

dotenv.config()

export const config={
    repository_type:process.env.REPOSITORY_TYPE || 'orm' ,// default 'orm' | 'or mongo'
    mongoUri:process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/sampleDb'// by default

}