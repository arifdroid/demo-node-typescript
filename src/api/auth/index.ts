import app from "..";

export default (app: any)=>{
    app.post(`/auth/sign-up`, require('./signUp').default);
    app.post(`/auth/sign-in`, require('./signIn').default);
}