import { IsString, IsNumber, Min, IsOptional } from '@nestjs/class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsOptional()
  @IsString()
  category?: string;
}