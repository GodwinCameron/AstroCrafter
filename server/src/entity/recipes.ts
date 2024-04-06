import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Resources } from "./resources";

@Entity()
export class Recipes {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @Column()
  public craft_cost!: number;

  // we are treating resources as ingredients too, so that they can all go back to the same inventory
  @ManyToOne(() => Resources, (resource) => resource.ingredient_1)
  ingredient_1!: Resources[];

  //defaulted to at least 1 item
  @Column({ default: 1 })
  public ingredient_1_quantity: number = 1;

  // some recipes dont have a second ingredient but insetad have multiple of the first, therefore this can be nullable
  @ManyToOne(() => Resources, (resource) => resource.ingredient_2, { nullable: true })
  ingredient_2!: Resources[]

  // can also be null
  @Column({ default: 0 })
  public ingredient_2_quantity: number = 0; // null column should also allow null default value
  //we will use front end logic to handle any unique cases
}


