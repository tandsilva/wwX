import { v4 } from "uuid";
//const { request, response } = require("./app");
import User from '../models/User'
class UserController{
    async store(request,response){
        const {name,email,password_hash,admin}= request.body;
        const user = await User.create({
            id:v4(),
            name,
            email ,
            password_hash,
            admin
          });
          return response.status(201).json({
            id:user.id,
            name,
            email,
            admin,
          });
    }
}
export default new UserController();
