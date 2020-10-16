import app from "..";

export default (app: any)=>{
    app.post(`/auth/sign-up`, require('./signUp').default);
}