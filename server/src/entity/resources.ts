import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Planets } from "./planets";

@Entity()
export class Resources {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    category!: string;

    @Column()
    quantity!: number;

    @Column()
    image!: string;

    @Column()
    symbol!: string;

    // Relationship with Plants
    // ManyToMany To Planets
@ManyToMany(() => Planets, (planets) => planets.resources)
public planets?: Planets;


}





