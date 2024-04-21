import  Sequelize ,{Model} from "sequelize";

class User extends Model{
    //foi usado static para o metodo ficar disponivel sem stanciar
    static init(sequelize){
        super.init({
            name:Sequelize.STRING,
            email:Sequelize.STRING,
            password_hash:Sequelize.STRING,
            admin:Sequelize.BOOLEAN,

        },
        {
            sequelize,
        },
    );
    }
}
export default User;
//mapeamento para persistir dados