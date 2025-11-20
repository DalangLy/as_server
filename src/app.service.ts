import { Injectable, Post } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to AS Server!';
  }

  @Post('login')
  async login(username: string, password: string): Promise<boolean> {
    return true;
  }
}
