import { Injectable, Provider } from '@nestjs/common';
import { ICRUDService, Pagination } from './crud.interface';
import { getRepositoryToken, InjectRepository } from '@nestjs/typeorm';
import { BuyEntity } from 'src/models/buy.entity';
import { Entity, Repository } from 'typeorm';
import { BaseEntity } from 'src/models/base.interface';

@Injectable()
export class CRUDService<T> implements ICRUDService<T> {
    constructor(
        private readonly buyRepository: Repository<T>,
      ) {}

    async create(input: T): Promise<T> {
        this.buyRepository.create(input);
        const entity = this.buyRepository.create(input);
        await this.buyRepository.save(entity);
        return input;
    }
    update(id: number, input: T): Promise<T> {
        throw new Error('Method not implemented.');
    }
    delete(id: number): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    async paging(page: number, size: number): Promise<Pagination<T>> {
        const data = await this.buyRepository.find();
        let pagi = new Pagination<any>();
        pagi.page = page;
        pagi.pageSize = size;
        pagi.data = data;
        return pagi;
    }

}

