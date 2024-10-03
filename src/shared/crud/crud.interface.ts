import { ApiProperty } from "@nestjs/swagger";

export interface ICRUDService<T> {
    create(input: T): Promise<T>;
    update(id: number,input: T): Promise<T>;
    delete(id: number): Promise<boolean>;
    paging(page: number, size: number): Promise<Pagination<T>>;
}
export class PagingInfo{
    @ApiProperty()
    page: number;
    @ApiProperty()
    pageSize: number;
}
export class Pagination<T> extends PagingInfo{
    totalItem: number;
    data: T[];
}