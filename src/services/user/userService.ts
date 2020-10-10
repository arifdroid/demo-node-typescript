import SequelizeRepository from "../../database/repositories/sequelizeRepository";
import UserRepository from "../../database/repositories/user/userRepository";

export default class UserService{
    options : any;


    constructor(options :any){
        this.options = options;
    }

    async create(data:any){

        const transaction = await SequelizeRepository.createTransaction(this.options.database);   

        try {

            const record = await UserRepository.create(data,{
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

        const transaction = await SequelizeRepository.createTransaction(this.options.database);   

        try {

            const record = await UserRepository.list_all({
                ...this.options, transaction
            })

            await SequelizeRepository.commitTransaction(transaction);

            return record;
            
        } catch (error) {

            await SequelizeRepository.rollbackTransaction(transaction);

            throw error;
            
        }
    }   
}