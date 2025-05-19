import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@ObjectType()
@Entity()
export class Student {
@Field(type => Int)
@PrimaryGeneratedColumn()
id: number;
@Field()
@Column()
firstName: string;
@Field()
@Column()
lastName: string;
@Field()
@Column()
email: string;
@Field({nullable:true})
@Column({nullable:true})
phone?: string;
}