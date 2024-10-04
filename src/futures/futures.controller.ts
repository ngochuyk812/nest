import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { FuturesService } from './futures.service';
import { TradeResult } from 'binance-api-node';
import { BuyDTO, BuyEntity } from 'src/models/buy.entity';
import { CRUDService } from 'src/shared/crud/crud.service';
import { Pagination, PagingInfo } from 'src/shared/crud/crud.interface';
import { ApiProperty } from '@nestjs/swagger';
import { BuyService } from './buy.service';

@Controller('futures')
export class FuturesController {
    constructor(
        private readonly futuresService: FuturesService,
        private readonly buyService: BuyService,
        ){
    }
    @Get()
    async Ping(): Promise<TradeResult[]> {
        return await this.futuresService.ping();
    }
    @Post("/buy")
    async Buy(@Body() req: BuyEntity): Promise<BuyEntity> {
        return await this.buyService.create(req);
    }
    @Get("/buy")
    async PagingBuy(@Query() req: PagingInfo): Promise<Pagination<BuyEntity>> {
        return await this.buyService.paging(req.page, req.pageSize);
    }
}
