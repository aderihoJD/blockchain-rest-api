import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ChainDocument = Chain & Document;

@Schema()
export class Chain {
    
    @Prop()
    data: string;

    @Prop({required: true})
    hash: string;

    @Prop({required: true})
    prevHash: string;
}

export const ChainSchema = SchemaFactory.createForClass(Chain);