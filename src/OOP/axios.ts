import axios from "axios";

export interface Category {
  id:    number;
  name:  string;
  image: string;
}

export interface Product {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    Category;
  images:      string[];
}

(async () => {
  const API_URL = "https://api.escuelajs.co/api/v1/products?limit=20&offset=0";

  const { data: products } = await axios.get<Product[]>(API_URL);
  
  console.log(products.map((product => product.title)))
})();
