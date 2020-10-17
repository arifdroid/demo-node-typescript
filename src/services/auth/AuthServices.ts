import SequelizeRepository from "../../database/repositories/sequelizeRepository";
import UserRepository from "../../database/repositories/user/userRepository";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getConfig } from "../../common/config";
import Error400 from "../../common/errors/Error400";

const BCRYPT_SALT_ROUNDS = 12;

export default class AuthServices {

    static async signUp(data: any, options: any) {

        const transaction = await SequelizeRepository.createTransaction(options.database);

        try {
            const { name, position, company, email, phone, pwd } = data;

            console.log(' log phone', phone)
            const existingUser = await UserRepository.findByPhone(phone,
                options
            );

            const hashed_password = await bcrypt.hash(pwd, BCRYPT_SALT_ROUNDS);

            if (existingUser) {

                throw new Error400('user existed');

            } else { //signup new user


                let data = { name, position, company, email, phone, hashed_password }

                const newUser = await UserRepository.create(data, {
                    ...options, transaction
                });

                const token = jwt.sign(
                    { id: `${newUser.id}_${newUser.phone}` },
                    getConfig().AUTH_JWT_SECRET,
                    { expiresIn: getConfig().AUTH_JWT_EXPIRES_IN },
                );

                await SequelizeRepository.commitTransaction(
                    transaction,
                );

                return token
            }





        } catch (error) {

            await SequelizeRepository.rollbackTransaction(transaction);

            throw error;

        }
    }


    static async signIn(data: any, options: any) {

        const { phone, pwd } = data;

        const transaction = await SequelizeRepository.createTransaction(options.database);

        try {

            const user = await UserRepository.findByPhone(phone, options);

            if (!user) throw new Error400('user not found');

            const currentPassword = await UserRepository.findPassword(user.id, options);

            if (!currentPassword) throw new Error400('is this the correct username and password?');


            const passwordMatch = await bcrypt.compare(pwd, currentPassword);

            if (!passwordMatch) throw new Error400('is this the correct username and password?');

            const token = jwt.sign(
                { id: `${user.id}_${user.phone}` },
                getConfig().AUTH_JWT_SECRET,
                { expiresIn: getConfig().AUTH_JWT_EXPIRES_IN },
            );

            await SequelizeRepository.commitTransaction(
                transaction,
            );

            return token;

        } catch (error) {

            await SequelizeRepository.rollbackTransaction(
                transaction,
            );

            throw error;

        }
    }

    static async findByToken(token : any, options: any){
        return new Promise((resolve,reject)=>{

            jwt.verify(
                token,
                getConfig().AUTH_JWT_SECRET,
                (err :any,decoded : any)=>{
                    if(err){
                        reject(err);
                        return;
                    }

                    let id = decoded.id.split('_')[0];
                    let phone = decoded.id.split('_')[1];

                    UserRepository.findByIDandPhone(id,phone, options).then(
                        (user)=>{

                            console.log()
                            resolve(user);
                        }
                    ).catch(e=>reject(e))

                    
                 

                }
            )
        })
    }
}