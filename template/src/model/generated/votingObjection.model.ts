import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Voting} from "./voting.model"

@Entity_()
export class VotingObjection {
    constructor(props?: Partial<VotingObjection>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Voting, {nullable: true})
    voting!: Voting

    @Column_("bytea", {nullable: false})
    voter!: Uint8Array

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stake!: bigint
}
