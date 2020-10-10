import SequelizeRepository from '../sequelizeRepository';
import lodash from 'lodash';

export default class SiteLogsRepository {

    static async create(data: any, options: any) {

        const transaction = await SequelizeRepository.getTransaction(options);

        const site_logs = await options.database.site_logs.create(
            {
                ...lodash.pick(data,[
                    'project_name',
                    'location',
                    'contractor',
                    'contractor_no',
                    'weather',
                    'rain_start',
                    'rain_stop',
                    'site_condition',
                    'work_done',
                    'work_delayed',
                    'instructions',
                    'visitor',
                    'test_done',
                    'site_supervisor_comment',
                    'status',
                    'date'
                ])

            }, {
            transaction
        })

        // console.log('\n\n ===== site log create')

        // console.log('\n site_logs -> ', site_logs)
        // console.log('====\n\n')

        return site_logs;
    }


    static async list_all(options: any){

        const transaction = await SequelizeRepository.getTransaction(options);

        const site_logs_list = await options.database.site_logs.findAll({},{
            transaction
        });

        return site_logs_list;
    }

}