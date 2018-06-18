export class CreateProductDto {
    readonly name: string;
    readonly price: number;
    readonly available: boolean;
    dateCreated: string;
}