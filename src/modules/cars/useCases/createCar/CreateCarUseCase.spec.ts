import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase";

describe("Create Car", () => {
  let createCarUseCase: CreateCarUseCase;
  let carsRepository: ICarsRepository;

  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  test("should be able to create a car", async () => {
    await createCarUseCase.execute({
      name: "Car Name",
      description: "Car Desc",
      daily_rate: 100,
      available: true,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Car Brand",
    });

    const car = await carsRepository.findByName("Car Name");

    expect(car).toHaveProperty("id");
  });

  test("should not be able to create a car with an existent license_plate", async () => {
    await createCarUseCase.execute({
      name: "Car Name",
      description: "Car Desc",
      daily_rate: 100,
      available: true,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Car Brand",
    });

    expect(async () => {
      await createCarUseCase.execute({
        name: "Car Name2",
        description: "Car Desc",
        daily_rate: 100,
        available: true,
        license_plate: "ABC-1234",
        fine_amount: 60,
        brand: "Car Brand",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
