import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Resources } from "./resources";

@Entity()
export class Refinables {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @Column()
  public craft_cost!: number;

  @ManyToOne(() => Resources, (resource) => resource.raw)
  raw!: Resources[];

  @ManyToOne(() => Resources, (resource) => resource.refinable, { nullable: true })
  creates!: Resources[]
}


