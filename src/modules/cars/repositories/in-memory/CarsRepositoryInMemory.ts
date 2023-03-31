import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository, ICreateCarDTO } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    name,
    category_id,
    description,
    daily_rate,
    available,
    license_plate,
    fine_amount,
    brand,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      name,
      category_id,
      description,
      daily_rate,
      available,
      license_plate,
      fine_amount,
      brand,
    });

    this.cars.push(car);
  }
  async list(): Promise<Car[]> {
    throw new Error("Method not implemented.");
  }
  async findByName(name: string): Promise<Car> {
    return this.cars.find((car) => car.name === name);
  }
  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find((car) => car.license_plate === license_plate);
  }
}

export { CarsRepositoryInMemory };
