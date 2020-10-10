import ToolsService from "../../services/tools/toolsService";
import UserService from "../../services/user/userService"
import ApiResponseHandler from "../apiResponseHandler";

export default async(req : any,res : any, next:any)=>{
    try {

        const payload = await new ToolsService(req).list_all();

        await ApiResponseHandler.success(req,res,payload);
        
    } catch (error) {
        await ApiResponseHandler.error(req,res,error);
    }
}