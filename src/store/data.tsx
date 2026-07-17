//mock-data
export interface IProduct {
  id: number;
  img: string;
  name: string;
  quantity: number;
  maxQuantity: number;
  price: number;
  totalPrice: number;
}

export const products: IProduct[] = [
  {
    id: 1,
    img: "/public/iph17-black.webp",
    name: "IPhone 17 256GB",
    quantity: 1,
    maxQuantity: 12,
    price: 2700,
    totalPrice: 2700,
  },
  {
    id: 2,
    img: "public/galaxy-s26.webp",
    name: "Samsung Galaxy S26 SM-S942B  256GB ",
    quantity: 1,
    maxQuantity: 70,
    price: 2400,
    totalPrice: 2400,
  },
  {
    id: 3,
    img: "/public/google-pixel-10Pro.jpeg",
    name: "Google Pixel 10 Pro 256GB",
    quantity: 1,
    maxQuantity: 40,
    price: 3100,
    totalPrice: 3100,
  },
];
