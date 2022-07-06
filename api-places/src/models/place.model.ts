// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// @Entity()
// export class PersonModel {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ length: 120 })
//   name: string;

//   @Column('int')
//   age: number;

//   @Column({ length: 255 })
//   email: string;
// }

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class PlaceModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  country: string;

  @Column()
  url: string;

  @Column()
  location: string;

  @Column()
  meta: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
