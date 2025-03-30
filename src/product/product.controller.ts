import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Post()
  createProduct(@Body() productData: Partial<Product>): Promise<Product> {
    return this.productService.create(productData);
  }
}
