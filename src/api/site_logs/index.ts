export default (app :any)=>{   

    app.get('/list-site-logs',require('./site_logListAll').default);
    app.post('/create-site-logs', require('./site_logCreate').default);
    app.get('/find-site-logs/:id', require('./site_logFind').default);
    
}