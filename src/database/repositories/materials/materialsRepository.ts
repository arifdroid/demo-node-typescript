import SequelizeRepository from "../sequelizeRepository";
import lodash from 'lodash';
export default class MaterialsRepository{

    static async create(data: any, options: any){

        const transaction = await SequelizeRepository.getTransaction(options);

        const workforces = await options.database.materials.create({
            ...lodash.pick(data,[
                'tool_name',
                'number',                
            ])
        },{
            transaction
        });

        return workforces;
    }

    static async list_all(options: any){

        const transaction = await SequelizeRepository.getTransaction(options);

        const list_workforces = await options.database.materials.findAll({},{
            transaction
        });

        return list_workforces;
    }
}