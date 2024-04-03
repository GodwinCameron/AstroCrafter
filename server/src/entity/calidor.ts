import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Resources } from "./resources";

@Entity()
export class Calidor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  quantity!: number;

  @ManyToOne(() => Resources, resource => resource.calidor)
  resource!: Resources;
}

