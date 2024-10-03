import { Column, EntitySchema, PrimaryGeneratedColumn } from "typeorm";

export class BaseEntity extends EntitySchema{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ default: false })
    isDeleted: boolean;
    @Column({default: new Date().getTime()})
    createdDate:  number;
}