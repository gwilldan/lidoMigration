import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class Stats {
    constructor(props?: Partial<Stats>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    uniqueHolders!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    uniqueAnytimeHolders!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    lastOracleCompletedId!: bigint
}
