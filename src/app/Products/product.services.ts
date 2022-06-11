import { Product } from "./product.models";
import { CreateProductDto, UpdateProductDto } from "./product.dto";
import { Category } from "../Categories/category.model";

let products: Product[] = [];

export const createProduct = (product: CreateProductDto) => {
  const newProduct: Product = {
    ...product,
    id: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    category: {
      id: product.categoryId,
      name: "Nuevo Product",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  };
  
  products.push(newProduct);
};

export const updateProduct = (productId: Product["id"], changes: UpdateProductDto): Product =>{
  const index = products.findIndex(product => product.id === productId)
  
  const prevData = products[index] 
  
  const {categoryId, ...rest} = changes
  
  const category: Category = {
    ...prevData.category,
    id: categoryId ? categoryId : prevData.category.id 
  }
  
  products[index] = {
    ...prevData,
    ...rest,
    category,
  }
  
  return products[index]
}

export const findProduct = (productId: Product["id"]) =>{
  return products.find(item => item.id === productId)
}

export const deleteProduct = (productId: Product["id"]) =>{
  products = products.filter(product => product.id !== productId)
  return products;
}