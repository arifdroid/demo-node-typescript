import Site_LogsService from "../../services/site_logs/site_logsService"
import ApiResponseHandler from "../apiResponseHandler";

export default async(req: any, res :any, next: any )=>{
    try {

        const payload = await new Site_LogsService(req).list_all();

        await ApiResponseHandler.success(req,res,payload);
        
    } catch (error) {
        
        await ApiResponseHandler.error(req,res,error);
    }
}