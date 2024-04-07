import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Sylva } from "./sylva";
import { Desolo } from "./desolo";
import { Calidor } from "./calidor";
import { Vesania } from "./vesania";
import { Novus } from "./novus";
import { Glacio } from "./glacio";
import { Atrox } from "./atrox";

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

  @OneToMany(() => Sylva, (sylva) => sylva.resource)
  sylva!: Sylva[];
  @OneToMany(() => Desolo, (desolo) => desolo.resource)
  desolo!: Desolo[];
  @OneToMany(() => Calidor, (calidor) => calidor.resource)
  calidor!: Calidor[];
  @OneToMany(() => Vesania, (vesania) => vesania.resource)
  vesania!: Vesania[];
  @OneToMany(() => Novus, (novus) => novus.resource)
  novus!: Novus[];
  @OneToMany(() => Glacio, (glacio) => glacio.resource)
  glacio!: Glacio[];
  @OneToMany(() => Atrox, (atrox) => atrox.resource)
  atrox!: Atrox[];

  //   ingredient relations
  @OneToMany(() => Resources, (resource) => resource.ingredient_1)
  ingredient_1!: Resources[];
  @OneToMany(() => Resources, (resource) => resource.ingredient_2)
  ingredient_2!: Resources[];

  // refinables
  @OneToMany(() => Resources, (resource) => resource.raw)
  raw!: Resources[];
  @OneToMany(() => Resources, (resource) => resource.refinable)
  refinable!: Resources[];
}
