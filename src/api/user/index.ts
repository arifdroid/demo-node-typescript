export default (app : any)=>{

    app.post('/create-user',require('./userCreate').default);
    app.get('/list-users',require('./userListAll').default);
}