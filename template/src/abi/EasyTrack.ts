import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './EasyTrack.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    EVMScriptExecutorChanged: new LogEvent<([_evmScriptExecutor: string] & {_evmScriptExecutor: string})>(
        abi, '0x5ed6ba59d23ef79b1a31c9f04da9f879ef6cdb89ad0241716ebdc1f02f5f465a'
    ),
    EVMScriptFactoryAdded: new LogEvent<([_evmScriptFactory: string, _permissions: string] & {_evmScriptFactory: string, _permissions: string})>(
        abi, '0xa95e7ae5870d8fc3c3f7b7a378c9c4f469e724c240ee45fbab61758fe7eb9817'
    ),
    EVMScriptFactoryRemoved: new LogEvent<([_evmScriptFactory: string] & {_evmScriptFactory: string})>(
        abi, '0x158e73cc156a7591e8e04fa6cdfc13d89de9e19fdc692bf0502e2a622c08a12a'
    ),
    MotionCanceled: new LogEvent<([_motionId: bigint] & {_motionId: bigint})>(
        abi, '0x801fcb98a9fa2e695209772f0a24f3f7ac36f6568659ae2e0cd7763fb73f2862'
    ),
    MotionCreated: new LogEvent<([_motionId: bigint, _creator: string, _evmScriptFactory: string, _evmScriptCallData: string, _evmScript: string] & {_motionId: bigint, _creator: string, _evmScriptFactory: string, _evmScriptCallData: string, _evmScript: string})>(
        abi, '0x2775db1f1f2dd97c60ba2903b3ca235c9cecb3cb47a9cb464f86578b9877f4a4'
    ),
    MotionDurationChanged: new LogEvent<([_motionDuration: bigint] & {_motionDuration: bigint})>(
        abi, '0x03765c4aa18fde3bfe4015073c2b138ce5a02536dd88ceae9739d3e0dbad5d0e'
    ),
    MotionEnacted: new LogEvent<([_motionId: bigint] & {_motionId: bigint})>(
        abi, '0xd4fbbd7bf63590ce72807eb770b83aaf2f3a7958a4b2093fd9ab89b276096942'
    ),
    MotionObjected: new LogEvent<([_motionId: bigint, _objector: string, _weight: bigint, _newObjectionsAmount: bigint, _newObjectionsAmountPct: bigint] & {_motionId: bigint, _objector: string, _weight: bigint, _newObjectionsAmount: bigint, _newObjectionsAmountPct: bigint})>(
        abi, '0xa64d606df8b3e72e8f53ac4185170bbd4348d0ee03c2cfceadeafc2b316c3e6b'
    ),
    MotionRejected: new LogEvent<([_motionId: bigint] & {_motionId: bigint})>(
        abi, '0x6a4120e111f0bfb3586b7dc9317f9ae5441ce866d1ad9d221ce6d76431f84426'
    ),
    MotionsCountLimitChanged: new LogEvent<([_newMotionsCountLimit: bigint] & {_newMotionsCountLimit: bigint})>(
        abi, '0x5e368703b7ab35fe9ef4dbc482cd414476841204c7484b8e834d0d3ac4ed8672'
    ),
    ObjectionsThresholdChanged: new LogEvent<([_newThreshold: bigint] & {_newThreshold: bigint})>(
        abi, '0xd60715ce58337415334d06256811f30ed8db120287970870d8505e5ed9074c60'
    ),
    Paused: new LogEvent<([account: string] & {account: string})>(
        abi, '0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258'
    ),
    RoleAdminChanged: new LogEvent<([role: string, previousAdminRole: string, newAdminRole: string] & {role: string, previousAdminRole: string, newAdminRole: string})>(
        abi, '0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff'
    ),
    RoleGranted: new LogEvent<([role: string, account: string, sender: string] & {role: string, account: string, sender: string})>(
        abi, '0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d'
    ),
    RoleRevoked: new LogEvent<([role: string, account: string, sender: string] & {role: string, account: string, sender: string})>(
        abi, '0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b'
    ),
    Unpaused: new LogEvent<([account: string] & {account: string})>(
        abi, '0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa'
    ),
}

