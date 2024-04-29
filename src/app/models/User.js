import  Sequelize ,{Model} from "sequelize";
import  bcrypt from 'bcrypt'
class User extends Model{
    //foi usado static para o metodo ficar disponivel sem stanciar
    static init(sequelize){
        super.init({
            name:Sequelize.STRING,
            email:Sequelize.STRING,
            password_hash: Sequelize.VIRTUAL,
            password_hash:Sequelize.STRING,
            admin:Sequelize.BOOLEAN,

        },
        {
            sequelize,
        },
    );
    this.addHook('beforeSave',async(user)=>{
        if(user.password_hash){
            user.password_hash = await bcrypt.hash(user.password_hash,8);
        }
    });
    return this;
    }
  async  comparePassword(password_hash){
    return  bcrypt.compare(password_hash , this.password_hash);
    }
}
export default User;
//mapeamento para persistir dados