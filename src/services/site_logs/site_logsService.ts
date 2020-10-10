import SequelizeRepository from "../../database/repositories/sequelizeRepository";
import SiteLogsRepository from "../../database/repositories/site_logs/siteLogsRepository";

export default class Site_LogsService{
    options:any;

    constructor(options: any){
        this.options = options;
    }

    async create(data:any){
        
        const transaction = await SequelizeRepository.createTransaction(this.options.database);

        try {

            const record = await SiteLogsRepository.create(data,{
                ...this.options, transaction
            })

            // console.log('\n\n ===== site log create record')

            // console.log('\n record -> ', record)
            // console.log('====\n\n')

            await SequelizeRepository.commitTransaction(transaction);

            return record;
            
        } catch (error) {   
            
            await SequelizeRepository.rollbackTransaction(transaction);

            throw error;
        }

    }

    async list_all(){

        const transaction = SequelizeRepository.createTransaction(this.options.database);

        try {

            const site_logs_list = await SiteLogsRepository.list_all({
                ...this.options, transaction
            });
            
            return site_logs_list;
            
        } catch (error) {
            
            await SequelizeRepository.rollbackTransaction(transaction);
            throw error;
        }

    }
    

    
}