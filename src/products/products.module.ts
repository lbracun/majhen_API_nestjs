import { Module } from '@nestjs/common';
import { Connection } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductController } from './product.controller';
import { ProductsService } from './products.service';
import { ProductSchema } from './schemas/product.schema';

@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost/products')],
    controllers: [ProductsController, ProductController],
    providers: [ProductsService,
        {
            provide: 'ProductModelToken',
            useFactory: (connection: Connection) => connection.model('Product', ProductSchema),
            inject: ['DbConnectionToken'],
        }],
})
export class ProductsModule { }
