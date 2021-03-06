/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
  ) { }

  async execute({ user_id, avatar_file }: IRequest) {
    const user = await this.userRepository.findById(user_id);
    user.avatar = avatar_file;
    await this.userRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
