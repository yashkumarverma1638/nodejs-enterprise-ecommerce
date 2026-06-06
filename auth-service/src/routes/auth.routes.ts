import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { asyncHandler } from "../utils/async-handler";
import { validate } from "../middlewares/validate.middleware";
import { registerSchema, loginSchema } from "../validators/auth.validator";

const router = Router();

const authController = new AuthController();

router.post(
  "/register",
  validate(registerSchema),
  asyncHandler(authController.register),
);

router.post(
  "/login",
  validate(loginSchema),
  asyncHandler(authController.login),
);
export default router;
