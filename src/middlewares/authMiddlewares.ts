import { getConfig } from "../common/config"
import AuthServices from "../services/auth/AuthServices";

export async function authMiddleware(req:any,res:any,next:any){
   
    if(getConfig().QUERY_API_KEY === req.query.api_key){
        if(( getConfig().AUTH_CHECK_1 == req.path || getConfig().AUTH_CHECK_2 == req.path || getConfig().AUTH_CHECK_3 == req.path)){

        
            return next();
        }else{

        }   
    }else{
        return res.sendStatus(401);
    }
    
    
    const isTokenEmpty =
    (!req.headers.authorization|| !req.headers.authorization.startsWith('Bearer ')) && !(req.cookies && req.cookies.__session)

    
    if(isTokenEmpty){         
        return res.sendStatus(401);
    }

    

    let idToken :any;

    if(req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer ')){
            idToken = req.headers.authorization.split('Bearer ')[1];
     }else if(req.cookies){
            idToken = req.cookies.__session;
    }

    try {

     
     const currentUser: any = await AuthServices.findByToken(
        idToken,
        req,
      );

     req.currentUser = currentUser;

     next();
        
    } catch (error) {
        return res.sendStatus(400);
    }

     
}