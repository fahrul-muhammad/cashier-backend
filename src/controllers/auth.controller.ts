import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { signToken } from "../helpers/jwt";
import { sendResponse } from "../helpers/standardResponse.helper";
import AuthRepository from "../repository/auth.repository";

class AuthController {
  constructor(private authRepo: AuthRepository) {}

  register = async (req: Request, res: Response) => {
    const { username, email, password_hash } = req.body;

    const hashed = await bcrypt.hash(password_hash, 10);
    const user = await this.authRepo.createUser(username, email, hashed);

    return sendResponse(res, 201, user);
  };

  login = async (req: Request, res: Response) => {
    const { email, password_hash } = req.body;

    const user = await this.authRepo.findByEmail(email);
    if (!user) throw new Error("User not found");

    const isValid = await bcrypt.compare(password_hash, user.password_hash);
    if (!isValid) throw new Error("Wrong password");

    const token = signToken({ id: user.id, email: user.email });

    return sendResponse(res, 200, {
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  };
}

export default AuthController;
