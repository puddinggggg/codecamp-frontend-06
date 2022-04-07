import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, DeleteDateColumn, CreateDateColumn } from 'typeorm'

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    _id!: string

    @Column({ type: "text" })
    seller!: string

    @Column({ type: "text" })
    name!: string

    @Column({ type: "text" })
    detail!: string

    @Column({ type: "text" })
    price!: number

    @CreateDateColumn()
    createdAt!: Date

    @DeleteDateColumn()
    deletedAt!: Date
}

// ! 붙인것은 필수입력 표시
// @PrimaryGeneratedColumn("increment") <- 알아서 넘버가 생성되도록
// id 쓸 때는 uuid 사용
// 부가기능 사용하기 위해 extends BaseEntity 추가