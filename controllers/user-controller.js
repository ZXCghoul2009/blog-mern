import userService from "../service/user-service.js";

class UserController {
    async signup(req, res, next)  {
        try {
            const {email, userName, password} = req.body
            const userData = await userService.signup(email, userName, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge:30 * 24 * 3600 * 1000, httpOnly: true})
            return res.json(userData)
        } catch(e) {
            console.log(e)
        } 
    }
    async login(req, res, next)  {
        try {

        } catch(e) {
            
        }
    }
    async logout(req, res, next)  {
        try {

        } catch(e) {
            
        }
    }
    async activate(req, res, next)  {
        try {

        } catch(e) {
            
        }
    }
    async refresh(req, res, next)  {
        try {

        } catch(e) {
            
        }
    }
    async getUsers(req, res, next)  {
        try {

        } catch(e) {
            
        }
    }
}

export default new UserController();