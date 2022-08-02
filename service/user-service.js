import User  from "../models/User.js"
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import mailService from "./mail-service.js";
import tokenService from "./token-service.js";
import UserDto from "../dtos/user-dto.js";
import token from "../models/token.js";

class UserService {
    async signup(email, userName, password) {
        const candidate = await User.findOne({email, userName})
        if (candidate) {
            throw new Error (`Пользователь с таким ${email || userName} уже зарегистрирован`)
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const activationLink = uuidv4()
        const user = await User.create({email, userName, password: hashPassword, activationLink})
        await mailService.sendActivationMail(email, activationLink)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        
        return {
            ...tokens,
            user: userDto
        }
    }

    
}

export default new UserService();