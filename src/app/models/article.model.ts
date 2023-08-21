export interface Article {
  name: string;
  description: string;
  expiredAt: Date;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  quantityAvailable: number;
  unitPrice: number;
  createdBy: Date;
  image: string;
}
