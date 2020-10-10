import SequelizeRepository from "../sequelizeRepository";
import lodash from 'lodash';
export default class WorkforcesRepository{

    static async create(data: any, options: any){

        const transaction = await SequelizeRepository.getTransaction(options);

        const workforces = await options.database.workforces.create({
            ...lodash.pick(data,[
                'sub_con_name',
                'ethnicity',
                'number'
            ])
        },{
            transaction
        });

        return workforces;
    }

    static async list_all(options: any){

        const transaction = await SequelizeRepository.getTransaction(options);

        const list_workforces = await options.database.workforces.findAll({},{
            transaction
        });

        return list_workforces;
    }
}