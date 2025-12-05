import { Controller, Get, Request } from '@nestjs/common';
import { UsersService } from './users.service.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('all')
  getUsers(@Request() req) {
    return this.usersService.findAll();
  }
}
