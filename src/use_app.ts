import {Express} from 'express'

const useSetup=(app:Express,express:any)=>{

    app
    .use(express.json())
}

export {useSetup}