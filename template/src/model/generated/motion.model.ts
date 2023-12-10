import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Objection} from "./objection.model"

/**
 * EasyTrack
 */
@Entity_()
export class Motion {
    constructor(props?: Partial<Motion>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("bytea", {nullable: false})
    creator!: Uint8Array

    @Column_("bytea", {nullable: false})
    evmScriptFactory!: Uint8Array

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    duration!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    startDate!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    snapshotBlock!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    objectionsAmount!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    objectionsAmountPct!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    objectionsThreshold!: bigint | undefined | null

    @Column_("bytea", {nullable: false})
    evmScriptHash!: Uint8Array

    @Column_("bytea", {nullable: false})
    evmScriptCalldata!: Uint8Array

    @Column_("text", {nullable: false})
    status!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    enactedAt!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    canceledAt!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    rejectedAt!: bigint | undefined | null

    @OneToMany_(() => Objection, e => e.motion)
    objections!: Objection[]

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    block!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    blockTime!: bigint

    @Column_("bytea", {nullable: false})
    transactionHash!: Uint8Array

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    logIndex!: bigint
}
