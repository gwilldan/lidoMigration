import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class Totals {
    constructor(props?: Partial<Totals>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalPooledEther!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalShares!: bigint
}
