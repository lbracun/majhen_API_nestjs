import { Model } from 'mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { }

    async create(createProductDto: CreateProductDto): Promise<Product> {
        createProductDto.dateCreated = new Date().toString();
        try {
            const createdProduct = new this.productModel(createProductDto);
            return await createdProduct.save();
        } catch (err) {
            throw new HttpException('All fields are required', HttpStatus.BAD_REQUEST);
        }

    }

    async findAll(): Promise<Product[]> {
        return await this.productModel.find().exec();
    }

    async findOne(id: string): Promise<Product> {
        try {
            return await this.productModel.findById(id).exec();
        } catch (err) {
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        }
    }

    async removeOne(id: string): Promise<Product> {
        try {
            return await this.productModel.findByIdAndDelete(id).exec();
        } catch {
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        }

    }

    async updateOne(id: string, createProductDto: CreateProductDto): Promise<Product> {
        try {
            return await this.productModel.findByIdAndUpdate(id, createProductDto).setOptions({ new: true }).exec();
        } catch (err) {
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        }

    }
}
