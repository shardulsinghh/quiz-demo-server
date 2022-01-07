import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHomeResponse() {
    return {
      error: false,
      data: 'Quiz Application Server Running',
    };
  }
}