export const functions = {
    CANCEL_ROLE: new Func<[], {}, string>(
        abi, '0x13c27ca7'
    ),
    DEFAULT_ADMIN_ROLE: new Func<[], {}, string>(
        abi, '0xa217fddf'
    ),
    MAX_MOTIONS_LIMIT: new Func<[], {}, bigint>(
        abi, '0xe1637395'
    ),
    MAX_OBJECTIONS_THRESHOLD: new Func<[], {}, bigint>(
        abi, '0xcdb6aefc'
    ),
    MIN_MOTION_DURATION: new Func<[], {}, bigint>(
        abi, '0x88407bd4'
    ),
    PAUSE_ROLE: new Func<[], {}, string>(
        abi, '0x389ed267'
    ),
    UNPAUSE_ROLE: new Func<[], {}, string>(
        abi, '0x309756fb'
    ),
    addEVMScriptFactory: new Func<[_evmScriptFactory: string, _permissions: string], {_evmScriptFactory: string, _permissions: string}, []>(
        abi, '0x42f04989'
    ),
    canObjectToMotion: new Func<[_motionId: bigint, _objector: string], {_motionId: bigint, _objector: string}, boolean>(
        abi, '0xa3e73078'
    ),
    cancelAllMotions: new Func<[], {}, []>(
        abi, '0xde7cb878'
    ),
    cancelMotion: new Func<[_motionId: bigint], {_motionId: bigint}, []>(
        abi, '0xc34205cd'
    ),
    cancelMotions: new Func<[_motionIds: Array<bigint>], {_motionIds: Array<bigint>}, []>(
        abi, '0xc7794870'
    ),
    createMotion: new Func<[_evmScriptFactory: string, _evmScriptCallData: string], {_evmScriptFactory: string, _evmScriptCallData: string}, bigint>(
        abi, '0xe6f5ed5d'
    ),
    enactMotion: new Func<[_motionId: bigint, _evmScriptCallData: string], {_motionId: bigint, _evmScriptCallData: string}, []>(
        abi, '0x9a4ee59c'
    ),
    evmScriptExecutor: new Func<[], {}, string>(
        abi, '0xf0fdd736'
    ),
    evmScriptFactories: new Func<[_: bigint], {}, string>(
        abi, '0xef89ad95'
    ),
    evmScriptFactoryPermissions: new Func<[_: string], {}, string>(
        abi, '0xf9783b48'
    ),
    getEVMScriptFactories: new Func<[], {}, Array<string>>(
        abi, '0xee20ff08'
    ),
    getMotion: new Func<[_motionId: bigint], {_motionId: bigint}, ([id: bigint, evmScriptFactory: string, creator: string, duration: bigint, startDate: bigint, snapshotBlock: bigint, objectionsThreshold: bigint, objectionsAmount: bigint, evmScriptHash: string] & {id: bigint, evmScriptFactory: string, creator: string, duration: bigint, startDate: bigint, snapshotBlock: bigint, objectionsThreshold: bigint, objectionsAmount: bigint, evmScriptHash: string})>(
        abi, '0xad15aad2'
    ),
    getMotions: new Func<[], {}, Array<([id: bigint, evmScriptFactory: string, creator: string, duration: bigint, startDate: bigint, snapshotBlock: bigint, objectionsThreshold: bigint, objectionsAmount: bigint, evmScriptHash: string] & {id: bigint, evmScriptFactory: string, creator: string, duration: bigint, startDate: bigint, snapshotBlock: bigint, objectionsThreshold: bigint, objectionsAmount: bigint, evmScriptHash: string})>>(
        abi, '0x329696bc'
    ),
    getRoleAdmin: new Func<[role: string], {role: string}, string>(
        abi, '0x248a9ca3'
    ),
    governanceToken: new Func<[], {}, string>(
        abi, '0xf96dae0a'
    ),
    grantRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x2f2ff15d'
    ),
    hasRole: new Func<[role: string, account: string], {role: string, account: string}, boolean>(
        abi, '0x91d14854'
    ),
    isEVMScriptFactory: new Func<[_maybeEVMScriptFactory: string], {_maybeEVMScriptFactory: string}, boolean>(
        abi, '0x2d65a9f0'
    ),
    motionDuration: new Func<[], {}, bigint>(
        abi, '0x64993a73'
    ),
    motions: new Func<[_: bigint], {}, ([id: bigint, evmScriptFactory: string, creator: string, duration: bigint, startDate: bigint, snapshotBlock: bigint, objectionsThreshold: bigint, objectionsAmount: bigint, evmScriptHash: string] & {id: bigint, evmScriptFactory: string, creator: string, duration: bigint, startDate: bigint, snapshotBlock: bigint, objectionsThreshold: bigint, objectionsAmount: bigint, evmScriptHash: string})>(
        abi, '0xb21d36a8'
    ),
    motionsCountLimit: new Func<[], {}, bigint>(
        abi, '0x3128cce0'
    ),
    objectToMotion: new Func<[_motionId: bigint], {_motionId: bigint}, []>(
        abi, '0x38c1f876'
    ),
    objections: new Func<[_: bigint, _: string], {}, boolean>(
        abi, '0xee7eae29'
    ),
    objectionsThreshold: new Func<[], {}, bigint>(
        abi, '0x930c2b31'
    ),
    pause: new Func<[], {}, []>(
        abi, '0x8456cb59'
    ),
    paused: new Func<[], {}, boolean>(
        abi, '0x5c975abb'
    ),
    removeEVMScriptFactory: new Func<[_evmScriptFactory: string], {_evmScriptFactory: string}, []>(
        abi, '0x7d3ac0fb'
    ),
    renounceRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x36568abe'
    ),
    revokeRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0xd547741f'
    ),
    setEVMScriptExecutor: new Func<[_evmScriptExecutor: string], {_evmScriptExecutor: string}, []>(
        abi, '0xb2223eb5'
    ),
    setMotionDuration: new Func<[_motionDuration: bigint], {_motionDuration: bigint}, []>(
        abi, '0x31a40e6e'
    ),
    setMotionsCountLimit: new Func<[_motionsCountLimit: bigint], {_motionsCountLimit: bigint}, []>(
        abi, '0xfdc28ab8'
    ),
    setObjectionsThreshold: new Func<[_objectionsThreshold: bigint], {_objectionsThreshold: bigint}, []>(
        abi, '0xef1ae2f6'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    unpause: new Func<[], {}, []>(
        abi, '0x3f4ba83a'
    ),
}

