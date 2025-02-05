declare global {
  interface IProduct {
    _id: string;
    name: string;
    price: number;
    stock: number;
    image: string;
  }
}

export {};
