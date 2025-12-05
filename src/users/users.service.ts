import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.prisma.user.findFirst(
      {
        where: {
          username: username
        }
      }
    )
  }

  async findAll(): Promise<User[] | undefined> {
    return this.prisma.user.findMany();
  }
}
