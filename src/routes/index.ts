import { Application, Response, Request } from 'express';
import AuthRouters from './Auth.routes';
function Routers(app: Application) {
  app.use('/api/auth', AuthRouters);
  app.use('/', (req: Request, res: Response) => res.send('Hello'));
}

export default Routers;
