import { Controller, Get, Query, Request, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('movies')
  getMovies() {
    return this.appService.getMovies();
  }

  @Get('search')
  getMoviesSearch(@Query() query: any) {
    return this.appService.getMoviesSearch(query.search);
  }
}
