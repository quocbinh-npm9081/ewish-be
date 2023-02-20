import { Request, Response } from 'express';
import User from '@/models/User';
import bcrypt from 'bcrypt';
class AuthControllers {
  public async register(req: Request, res: Response) {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(200).json({ msg: 'VUi long nhap day du' });
    }
    const passwordHashed = await bcrypt.hash(password, 10);
    const newUser = new User({
      username: username,
      email: email,
      password: passwordHashed,
    });
    try {
      const savedUser = await newUser.save();
      res.status(201).json({ msg: 'dang ki thanh cong', user: savedUser });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: error });
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) res.status(201).json({ msg: 'Nguoi dung khong ton tai' });
      else {
        const isPassword = await bcrypt.compare(password, user?.password);
        if (isPassword) res.status(201).json({ msg: 'Dang nhap thanh cong' });
        else res.status(201).json({ msg: 'sai mat khau' });
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AuthControllers();
