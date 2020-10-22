import Site_LogsService from "../../services/site_logs/site_logsService"
import ApiResponseHandler from "../apiResponseHandler";

export default async(req: any, res :any, next: any )=>{
    try {

        // console.log('req,', req.body)

        const payload = await new Site_LogsService(req).findOne(req.params.id);

        await ApiResponseHandler.success(req,res,payload);
        
    } catch (error) {
        
        await ApiResponseHandler.error(req,res,error);
    }
}