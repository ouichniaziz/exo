import { Module } from '@nestjs/common';
import { LikeController } from './like.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LikeService } from './like.service';
import { LikeSchema } from './like.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Like',
        schema: LikeSchema,
      },
    ]),
  ],
  controllers: [LikeController],
  providers: [LikeService],
})
export class LikeModule {}
