import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductController } from './product.controller';
import { ProductsService } from './products.service';
import { ProductSchema } from './schemas/product.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])],
    controllers: [ProductsController, ProductController],
    providers: [ProductsService],
})
export class ProductsModule { }
