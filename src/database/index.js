import  Sequelize  from 'sequelize';
import configDataBase from '../config/database'
import User from "../app/models/User";
import Product from '../app/models/Product';
import Category from '../app/models/Category';
import mongoose from 'mongoose';
const models =[User,Product,Category];//para mapear 
//toda vez que ultiizar uma model nao precisara ser feita nova conexao
//toda vez que criar uma model precisa ser ajustado o index
class Database{
    constructor(){
        this.init();
        this.mongo();
    }
    init(){
        this.connection = new Sequelize(configDataBase);
        models.map((model) => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models) ,
    );
        }

    mongo(){
        this.mongoConnection =mongoose.connect('mongodb://localhost:27017/produtos');


    }





}

export default new Database();