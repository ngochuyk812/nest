import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.interface";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class BuyEntity extends BaseEntity{
    @ApiProperty()
    @Column({type: "float", default: 0})
    priceBuy: number;
    @ApiProperty()
    @Column({type: "float", default: 0})
    amount: number;
    @ApiProperty()
    @Column()
    symbol: string;
    @ApiProperty()
    @Column()
    currency: string;
}