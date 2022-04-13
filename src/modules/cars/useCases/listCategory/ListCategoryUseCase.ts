/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";
import { Category } from "@modules/cars/entities/Category";
import { CategoriesRepository } from "@modules/cars/repositories/implementations/CategoriesRepository";

@injectable()
class ListCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: CategoriesRepository
  ) { }

  async execute(): Promise<Category[]> {
    return this.categoriesRepository.list();
  }
}

export { ListCategoryUseCase };
