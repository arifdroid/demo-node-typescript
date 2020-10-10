export default (app :any)=>{   

    app.get('/list-materials',require('./materialsListAll').default);
    app.post('/create-materials', require('./materialsCreate').default);
    
}