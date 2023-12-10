import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class LidoSubmission {
    constructor(props?: Partial<LidoSubmission>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("bytea", {nullable: false})
    sender!: Uint8Array

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amount!: bigint

    @Column_("bytea", {nullable: false})
    referral!: Uint8Array

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    shares!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    sharesBefore!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    sharesAfter!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalPooledEtherBefore!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalPooledEtherAfter!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalSharesBefore!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalSharesAfter!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    balanceAfter!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    block!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    blockTime!: bigint

    @Column_("bytea", {nullable: false})
    transactionHash!: Uint8Array

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    transactionIndex!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    logIndex!: bigint
}
