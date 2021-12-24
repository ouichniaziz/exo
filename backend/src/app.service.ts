import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}
  getMovies() {
    const apiKey = this.configService.get('API_KEY');
    return this.httpService
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
      .pipe(map((res) => res.data));
  }
}
