
import { databaseInit } from "../database/databaseConnections";

export default async function databaseMiddleWare(req:any,res : any,next : any){
    try {

        const database = await databaseInit();
        
        req.database = database;
        
    } catch (error) {

        
        
    } finally{
        next();
    }
}