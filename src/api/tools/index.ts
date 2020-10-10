export default (app : any)=>{

    app.post('/create-tools',require('./toolsCreate').default);
    app.get('/list-tools',require('./toolsListAll').default);
}