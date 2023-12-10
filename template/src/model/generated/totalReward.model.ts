import {BigDecimal} from "@subsquid/big-decimal"
import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {NodeOperatorFees} from "./nodeOperatorFees.model"
import {NodeOperatorsShares} from "./nodeOperatorsShares.model"

@Entity_()
export class TotalReward {
    constructor(props?: Partial<TotalReward>) {
        Object.assign(this, props)
    }

    /**
     * transactionHash
     */
    @PrimaryColumn_()
    id!: string

    /**
     * Total user rewards
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalRewards!: bigint

    /**
     * Total user rewards + fees
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalRewardsWithFees!: bigint

    /**
     * Fees received via validator MEV
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    mevFee!: bigint

    /**
     * Fee basis points eg fractions of total fees
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    feeBasis!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    treasuryFeeBasisPoints!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    insuranceFeeBasisPoints!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    operatorsFeeBasisPoints!: bigint

    /**
     * Fees and leftover dust after rounding
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalFee!: bigint

    @OneToMany_(() => NodeOperatorFees, e => e.totalReward)
    nodeOperatorFees!: NodeOperatorFees[]

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    insuranceFee!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    operatorsFee!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    treasuryFee!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    dust!: bigint

    /**
     * Total shares that were minted for distribution
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    shares2mint!: bigint

    /**
     * Shares distributed to each destination
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    sharesToTreasury!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    sharesToInsuranceFund!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    sharesToOperators!: bigint

    @OneToMany_(() => NodeOperatorsShares, e => e.totalReward)
    nodeOperatorsShares!: NodeOperatorsShares[]

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    dustSharesToTreasury!: bigint

    /**
     * State of the pool before and after rewards
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalPooledEtherBefore!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalPooledEtherAfter!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalSharesBefore!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalSharesAfter!: bigint

    /**
     * Data for easy APR calculations
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    timeElapsed!: bigint

    /**
     * Raw APR from validator balances
     */
    @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
    aprRaw!: BigDecimal

    /**
     * Time-compensated APR eg account for a missed day of rewards between reports
     */
    @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
    aprBeforeFees!: BigDecimal

    /**
     * User APR after fees and time correction
     */
    @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
    apr!: BigDecimal

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    block!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    blockTime!: bigint

    @Column_("bytea", {nullable: false})
    transactionHash!: Uint8Array

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    transactionIndex!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    logIndex!: bigint
}
