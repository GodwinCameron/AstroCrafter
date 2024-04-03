import { Column, Entity, PrimaryGeneratedColumn, ManyToMany} from "typeorm";
import { Resources } from "./resources";

@Entity()
export class Planets {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    difficulty!: string;

    @Column()
    collectable_resources_name!: string;

    @Column()
    description!: string;

    @Column()
    power!: string;

    @Column()
    color!: string;

    @Column()
    fuel_cost_travel!: string;

    @Column()
    inventory!: string;

    @Column()
    image!: string;

    @Column()
    symbol!: string;

//relationships
// Many-to-Many relationship to resources
// @ManyToMany(() => Resources, (resources) => resources.planets)
// public resources?: Resources[];

}


