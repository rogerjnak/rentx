import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Category } from "./Category";

@Entity()
class Car {
  @Column()
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  daily_rate: number;
  @Column()
  available: boolean;
  @Column()
  license_plate: string;
  @Column()
  fine_amount: number;
  @Column()
  brand: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @Column()
  category_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    this.id = uuidV4();
    this.available = true;
  }
}

export { Car };
