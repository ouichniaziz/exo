import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Like {
  @Prop()
  username: string;

  @Prop()
  likes: [];
}

export type LikeModule = Like & Document;
export const LikeSchema = SchemaFactory.createForClass(Like);
