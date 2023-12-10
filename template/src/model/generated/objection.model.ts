import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Motion} from "./motion.model"

@Entity_()
export class Objection {
    constructor(props?: Partial<Objection>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    motionId!: bigint

    @Column_("bytea", {nullable: false})
    objector!: Uint8Array

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    weight!: bigint

    @Index_()
    @ManyToOne_(() => Motion, {nullable: true})
    motion!: Motion

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    block!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    blockTime!: bigint

    @Column_("bytea", {nullable: false})
    transactionHash!: Uint8Array

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    logIndex!: bigint
}
