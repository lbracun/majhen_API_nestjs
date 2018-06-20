import { Document } from 'mongoose';

export class Product extends Document {
    readonly name: string;
    readonly price: number;
    readonly available: boolean;
    readonly dateCreated: string;
}