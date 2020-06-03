import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('receipts')
class Receipt {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  emitter: string;

  @Column()
  value: number;

  @Column()
  description: string;

  @Column()
  document: string;
}

export default Receipt;
