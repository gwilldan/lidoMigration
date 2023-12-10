import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class EVMScriptFactory {
    constructor(props?: Partial<EVMScriptFactory>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("bytea", {nullable: false})
    address!: Uint8Array

    @Column_("bytea", {nullable: false})
    permissions!: Uint8Array

    @Column_("bool", {nullable: false})
    isActive!: boolean
}
