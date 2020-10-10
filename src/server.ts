import yenv from 'yenv';
import api from './api';


const env = yenv('env.yaml',{env:'development'});

api.listen(env.PORT, ()=>{
    console.log(`\n listening on port : ${env.PORT}\n`);
});
