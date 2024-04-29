import * as Yup from 'yup';
import User from '../models/User'
class SessionController {
    async store(request, response) {
        const schema = Yup.object({
            email: Yup.string().email().required(),
            password_hash: Yup.string().min(8).required(),
        });
        const isValid = await schema.isValid(request.body);
        const emailOrPasswordIncorrect=()=>{
             response
            .status(401)
            .json({ error: "Insira um e-mail ou password valido" });
        }

        if (!isValid) {
         return  emailOrPasswordIncorrect();
        }
        const { email, password_hash } = request.body;
        const user = await User.findOne({
            where: {
                email,
            }
        });
        if (!user) {
         return  emailOrPasswordIncorrect();
        }
        const isSamePassword = await user.comparePassword(password_hash)
        //console.log(isSamePassword)
        if (!isSamePassword) {
          return  emailOrPasswordIncorrect();
        }



        return response.status(201).json({ id: user.id ,name: user.name,email,
        admin: user.admin,
    })
    }
};


export default new SessionController();