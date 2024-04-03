import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Sylva } from "./sylva";
import { Desolo } from "./desolo";

@Entity()
export class Resources {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @Column()
  public category!: string;

  @Column()
  public sell_cost!: number;

  @Column()
  public collect_cost!: number;

  @OneToMany(() => Sylva, sylva => sylva.resource)
  sylva!: Sylva[];
  @OneToMany(() => Desolo, desolo => desolo.resource)
  desolo!: Desolo[];
}
