import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

/**
 * Lido
 */
@Entity_()
export class LidoConfig {
    constructor(props?: Partial<LidoConfig>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("bytea", {nullable: true})
    insuranceFund!: Uint8Array | undefined | null

    @Column_("bytea", {nullable: true})
    oracle!: Uint8Array | undefined | null

    @Column_("bytea", {nullable: true})
    treasury!: Uint8Array | undefined | null

    @Column_("bool", {nullable: false})
    isStopped!: boolean

    @Column_("bool", {nullable: false})
    isStakingPaused!: boolean

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    maxStakeLimit!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakeLimitIncreasePerBlock!: bigint

    @Column_("bytea", {nullable: true})
    elRewardsVault!: Uint8Array | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    elRewardsWithdrawalLimitPoints!: bigint

    @Column_("bytea", {nullable: false})
    withdrawalCredentials!: Uint8Array

    @Column_("bytea", {nullable: true})
    wcSetBy!: Uint8Array | undefined | null

    @Column_("bytea", {nullable: true})
    lidoLocator!: Uint8Array | undefined | null
}
