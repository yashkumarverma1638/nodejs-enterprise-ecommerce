import bcrypt from "bcrypt";
import { UserRepository } from "../repositories/user.repository";
import { generateAccessToken } from "../utils/jwt";
import { AppError } from "../utils/app-error";
export class AuthService {
  private userRepository = new UserRepository();

  async register(email: string, password: string) {
    const existingUser = await this.userRepository.findByEmail(email);

    if (existingUser) {
      throw new AppError("User already exists", 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return this.userRepository.create(email, hashedPassword);
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new AppError("Invalid credentials", 401);
    }

    const accessToken = generateAccessToken(user.id, user.email);

    return {
      accessToken,
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }
}
