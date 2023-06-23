import { Column, Entity, PrimaryGeneratedColumn,DeleteDateColumn } from "typeorm";
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';


@Entity({name:'tutorado'})
@ObjectType()
export class Tutorado {
    @PrimaryGeneratedColumn('uuid')
    @Field(()=> ID)
    id:string;
    
    @Column('varchar',{unique:true})
    @Field(()=> String)
    identificacion:string;

    @Column('varchar',{
        unique:true
    })
    @Field(()=> String)
    nombre:string;

    @Column('text', {nullable:true})
    @Field(()=> String)
    direccion:string;

    @Column('boolean', {default:true})
    @Field(()=>Boolean)
    estado:boolean;


}

