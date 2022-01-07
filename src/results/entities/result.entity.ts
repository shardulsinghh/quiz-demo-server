import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type ResultDocument = Result & Document;

@Schema({
  timestamps: true,
})
export class Result {
  @Prop({ required: true })
  question: string;

  @Prop()
  answer: string;

  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  timestamp: number;
}

export const ResultSchema = SchemaFactory.createForClass(Result);
