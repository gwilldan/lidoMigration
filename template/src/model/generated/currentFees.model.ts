import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class CurrentFees {
    constructor(props?: Partial<CurrentFees>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    feeBasisPoints!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    treasuryFeeBasisPoints!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    insuranceFeeBasisPoints!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    operatorsFeeBasisPoints!: bigint
}
