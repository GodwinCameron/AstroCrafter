import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Planets } from "./planets";

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


    // Relationship with Planets
    // ManyToMany To Planets
@ManyToMany(() => Planets, (planets) => planets.resources)
public planets?: Planets;


}





