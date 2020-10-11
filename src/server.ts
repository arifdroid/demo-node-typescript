require('dotenv').config();
import api from './api';


// const env = yenv('env.yaml',{env:'development'});
const PORT = process.env.PORT;

api.listen(PORT, ()=>{
    console.log(`\n listening on port : ${PORT}\n`);
});
