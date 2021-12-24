import { Controller, Post, Query, Put, Body, Get } from '@nestjs/common';
import { LikeDto } from './like.dto';
import { LikeMovieDto } from './likeMovie.dto';
import { LikeService } from './like.service';

@Controller('user')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}
  @Post()
  like(@Body() likeDto: LikeDto) {
    return this.likeService.like(likeDto);
  }

  @Put('like')
  likeMovie(@Body() likeMovieDto: LikeMovieDto) {
    return this.likeService.likeMovie(likeMovieDto);
  }
  @Get('infos')
  getUser(@Query() query: any) {
    return this.likeService.getUser(query.username);
  }
}
