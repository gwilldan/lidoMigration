import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class EasyTrackConfig {
    constructor(props?: Partial<EasyTrackConfig>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("bytea", {nullable: false})
    evmScriptExecutor!: Uint8Array

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    motionDuration!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    motionsCountLimit!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    objectionsThreshold!: bigint

    @Column_("bool", {nullable: false})
    isPaused!: boolean
}
