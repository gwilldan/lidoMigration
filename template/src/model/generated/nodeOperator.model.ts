import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class NodeOperator {
    constructor(props?: Partial<NodeOperator>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    name!: string

    @Column_("bytea", {nullable: false})
    rewardAddress!: Uint8Array

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingLimit!: bigint

    @Column_("bool", {nullable: false})
    active!: boolean

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    totalStoppedValidators!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalKeysTrimmed!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    nonce!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    block!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    blockTime!: bigint

    @Column_("bytea", {nullable: false})
    transactionHash!: Uint8Array

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    logIndex!: bigint
}
