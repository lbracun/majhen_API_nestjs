import { Controller, Get, Post, Param, Body, Delete, HttpCode, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';

@Controller('product')
export class ProductController {
    constructor(private readonly productsService: ProductsService) { }

    @Post()
    @HttpCode(201)
    async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productsService.create(createProductDto);
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Product> {
        return this.productsService.findOne(id);
    }

    @Delete(':id')
    @HttpCode(204)
    async removeOne(@Param('id') id): Promise<Product> {
        return this.productsService.removeOne(id);
    }

    @Put(':id')
    async updateOne(@Param('id') id, @Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productsService.updateOne(id, createProductDto);
    }
}
