import  Sequelize  from 'sequelize';
import configDataBase from '../config/database'
import User from "../app/models/User";
import Product from '../app/models/Product';
import Category from '../app/models/Category';
const models =[User,Product,Category];//para mapear 
//toda vez que ultiizar uma model nao precisara ser feita nova conexao
//toda vez que criar uma model precisa ser ajustado o index
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