import { Controller, Post, Body } from '@nestjs/common';
import { LikeDto } from './like.dto';
import { LikeService } from './like.service';

@Controller('user')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}
  @Post()
  like(@Body() likeDto: LikeDto) {
    return this.likeService.like(likeDto);
  }
}
