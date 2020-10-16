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
                    'phone',
                    'hashed_password'
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



        const user = await options.database.users.findAll(
            {

            }
            ,
            {
                // transaction,
            },
        );


        return user;

    }

    static async findByPhone(phone: any, options: any) {
        return await options.database.users.findOne(
            {
                where: {phone}
            });
    }


    static async findPassword(id: any, options: any) {
        let user =  await options.database.users.findOne(
            {
                where: {id}
            });

        return user.hashed_password    
    }
}