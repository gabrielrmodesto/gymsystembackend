import {Router} from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.get('/login',UserController.index);

export default routes;
