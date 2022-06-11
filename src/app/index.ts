import { createProduct } from "./Products/product.services";
import { CreateProductDto } from "./Products/product.dto";
import { SIZES, COLORS } from "./Products/product.models";

// category:{
//   id: "asdsdsad",
//   name: "Nuevo Product",
//   createdAt: new Date(),
//   updatedAt: new Date(),
// }

const product: CreateProductDto = {
  name: "Nuevo Product",
  isNew: true,
  images: [""],
  stock: 5,
  size: SIZES.XX_LARGE,
  color: COLORS.BLUE,
  price: 4000,
  tags: [""],
  categoryId: "",
};

createProduct(product);
