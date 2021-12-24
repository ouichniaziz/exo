import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('movies')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMovies() {
    return this.appService.getMovies();
  }
}
