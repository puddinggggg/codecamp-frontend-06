import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    number!: number

    @Column({ type: "text" })
    writer!: string

    @Column({ type: "text" })
    title!: string

    @Column({ type: "text" })
    contents!: string
}

// ! 붙인것은 필수입력 표시
// @PrimaryGeneratedColumn("increment") <- 알아서 넘버가 생성되도록
// id 쓸 때는 uuid 사용
// 부가기능 사용하기 위해 extends BaseEntity 추가