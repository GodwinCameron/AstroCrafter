import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Resources } from "./resources";

@Entity()
export class Desolo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  quantity!: number;

  @ManyToOne(() => Resources, resource => resource.desolo)
  resource!: Resources;
}

