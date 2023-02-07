import { Application } from 'express';
import AuthRouters from './Auth.routes';
function Routers(app: Application) {
  app.use('/api/auth', AuthRouters);
}

export default Routers;
