import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Resources } from "./resources";

@Entity()
export class Sylva {
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(() => Resources)
    resource!: Resources;

    @Column()
    quantity!: number;

}


