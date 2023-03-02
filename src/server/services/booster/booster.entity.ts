import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

export class BoosterContent {
    id: string;
    goals?: number;
    message?: string;
    progressMessage?: string;
    goalMessage?: string;
}

export class BoosterDesign {
    id: string;
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
    
    @Column()
    id: string;

    @Column()
    boosterName!: string;

    @Column()
    content!: BoosterContent

    @Column()
    design!: BoosterDesign;

}
