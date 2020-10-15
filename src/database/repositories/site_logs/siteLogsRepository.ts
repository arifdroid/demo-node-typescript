import SequelizeRepository from '../sequelizeRepository';
import lodash from 'lodash';

export default class SiteLogsRepository {

    static async create(data: any, options: any) {

        const transaction = await SequelizeRepository.getTransaction(options);

        const site_logs = await options.database.site_logs.create(
            {
                ...lodash.pick(data, [
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
                ]),
                tools: [{
                    ...lodash.pick(data.tools[0], [
                        'tool_name',
                        'number'
                    ])
                },{
                    ...lodash.pick(data.tools[1], [
                        'tool_name',
                        'number'
                    ])
                }]

            }, {
            transaction,
            include: [{
                model: options.database.tools,
                as: 'tools'
            }]
        })

        // console.log('\n\n ===== site log create')

        // console.log('\n site_logs -> ', site_logs)
        // console.log('====\n\n')

        return site_logs;
    }


    static async list_all(options: any) {

        // const transaction = await SequelizeRepository.getTransaction(options);

        // const site_logs_list = await options.database.site_logs.findAll({}, {
        //     // include:[options.database.workforces]
        //     include: [{
        //         as: 'site_logs',
        //         model: options.database.tools,
                
        //     }]
        //     // transaction
        // });


        const site_logs_list = await options.database.site_logs.findAll( {
            // include:[options.database.workforces]
            include: [{
                as: 'tools',
                model: options.database.tools,
                
            }]
            // transaction
        });

        return site_logs_list;
    }

}