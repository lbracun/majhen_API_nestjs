import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    async findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }
}
