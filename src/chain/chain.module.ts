import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ChainController } from "./chain.controller";
import { ChainService } from "./chain.service";
import { Chain, ChainSchema } from "./schemas/chain.schema";

@Module({
    providers: [ChainService],
    controllers: [ChainController],
    imports: [
        MongooseModule.forFeature([
            { name: Chain.name, schema: ChainSchema }
        ])
    ]
})

export class ChainModule {

}