import MaterialsRepository from "../../database/repositories/materials/materialsRepository";
import SequelizeRepository from "../../database/repositories/sequelizeRepository";

export default class MaterialsService{
    options:any;

    constructor(options: any){
        this.options = options;
    }

    async create(data:any){
        
        const transaction = await SequelizeRepository.createTransaction(this.options.database);

        try {

            const record = await MaterialsRepository.create(data,{
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

            const site_logs_list = await MaterialsRepository.list_all({
                ...this.options, 
            });
            
            return site_logs_list;
            
        } catch (error) {
            
            
            throw error;
        }

    }
    

    
}