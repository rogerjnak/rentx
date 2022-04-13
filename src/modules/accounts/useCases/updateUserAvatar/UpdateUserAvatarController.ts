import { Request, Response } from "express";
import { container } from "tsyringe";
import { deleteFile } from "@utils/file";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const avatar_file = request.file.filename;
    await deleteFile(request.file.path);
    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);
    await updateUserAvatarUseCase.execute({ user_id: id, avatar_file });

    return response.send();
  }
}

export { UpdateUserAvatarController };
