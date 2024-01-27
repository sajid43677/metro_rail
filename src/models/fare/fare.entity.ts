import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('all_fare')
export class FareEntity{
    @PrimaryGeneratedColumn()
    fareId: number;

    @Column()
    location1: string;

    @Column()
    location2: string;

    @Column()
    farePrice: number;
}