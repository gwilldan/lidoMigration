import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class WithdrawalRequested {
    constructor(props?: Partial<WithdrawalRequested>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    requestId!: bigint

    @Column_("bytea", {nullable: false})
    requestor!: Uint8Array

    @Column_("bytea", {nullable: false})
    owner!: Uint8Array

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amountOfStETH!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amountOfShares!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    block!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    blockTime!: bigint

    @Column_("bytea", {nullable: false})
    transactionHash!: Uint8Array

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    logIndex!: bigint
}
