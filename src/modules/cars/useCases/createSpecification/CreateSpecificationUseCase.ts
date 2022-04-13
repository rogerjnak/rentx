import { inject, injectable } from "tsyringe";
import { SpecificationRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: SpecificationRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }
    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
