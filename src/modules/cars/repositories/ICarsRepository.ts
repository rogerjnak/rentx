import { Car } from "../infra/typeorm/entities/Car";

interface ICreateCarDTO {
  name: string;
  description: string;
  daily_rate: number;
  available: boolean;
  license_plate: string;
  category_id: string;
  fine_amount: number;
  brand: string;
}

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  list(): Promise<Car[]>;
  findByName(name: string): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>;
}

export { ICarsRepository, ICreateCarDTO };