export class Contract extends ContractBase {

    CANCEL_ROLE(): Promise<string> {
        return this.eth_call(functions.CANCEL_ROLE, [])
    }

    DEFAULT_ADMIN_ROLE(): Promise<string> {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, [])
    }

    MAX_MOTIONS_LIMIT(): Promise<bigint> {
        return this.eth_call(functions.MAX_MOTIONS_LIMIT, [])
    }

    MAX_OBJECTIONS_THRESHOLD(): Promise<bigint> {
        return this.eth_call(functions.MAX_OBJECTIONS_THRESHOLD, [])
    }

    MIN_MOTION_DURATION(): Promise<bigint> {
        return this.eth_call(functions.MIN_MOTION_DURATION, [])
    }

    PAUSE_ROLE(): Promise<string> {
        return this.eth_call(functions.PAUSE_ROLE, [])
    }

    UNPAUSE_ROLE(): Promise<string> {
        return this.eth_call(functions.UNPAUSE_ROLE, [])
    }

    canObjectToMotion(_motionId: bigint, _objector: string): Promise<boolean> {
        return this.eth_call(functions.canObjectToMotion, [_motionId, _objector])
    }

    evmScriptExecutor(): Promise<string> {
        return this.eth_call(functions.evmScriptExecutor, [])
    }

    evmScriptFactories(arg0: bigint): Promise<string> {
        return this.eth_call(functions.evmScriptFactories, [arg0])
    }

    evmScriptFactoryPermissions(arg0: string): Promise<string> {
        return this.eth_call(functions.evmScriptFactoryPermissions, [arg0])
    }

    getEVMScriptFactories(): Promise<Array<string>> {
        return this.eth_call(functions.getEVMScriptFactories, [])
    }

    getMotion(_motionId: bigint): Promise<([id: bigint, evmScriptFactory: string, creator: string, duration: bigint, startDate: bigint, snapshotBlock: bigint, objectionsThreshold: bigint, objectionsAmount: bigint, evmScriptHash: string] & {id: bigint, evmScriptFactory: string, creator: string, duration: bigint, startDate: bigint, snapshotBlock: bigint, objectionsThreshold: bigint, objectionsAmount: bigint, evmScriptHash: string})> {
        return this.eth_call(functions.getMotion, [_motionId])
    }

    getMotions(): Promise<Array<([id: bigint, evmScriptFactory: string, creator: string, duration: bigint, startDate: bigint, snapshotBlock: bigint, objectionsThreshold: bigint, objectionsAmount: bigint, evmScriptHash: string] & {id: bigint, evmScriptFactory: string, creator: string, duration: bigint, startDate: bigint, snapshotBlock: bigint, objectionsThreshold: bigint, objectionsAmount: bigint, evmScriptHash: string})>> {
        return this.eth_call(functions.getMotions, [])
    }

    getRoleAdmin(role: string): Promise<string> {
        return this.eth_call(functions.getRoleAdmin, [role])
    }

    governanceToken(): Promise<string> {
        return this.eth_call(functions.governanceToken, [])
    }

    hasRole(role: string, account: string): Promise<boolean> {
        return this.eth_call(functions.hasRole, [role, account])
    }

    isEVMScriptFactory(_maybeEVMScriptFactory: string): Promise<boolean> {
        return this.eth_call(functions.isEVMScriptFactory, [_maybeEVMScriptFactory])
    }

    motionDuration(): Promise<bigint> {
        return this.eth_call(functions.motionDuration, [])
    }

    motions(arg0: bigint): Promise<([id: bigint, evmScriptFactory: string, creator: string, duration: bigint, startDate: bigint, snapshotBlock: bigint, objectionsThreshold: bigint, objectionsAmount: bigint, evmScriptHash: string] & {id: bigint, evmScriptFactory: string, creator: string, duration: bigint, startDate: bigint, snapshotBlock: bigint, objectionsThreshold: bigint, objectionsAmount: bigint, evmScriptHash: string})> {
        return this.eth_call(functions.motions, [arg0])
    }

    motionsCountLimit(): Promise<bigint> {
        return this.eth_call(functions.motionsCountLimit, [])
    }

    objections(arg0: bigint, arg1: string): Promise<boolean> {
        return this.eth_call(functions.objections, [arg0, arg1])
    }

    objectionsThreshold(): Promise<bigint> {
        return this.eth_call(functions.objectionsThreshold, [])
    }

    paused(): Promise<boolean> {
        return this.eth_call(functions.paused, [])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }
}
