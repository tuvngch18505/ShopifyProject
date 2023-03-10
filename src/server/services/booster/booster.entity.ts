import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

export class BoosterContent {
  goals?: number;
  message?: string;
  progressMessage?: string;
  goalMessage?: string;
}

export class BoosterDesign {
  position?: string;
  template?: string;
  backgroundColor?: string;
  font?: string;
  messageSize?: number;
  messageColor?: string;
}

@Entity()
export class BoosterEntity {
  @ObjectIdColumn()
  _id!: ObjectId;

  // @Column()
  // shopId!: string;

  // @Column()
  // boosterId!: string;
  @Column()
  id!: string;

  @Column()
  boosterName!: string;

  @Column()
  status: string;

  @Column()
  content!: BoosterContent;

  @Column()
  design!: BoosterDesign;
}
