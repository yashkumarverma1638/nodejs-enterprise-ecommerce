import { Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";

export class UserController {
  me = async (req: AuthRequest, res: Response) => {
    res.status(200).json({
      success: true,
      data: req.user,
    });
  };
}
