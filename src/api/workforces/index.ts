export default async  (app :any)=>{

    app.get(`/list-workforces`, require('./workforcesListAll').default);
    app.post(`/create-workforces`, require('./workforcesCreate').default);

}