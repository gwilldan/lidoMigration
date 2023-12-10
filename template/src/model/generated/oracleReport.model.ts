import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {TotalReward} from "./totalReward.model"

@Entity_()
export class OracleReport {
    constructor(props?: Partial<OracleReport>) {
        Object.assign(this, props)
    }

    /**
     * v2 oracle report refSlot = ID
     */
    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => TotalReward, {nullable: true})
    totalReward!: TotalReward

    @Column_("bytea", {nullable: false})
    hash!: Uint8Array

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    itemsProcessed!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    itemsCount!: bigint
}
