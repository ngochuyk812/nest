import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Binance, { TradeResult } from 'binance-api-node'
import { BuyEntity } from 'src/models/buy.entity';
import { CRUDService } from 'src/shared/crud/crud.service';
import { Repository } from 'typeorm';

@Injectable()
export class BuyService extends CRUDService<BuyEntity>{
    constructor(
        @InjectRepository(BuyEntity)
        protected readonly repository: Repository<BuyEntity>,
    ) {
        super(repository); 
    }
    
}
