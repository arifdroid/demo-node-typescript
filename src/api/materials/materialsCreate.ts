import MaterialsService from "../../services/materials/materialsService";
import ApiResponseHandler from "../apiResponseHandler";


export default async(req: any, res :any, next: any)=>{
    try {

        const payload = await new MaterialsService(req).create(req.body.data);

        await ApiResponseHandler.success(req,res,payload);
        
    } catch (error) {
        
        await ApiResponseHandler.error(req,res,error);
        
    }
}