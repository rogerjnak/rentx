import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  list(): Promise<Specification[]>;
  findByName(name: string): Promise<Specification>;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
