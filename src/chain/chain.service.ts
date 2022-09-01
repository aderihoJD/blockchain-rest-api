import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateChainDto } from './dto/create-chain.dto';
import { UpdateChainDto } from './dto/update-chain.dto';
import { Chain, ChainDocument } from './schemas/chain.schema';

@Injectable()
export class ChainService {

    constructor(@InjectModel(Chain.name) private chainModel: Model<ChainDocument>) { }

    private chains = [];

    async getAll(): Promise<Chain[]> {
        return this.chainModel.find().exec();
    }

    async getById(id: string): Promise<Chain> {
        return this.chainModel.findById(id);
    }

    async create(chainDto: CreateChainDto): Promise<Chain> {
        const newChain = new this.chainModel(chainDto);

        return newChain.save();
    }

    async remove(id: string): Promise<Chain> {
        return this.chainModel.findByIdAndRemove(id);
    }

    async update(id: string, chainDto: UpdateChainDto): Promise<Chain> {
        return this.chainModel.findByIdAndUpdate(id, chainDto, { new: true});
    }

}
