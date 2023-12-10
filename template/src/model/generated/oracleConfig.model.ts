import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

/**
 * Oracle
 */
@Entity_()
export class OracleConfig {
    constructor(props?: Partial<OracleConfig>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    quorum!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    contractVersion!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    allowedBeaconBalanceAnnualRelativeIncrease!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    allowedBeaconBalanceRelativeDecrease!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    epochsPerFrame!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    slotsPerEpoch!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    secondsPerSlot!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    genesisTime!: bigint

    @Column_("bytea", {nullable: false})
    beaconReportReceiver!: Uint8Array
}
