import { Request, Response } from 'express';

class AuthControllers {
  public register(req: Request, res: Response) {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(200).json({ msg: 'VUi long nhap day du' });
    }
    res.status(200).json({ msg: 'dang ki thanh cong' });
  }
}

export default new AuthControllers();
