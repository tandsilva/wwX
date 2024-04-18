import { Router } from "express";

//const { request, response } = require("./app");
import User from './app/models/User';
const routes = new Router();

routes.get("/",async (request, response) =>{
  const user = await User.create({
    name:'MAristela',
    email: 'aldrinmarques.s.i@gmail.com',
    password_hash:'Educacional9939'
  });
  return response.status(201).json(user);
});

export default routes;
