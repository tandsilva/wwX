import  Sequelize ,{Model} from "sequelize";
import  bcrypt from 'bcrypt'
class User extends Model{
    //foi usado static para o metodo ficar disponivel sem stanciar
    static init(sequelize){
        super.init({
            name:Sequelize.STRING,
            email:Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password:Sequelize.STRING,
            admin:Sequelize.BOOLEAN,

        },
        {
            sequelize,
        },
    );
    this.addHook('beforeSave',async(user)=>{
        if(user.password){
            user.password= await bcrypt.hash(user.password,12);
        }
    });
    return this;
    }
}
export default User;
//mapeamento para persistir dados