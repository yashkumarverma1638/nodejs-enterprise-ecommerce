import bcrypt from "bcrypt";
import { UserRepository } from "../repositories/user.repository";

export class AuthService {
  private userRepository = new UserRepository();

  async register(email: string, password: string) {
    const existingUser = await this.userRepository.findByEmail(email);

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return this.userRepository.create(email, hashedPassword);
  }
}
