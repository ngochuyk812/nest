import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Binance, { TradeResult } from 'binance-api-node'
import { BuyEntity } from 'src/models/buy.entity';
import { CRUDService } from 'src/shared/crud/crud.service';
import { Repository } from 'typeorm';

@Injectable()
export class FuturesService {
    async ping(): Promise<TradeResult[]> {
        const client = Binance();
        const data = await client.futuresTrades({ symbol: 'BTCUSDT' });
        return data;
    }
}

