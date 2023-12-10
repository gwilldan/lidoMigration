import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class WithdrawalsFinalized {
    constructor(props?: Partial<WithdrawalsFinalized>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    from!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    to!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amountOfETHLocked!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    sharesToBurn!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    timestamp!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    block!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    blockTime!: bigint

    @Column_("bytea", {nullable: false})
    transactionHash!: Uint8Array

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    logIndex!: bigint
}
