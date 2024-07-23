import express from 'express'
import { initSetup } from './init_app';
import { useSetup } from './use_app';
import { routerSetup } from './router_app';

const app=express();

const startApp=async()=>{
    try {
        await initSetup(app)
        useSetup(app,express)
        routerSetup(app)
    } catch (error) {
        console.error('Error starting the application:', error);
    }


}
void startApp()