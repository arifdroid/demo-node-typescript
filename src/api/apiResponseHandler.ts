export default class ApiResponseHandler{
    
    static async success(req : any,res : any, payload :any){
        if(payload !== undefined){
            res.status(200).send(payload);
        }else{
            res.sendStatus(200);
        }

    }

    static async error(req: any, res: any, error: any){
        if(error && [400, 401, 403, 404].includes(error.code)){
            res.status(error.code).send(error.message);
        }else{
            res.status(500).send(error.message);
        }


    }
}