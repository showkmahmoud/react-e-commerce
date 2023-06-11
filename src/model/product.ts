export interface IProduct {
  userId: number;
  id: number;
  title: string;
  body: string;
  img: string;
  price: number;
  quantity?: number;
}
