import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Planet {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    difficulty!: string;

    @Column()
    resources!: string;

    @Column()
    description!: string;

    @Column()
    power!: string;

    @Column()
    color!: string;

    @Column()
    full_cost_travel!: string;

    @Column()
    inventory!: string;

    @Column()
    image!: string;

    @Column()
    symbol!: string;
}