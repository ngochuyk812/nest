import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { FuturesService } from './futures.service';
import { TradeResult } from 'binance-api-node';
import { BuyEntity } from 'src/models/buy.entity';
import { CRUDService } from 'src/shared/crud/crud.service';
import { Pagination, PagingInfo } from 'src/shared/crud/crud.interface';
import { ApiProperty } from '@nestjs/swagger';

@Controller('futures')
export class FuturesController {
    constructor(
        private readonly futuresService: FuturesService){
    }
    @Get()
    async Ping(): Promise<TradeResult[]> {
        return await this.futuresService.ping();
    }
    @Post("/buy")
    async Buy(@Body() req: BuyEntity): Promise<BuyEntity> {
        return await this.futuresService.create(req);
    }
    @Get("/buy")
    async PagingBuy(@Query() req: PagingInfo): Promise<Pagination<BuyEntity>> {
        return await this.futuresService.paging(req.page, req.pageSize);
    }
}
