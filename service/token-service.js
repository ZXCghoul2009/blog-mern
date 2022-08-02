import jwt from "jsonwebtoken";
import Token from "../models/token.js";

class TokenService {
    generateTokens (payload) {
        const accessToken = jwt.sign(payload, 'jwt_access_token', {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, 'jwt_refresh_token', {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken (userId, refreshToken) {
        const tokenData = await Token.findOne({user: userId})
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save()
        }

        const token = await Token.create({user: userId, refreshToken})
        return token
    }
}

export default new TokenService();