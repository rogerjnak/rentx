import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, password, email, driver_license } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    try {
      await createUserUseCase.execute({
        name,
        password,
        email,
        driver_license,
      });
    } catch (e) {
      return response.status(500).json({ error: "User already exists!" });
    }

    return response.status(201).send();
  }
}

export { CreateUserController };
