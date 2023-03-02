import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

export class ProductVariant {
  id: string; // Item #;
  productId: string;
  variantId: string;
  quantity: number;
  sku: number;
  dateOfPurchase: string;
  dateOfArrival: string;
  price: number;
}

@Entity()
export class ProductEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  id: string; // LWIN;

  @Column()
  variants: ProductVariant[];

  @Column()
  style: string;

  @Column()
  vintage: string;

  @Column()
  name: string;

  @Column()
  lowerName: string;

  @Column()
  size: number;

  @Column()
  price_per_btl: number;

  @Column()
  packSize: number;

  @Column()
  unitOfSale: string;

  @Column()
  wa?: string;

  @Column()
  ws?: string;

  @Column()
  ratingWsMin?: number;

  @Column()
  ratingWsMax?: number;

  @Column()
  ratingWaMin?: number;

  @Column()
  ratingWaMax?: number;

  @Column()
  format: string;

  @Column()
  status: string;

  @Column()
  country: string;

  @Column()
  region: string;

  @Column()
  subRegion: string;

  @Column()
  imageSrc: string;

  @Column()
  chineseWineName: string;

  @Column()
  invoiceDate: string;

  @Column()
  invoiceNo: string;

  @Column()
  marketValue: string;

  @Column()
  collections: string[];

  @Column()
  variantInventoryTracker: string;

  @Column()
  availability?: number;

  @Column()
  tags?: string[];

  @Column()
  bodyHtml?: string;
}
