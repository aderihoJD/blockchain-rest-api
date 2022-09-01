import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ChainService } from './chain.service';
import { CreateChainDto } from './dto/create-chain.dto';
import { UpdateChainDto } from './dto/update-chain.dto';
import { Chain } from './schemas/chain.schema';

@Controller('chain')
export class ChainController {

    constructor(private readonly chainService: ChainService) {

    }

    // @Get()
    // @Redirect('https://google.com', 301)
    // getAll(@Req() req: Request, @Res() res: Response) {
    //     res.status(201).end('Bye');
    //     return 'getAll';
    // }

    @Get()
    getAll(): Promise<Chain[]> {
        return this.chainService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Chain> {
        return this.chainService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.FOUND)
    @Header('Ilyas', 'Pichinen')
    async create(@Body() createChainDto: CreateChainDto): Promise<Chain> { 
        return this.chainService.create(createChainDto);
    }  

    @Delete(':id') 
    async remove(@Param('id') id: string): Promise<Chain> {
        return this.chainService.remove(id);
    }

    @Put(':id')
    async update(@Body() updateChainDto: UpdateChainDto, @Param('id') id: string ): Promise<Chain> {
        return this.chainService.update(id, updateChainDto);
    }
}
