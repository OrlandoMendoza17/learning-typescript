//Las interfaces pueden extender de otros tipos. Los "type" no puede

interface Product {
  id: string,
  name: string,
  images: string[],
  stock: number,
  isNew: boolean,
  createdAt: Date,
  updatedAt: Date,
  category: {
    id: string,
    name: string,
    createdAt: Date,
    updatedAt: Date,
  }
}