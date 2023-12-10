import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class WithdrawalQueueConfig {
    constructor(props?: Partial<WithdrawalQueueConfig>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("bool", {nullable: false})
    isBunkerMode!: boolean

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    bunkerModeSince!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    contractVersion!: bigint

    @Column_("bool", {nullable: false})
    isPaused!: boolean

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    pauseDuration!: bigint
}
