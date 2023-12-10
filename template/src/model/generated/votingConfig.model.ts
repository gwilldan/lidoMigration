import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

/**
 * Voting
 */
@Entity_()
export class VotingConfig {
    constructor(props?: Partial<VotingConfig>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    supportRequiredPct!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    minAcceptQuorumPct!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    voteTime!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    objectionPhaseTime!: bigint
}
