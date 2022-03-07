import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = this.repository.create({
      name,
      description,
    });
    this.repository.save(category);
  }

  async list() {
    return this.repository.find();
  }

  async findByName(name: string) {
    const category = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoriesRepository };
