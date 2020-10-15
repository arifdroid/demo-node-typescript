import SequelizeRepository from "../sequelizeRepository";
import lodash from 'lodash';
export default class WorkforcesRepository {

    static async create(data: any, options: any) {

        const transaction = await SequelizeRepository.getTransaction(options);

        // const find_rel_site_log = await options.database.site_logs.findByPk(data.workforces_site_log_id,{
        //     // where:{id:data.workforces_site_log_id},
        //     transaction
        // })

        // find_rel_site_log.setWorfor

        const workforces = await options.database.workforces.create({
            ...lodash.pick(data, [
                // 'siteLogsId',         
                'sub_con_name',
                'ethnicity',
                'number'
            ]),
            // workforces:[{...lodash.pick(data,[
            //     'site_log_id',

            // ])}]
        }, {

            transaction
        });

        // let check = await workforces.setWorkforces_site_log_id(data.workforces_site_log_id || null, { transaction });
        let check = await workforces.setSite_logs(data.siteLogsId || null, { transaction });

        console.log('\n\n=======\n')
        console.log('check data all relation', data)
        // console.log('check data relation', check)
        console.log('\n=======\n\n')

        // await workforces.setWorkforces_site_log_id(data.workforces_site_log_id|| null, {transaction});

        return workforces;
    }

    static async list_all(options: any) {



        const list_workforces = await options.database.workforces.findAll({}, {
            // transaction
        });

        return list_workforces;
    }
}