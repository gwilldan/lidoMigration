import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class Role {
    constructor(props?: Partial<Role>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("bytea", {nullable: false})
    role!: Uint8Array

    @Column_("bytea", {nullable: false})
    address!: Uint8Array

    @Column_("bytea", {nullable: false})
    creator!: Uint8Array

    @Column_("bool", {nullable: false})
    isActive!: boolean
}
