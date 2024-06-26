import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Resources } from "./resources";

@Entity()
export class Sylva {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  quantity!: number;

  @ManyToOne(() => Resources, resource => resource.sylva)
  resource!: Resources;
}

