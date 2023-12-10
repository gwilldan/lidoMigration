import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class BeaconReport {
    constructor(props?: Partial<BeaconReport>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    epochId!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    beaconBalance!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    beaconValidators!: bigint

    @Column_("bytea", {nullable: false})
    caller!: Uint8Array
}
