import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class SharesBurn {
    constructor(props?: Partial<SharesBurn>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("bytea", {nullable: false})
    account!: Uint8Array

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    postRebaseTokenAmount!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    preRebaseTokenAmount!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    sharesAmount!: bigint
}
