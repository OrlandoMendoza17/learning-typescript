import { Product } from "./product.models";
import { OmitValues } from "../Model/BaseModel";

// Utility Types
// Omit, Pick, Require, Readonly

type HandleProductDto = Omit<Product, OmitValues>

export interface CreateProductDto extends Omit<HandleProductDto, "category">{
  categoryId: string,
}

export type UpdateProductDto = Partial<CreateProductDto>

export type FindProductDto = Readonly<Partial<Product>>