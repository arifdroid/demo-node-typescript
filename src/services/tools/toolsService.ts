import SequelizeRepository from "../../database/repositories/sequelizeRepository";
import SiteLogsRepository from "../../database/repositories/site_logs/siteLogsRepository";
import ToolsRepository from "../../database/repositories/tools/toolsRepository";

export default class ToolsService{
    options:any;

    constructor(options: any){
        this.options = options;
    }

    async create(data:any){
        
        const transaction = await SequelizeRepository.createTransaction(this.options.database);

        try {

            const record = await ToolsRepository.create(data,{
                ...this.options, transaction
            })
            await SequelizeRepository.commitTransaction(transaction);

            return record;
            
        } catch (error) {   
            
            await SequelizeRepository.rollbackTransaction(transaction);

            throw error;
        }

    }

    async list_all(){

        
        try {

            const site_logs_list = await ToolsRepository.list_all({
                ...this.options, 
            });
            
            return site_logs_list;
            
        } catch (error) {
            
            
            throw error;
        }

    }
    

    
}