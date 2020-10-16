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
              
                tools: data.tools,
                workforces:data.workforces,
                materials: data.materials

            

            }, {
            transaction,
            include: [{
                model: options.database.tools,
                as: 'tools'
            },{
                model:options.database.workforces,
                as:'workforces'
            },{
                model:options.database.materials,
                as:'materials'
            }]
        })

        return site_logs;
    }


    static async list_all(options: any) {

        const site_logs_list = await options.database.site_logs.findAll( {            
            
            include: [{
                as: 'tools',
                model: options.database.tools,
                
            },{
                as:'workforces',
                model:options.database.workforces
            },{
                as:'materials',
                model:options.database.materials
            }]
            
        });

        return site_logs_list;
    }

}