import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class WithdrawalClaimed {
    constructor(props?: Partial<WithdrawalClaimed>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    requestId!: bigint

    @Column_("bytea", {nullable: false})
    owner!: Uint8Array

    @Column_("bytea", {nullable: false})
    receiver!: Uint8Array

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amountOfETH!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    block!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    blockTime!: bigint

    @Column_("bytea", {nullable: false})
    transactionHash!: Uint8Array

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    logIndex!: bigint
}
