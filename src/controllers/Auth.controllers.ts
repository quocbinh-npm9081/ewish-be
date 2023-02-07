import { Request, Response } from 'express';

class AuthControllers {
  public async register(req: Request, res: Response) {
    res.send('register home page');
  }
}

export default new AuthControllers();
