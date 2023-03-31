/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";
import { ICarsRepository, ICreateCarDTO } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) { }

  async execute({
    name,
    category_id,
    description,
    daily_rate,
    available,
    license_plate,
    fine_amount,
    brand,
  }: ICreateCarDTO) {
    const carAlreadyExists = await this.carsRepository.findByLicensePlate(license_plate);

    if (carAlreadyExists) {
      throw new AppError("Car already exists!");
    }

    await this.carsRepository.create({
      name,
      category_id,
      description,
      daily_rate,
      available,
      license_plate,
      fine_amount,
      brand,
    });
  }
}

export { CreateCarUseCase };
