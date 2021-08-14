import { getCustomRepository } from "typeorm";
import { compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({ email });
        if(!user) {
            throw new Error("Email/Password incorrect");
        }

        const passwordMatch = compareSync(password, user.password);
        if(!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        /*Criação do Token pelo método sign, primeiro parâmetro a referência do campo para gerar o Token segundo
        *Segundo parãmetro a Secret Key a palavra chave, e o terceiro parâmetro configurações e comportamentos
        *do meu Token;
        */
        const token = sign({
            email: user.email
        }, 'f79e6a7b562341ff6c4861f4e7a15e0f', {
            subject: user.id,
            expiresIn: '1d'
        });

        return token;
    }
}

export { AuthenticateUserService }