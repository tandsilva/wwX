import  Sequelize  from 'sequelize';
import configDataBase from '../config/database'
import User from "../app/models/User";

const models =[User];
//toda vez que ultiizar uma model nao precisara ser feita nova conexao
class Database{
    constructor(){
        this.init();
    }
    init(){
        this.connection = new Sequelize(configDataBase);
        models.map((model)=>model.init(this.connection))
    }
}

export default new Database;