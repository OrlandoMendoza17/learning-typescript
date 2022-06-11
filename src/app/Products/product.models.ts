import { Category } from "../Categories/category.model";
import { BaseModel } from "../Model/BaseModel";

export enum COLORS {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
  YELLOW = "yellow",
};

export enum SIZES {
  SMALL = "S",
  MEDIUM = "M",
  LARGE = "L",
  X_LARGE = "XL",
  XX_LARGE = "XXL",
}

export interface Product extends BaseModel{
  images: string[],
  stock: number,
  isNew: boolean,
  size?: SIZES,
  color?: COLORS,
  price: number,
  category: Category,
  tags: string[]
}