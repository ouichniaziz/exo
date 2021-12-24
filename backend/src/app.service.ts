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
    // const apiKey = this.configService.get('API_KEY');
    return this.httpService
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=aa9f6ed99dc2087a9ba01eeb0cf2b20e`,
      )
      .pipe(map((res) => res.data));
  }

  getMoviesSearch(search) {
    // const apiKey = this.configService.get('API_KEY');
    return this.httpService
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=aa9f6ed99dc2087a9ba01eeb0cf2b20e&query=${search}`,
      )
      .pipe(map((res) => res.data));
  }
}
