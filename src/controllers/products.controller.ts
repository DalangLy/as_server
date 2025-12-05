import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

interface CreateProductDto {
  name: string;
  price: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

@Controller('products')
export class ProductsController{
  constructor(
    private readonly prisma: PrismaService
  ) {
  }

  @Get()
  async findAll(): Promise<Product[]> {
    const products = await  this.prisma.product.findMany();
    return products.map(value => {
      return {
        id: value.id,
        name: value.name,
        price: value.price,
      }
    });
  }

  @Post()
  async create(@Body() body: CreateProductDto) {
    await this.prisma.product.create({
      data: {
        name: body.name,
        price: body.price,
      }
    });
    return 'Product created';
  }
}