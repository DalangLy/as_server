import { Injectable, OnModuleInit } from '@nestjs/common';
import {PrismaMariaDb} from '@prisma/adapter-mariadb';
import { PrismaClient } from '../../generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    this.$connect();
  }
  constructor() {
    const adapter = new PrismaMariaDb({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'sa_server',
    });
    super({ adapter });
  }
}