import UserService from "../../services/user/userService"
import WorkforceService from "../../services/workforces/workforcesService";
import ApiResponseHandler from "../apiResponseHandler";

export default async(req : any,res : any, next : any)=>{
    try {

        const payload = await new WorkforceService(req).create(req.body.data);

        await ApiResponseHandler.success(req,res,payload);
        
    } catch (error) {
        await ApiResponseHandler.error(req,res,error);
    }
}