
// import models from '../models';

const models = require('../models');

models.sequelize.sync({force:true}).
then(()=>{

    console.log('\n\ncreating DB models\n\n')
    process.exit();


})
.catch((error : any)=>{
    console.log('error is ->', error)
})