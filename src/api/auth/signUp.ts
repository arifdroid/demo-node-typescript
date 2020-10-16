import AuthServices from '../../services/auth/AuthServices';
import ApiResponseHandler from '../apiResponseHandler';

export default async (req: any, res: any, next:any) => {
    try {

        const payload = await AuthServices.signUp(
            req.body.data,
            req
        )
        await ApiResponseHandler.success(req, res, payload);
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
}