/* eslint-disable no-use-before-define */
import { getRepository, Repository } from "typeorm";
import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "@modules/cars/repositories/ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = this.repository.create({
      name,
      description,
    });
    this.repository.save(specification);
  }

  async list() {
    return this.repository.find();
  }

  async findByName(name: string) {
    return this.repository.findOne({ name });
  }
}

export { SpecificationRepository };
