import SequelizeRepository from "../sequelizeRepository";
import lodash from 'lodash';

export default class UserRepository {

    static async create(data: any, options: any) {

        const transaction = await SequelizeRepository.getTransaction(options);

        const user = await options.database.users.create(
            {
                ...lodash.pick(data, [
                    'name',
                    'position',
                    'company',
                    'email',
                    'phone'
                ])
            }
            ,
            {
                transaction,
            },
        );



        return user;

    }

    static async list_all(options: any) {

        const transaction = await SequelizeRepository.getTransaction(options);

        const user = await options.database.users.findAll(
            {
                
            }
            ,
            {
                transaction,
            },
        );


        return user;

    }
}