/* eslint-disable prettier/prettier */
import { injectable, inject } from "tsyringe";
import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import { SpecificationRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationRepository";


@injectable()
class ListSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: SpecificationRepository
    ) { }

  async execute(): Promise<Specification[]> {
    return this.specificationRepository.list();
  }
}

export { ListSpecificationUseCase };
