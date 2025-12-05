import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './services/prisma.service';
import { AuthModule } from './auth/auth.module';
import { ProductsController } from './controllers/products.controller';

@Module({
  imports: [AuthModule,],
  controllers: [AppController, ProductsController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
