import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to AS Server!';
  }

  // constructor(private usersService: UsersService) {}
  //
  // async signIn(username: string, pass: string): Promise<any> {
  //   // const user = await this.usersService.findOne(username);
  //   const user:any = {};
  //   if (user?.password !== pass) {
  //     throw new UnauthorizedException();
  //   }
  //   const { password, ...result } = user;
  //   // TODO: Generate a JWT and return it here
  //   // instead of the user object
  //   return result;
  // }
}
