import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './Voting.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    StartVote: new LogEvent<([voteId: bigint, creator: string, metadata: string] & {voteId: bigint, creator: string, metadata: string})>(
        abi, '0x4d72fe0577a3a3f7da968d7b892779dde102519c25527b29cf7054f245c791b9'
    ),
    CastVote: new LogEvent<([voteId: bigint, voter: string, supports: boolean, stake: bigint] & {voteId: bigint, voter: string, supports: boolean, stake: bigint})>(
        abi, '0xb34ee265e3d4f5ec4e8b52d59b2a9be8fceca2f274ebc080d8fba797fea9391f'
    ),
    CastObjection: new LogEvent<([voteId: bigint, voter: string, stake: bigint] & {voteId: bigint, voter: string, stake: bigint})>(
        abi, '0xfa539989fcfb5d8fa8c97a1102d1777a34c3543f0725fb8ab66109619bb9de18'
    ),
    ExecuteVote: new LogEvent<([voteId: bigint] & {voteId: bigint})>(
        abi, '0xbf8e2b108bb7c980e08903a8a46527699d5e84905a082d56dacb4150725c8cab'
    ),
    ChangeSupportRequired: new LogEvent<([supportRequiredPct: bigint] & {supportRequiredPct: bigint})>(
        abi, '0x903b617f7f36eb047a29b89d1bf7885fdae31d250c3320fccf11d045c11b396e'
    ),
    ChangeMinQuorum: new LogEvent<([minAcceptQuorumPct: bigint] & {minAcceptQuorumPct: bigint})>(
        abi, '0x3172f2e9273c729c2a47cc8bf7e7f18506e3e3035126d562602bd2155bc78a50'
    ),
    ChangeVoteTime: new LogEvent<([voteTime: bigint] & {voteTime: bigint})>(
        abi, '0x776dcd10c15e7a1bd4fbb6c824d2a80fa8a40a3a6b401fddc678696b7fb06abe'
    ),
    ChangeObjectionPhaseTime: new LogEvent<([objectionPhaseTime: bigint] & {objectionPhaseTime: bigint})>(
        abi, '0xf2eb32f215d9f6d0f4ace97038141d2574af9f8c3bb509239254ace3d9c27000'
    ),
    ScriptResult: new LogEvent<([executor: string, script: string, input: string, returnData: string] & {executor: string, script: string, input: string, returnData: string})>(
        abi, '0x5229a5dba83a54ae8cb5b51bdd6de9474cacbe9dd332f5185f3a4f4f2e3f4ad9'
    ),
    RecoverToVault: new LogEvent<([vault: string, token: string, amount: bigint] & {vault: string, token: string, amount: bigint})>(
        abi, '0x596caf56044b55fb8c4ca640089bbc2b63cae3e978b851f5745cbb7c5b288e02'
    ),
}

export const functions = {
    hasInitialized: new Func<[], {}, boolean>(
        abi, '0x0803fac0'
    ),
    unsafelyChangeObjectionPhaseTime: new Func<[_objectionPhaseTime: bigint], {_objectionPhaseTime: bigint}, []>(
        abi, '0x1351c2f5'
    ),
    initialize: new Func<[_token: string, _supportRequiredPct: bigint, _minAcceptQuorumPct: bigint, _voteTime: bigint, _objectionPhaseTime: bigint], {_token: string, _supportRequiredPct: bigint, _minAcceptQuorumPct: bigint, _voteTime: bigint, _objectionPhaseTime: bigint}, []>(
        abi, '0x13e09453'
    ),
    UNSAFELY_MODIFY_VOTE_TIME_ROLE: new Func<[], {}, string>(
        abi, '0x21ab25ed'
    ),
    unsafelyChangeVoteTime: new Func<[_voteTime: bigint], {_voteTime: bigint}, []>(
        abi, '0x24b2c7c4'
    ),
    getEVMScriptExecutor: new Func<[_script: string], {_script: string}, string>(
        abi, '0x2914b9bd'
    ),
    getRecoveryVault: new Func<[], {}, string>(
        abi, '0x32f0a3b5'
    ),
    MODIFY_QUORUM_ROLE: new Func<[], {}, string>(
        abi, '0x3c624c75'
    ),
    objectionPhaseTime: new Func<[], {}, bigint>(
        abi, '0x3fe1614e'
    ),
    getVoterState: new Func<[_voteId: bigint, _voter: string], {_voteId: bigint, _voter: string}, number>(
        abi, '0x4b12311c'
    ),
    getVote: new Func<[_voteId: bigint], {_voteId: bigint}, ([open: boolean, executed: boolean, startDate: bigint, snapshotBlock: bigint, supportRequired: bigint, minAcceptQuorum: bigint, yea: bigint, nay: bigint, votingPower: bigint, script: string, phase: number] & {open: boolean, executed: boolean, startDate: bigint, snapshotBlock: bigint, supportRequired: bigint, minAcceptQuorum: bigint, yea: bigint, nay: bigint, votingPower: bigint, script: string, phase: number})>(
        abi, '0x5a55c1f0'
    ),
    changeMinAcceptQuorumPct: new Func<[_minAcceptQuorumPct: bigint], {_minAcceptQuorumPct: bigint}, []>(
        abi, '0x5eb24332'
    ),
    MODIFY_SUPPORT_ROLE: new Func<[], {}, string>(
        abi, '0x62de7e5a'
    ),
    changeSupportRequiredPct: new Func<[_supportRequiredPct: bigint], {_supportRequiredPct: bigint}, []>(
        abi, '0x7c1d0b87'
    ),
    allowRecoverability: new Func<[token: string], {token: string}, boolean>(
        abi, '0x7e7db6e1'
    ),
    appId: new Func<[], {}, string>(
        abi, '0x80afdea8'
    ),
    getInitializationBlock: new Func<[], {}, bigint>(
        abi, '0x8b3dd749'
    ),
    transferToVault: new Func<[_token: string], {_token: string}, []>(
        abi, '0x9d4941d8'
    ),
    canPerform: new Func<[_sender: string, _role: string, _params: Array<bigint>], {_sender: string, _role: string, _params: Array<bigint>}, boolean>(
        abi, '0xa1658fad'
    ),
    getEVMScriptRegistry: new Func<[], {}, string>(
        abi, '0xa479e508'
    ),
    voteTime: new Func<[], {}, bigint>(
        abi, '0xbcf93dd6'
    ),
    CREATE_VOTES_ROLE: new Func<[], {}, string>(
        abi, '0xbe2c64d4'
    ),
    canForward: new Func<[_sender: string, _: string], {_sender: string}, boolean>(
        abi, '0xc0774df3'
    ),
    canExecute: new Func<[_voteId: bigint], {_voteId: bigint}, boolean>(
        abi, '0xcc63604a'
    ),
    canVote: new Func<[_voteId: bigint, _voter: string], {_voteId: bigint, _voter: string}, boolean>(
        abi, '0xcdb2867b'
    ),
    kernel: new Func<[], {}, string>(
        abi, '0xd4aae0c4'
    ),
    'newVote(bytes,string)': new Func<[_executionScript: string, _metadata: string], {_executionScript: string, _metadata: string}, bigint>(
        abi, '0xd5db2c80'
    ),
    forward: new Func<[_evmScript: string], {_evmScript: string}, []>(
        abi, '0xd948d468'
    ),
    minAcceptQuorumPct: new Func<[], {}, bigint>(
        abi, '0xdc474b1a'
    ),
    isPetrified: new Func<[], {}, boolean>(
        abi, '0xde4796ed'
    ),
    votesLength: new Func<[], {}, bigint>(
        abi, '0xde4f6347'
    ),
    vote: new Func<[_voteId: bigint, _supports: boolean, _executesIfDecided_deprecated: boolean], {_voteId: bigint, _supports: boolean, _executesIfDecided_deprecated: boolean}, []>(
        abi, '0xdf133bca'
    ),
    'newVote(bytes,string,bool,bool)': new Func<[_executionScript: string, _metadata: string, _castVote: boolean, _executesIfDecided_deprecated: boolean], {_executionScript: string, _metadata: string, _castVote: boolean, _executesIfDecided_deprecated: boolean}, bigint>(
        abi, '0xf4b00513'
    ),
    getVotePhase: new Func<[_voteId: bigint], {_voteId: bigint}, number>(
        abi, '0xf5edb03a'
    ),
    executeVote: new Func<[_voteId: bigint], {_voteId: bigint}, []>(
        abi, '0xf98a4eca'
    ),
    supportRequiredPct: new Func<[], {}, bigint>(
        abi, '0xfad167ab'
    ),
    token: new Func<[], {}, string>(
        abi, '0xfc0c546a'
    ),
    PCT_BASE: new Func<[], {}, bigint>(
        abi, '0xfc157cb4'
    ),
    isForwarder: new Func<[], {}, boolean>(
        abi, '0xfd64eccb'
    ),
}

export class Contract extends ContractBase {

    hasInitialized(): Promise<boolean> {
        return this.eth_call(functions.hasInitialized, [])
    }

    UNSAFELY_MODIFY_VOTE_TIME_ROLE(): Promise<string> {
        return this.eth_call(functions.UNSAFELY_MODIFY_VOTE_TIME_ROLE, [])
    }

    getEVMScriptExecutor(_script: string): Promise<string> {
        return this.eth_call(functions.getEVMScriptExecutor, [_script])
    }

    getRecoveryVault(): Promise<string> {
        return this.eth_call(functions.getRecoveryVault, [])
    }

    MODIFY_QUORUM_ROLE(): Promise<string> {
        return this.eth_call(functions.MODIFY_QUORUM_ROLE, [])
    }

    objectionPhaseTime(): Promise<bigint> {
        return this.eth_call(functions.objectionPhaseTime, [])
    }

    getVoterState(_voteId: bigint, _voter: string): Promise<number> {
        return this.eth_call(functions.getVoterState, [_voteId, _voter])
    }

    getVote(_voteId: bigint): Promise<([open: boolean, executed: boolean, startDate: bigint, snapshotBlock: bigint, supportRequired: bigint, minAcceptQuorum: bigint, yea: bigint, nay: bigint, votingPower: bigint, script: string, phase: number] & {open: boolean, executed: boolean, startDate: bigint, snapshotBlock: bigint, supportRequired: bigint, minAcceptQuorum: bigint, yea: bigint, nay: bigint, votingPower: bigint, script: string, phase: number})> {
        return this.eth_call(functions.getVote, [_voteId])
    }

    MODIFY_SUPPORT_ROLE(): Promise<string> {
        return this.eth_call(functions.MODIFY_SUPPORT_ROLE, [])
    }

    allowRecoverability(token: string): Promise<boolean> {
        return this.eth_call(functions.allowRecoverability, [token])
    }

    appId(): Promise<string> {
        return this.eth_call(functions.appId, [])
    }

    getInitializationBlock(): Promise<bigint> {
        return this.eth_call(functions.getInitializationBlock, [])
    }

    canPerform(_sender: string, _role: string, _params: Array<bigint>): Promise<boolean> {
        return this.eth_call(functions.canPerform, [_sender, _role, _params])
    }

    getEVMScriptRegistry(): Promise<string> {
        return this.eth_call(functions.getEVMScriptRegistry, [])
    }

    voteTime(): Promise<bigint> {
        return this.eth_call(functions.voteTime, [])
    }

    CREATE_VOTES_ROLE(): Promise<string> {
        return this.eth_call(functions.CREATE_VOTES_ROLE, [])
    }

    canForward(_sender: string, arg1: string): Promise<boolean> {
        return this.eth_call(functions.canForward, [_sender, arg1])
    }

    canExecute(_voteId: bigint): Promise<boolean> {
        return this.eth_call(functions.canExecute, [_voteId])
    }

    canVote(_voteId: bigint, _voter: string): Promise<boolean> {
        return this.eth_call(functions.canVote, [_voteId, _voter])
    }

    kernel(): Promise<string> {
        return this.eth_call(functions.kernel, [])
    }

    minAcceptQuorumPct(): Promise<bigint> {
        return this.eth_call(functions.minAcceptQuorumPct, [])
    }

    isPetrified(): Promise<boolean> {
        return this.eth_call(functions.isPetrified, [])
    }

    votesLength(): Promise<bigint> {
        return this.eth_call(functions.votesLength, [])
    }

    getVotePhase(_voteId: bigint): Promise<number> {
        return this.eth_call(functions.getVotePhase, [_voteId])
    }

    supportRequiredPct(): Promise<bigint> {
        return this.eth_call(functions.supportRequiredPct, [])
    }

    token(): Promise<string> {
        return this.eth_call(functions.token, [])
    }

    PCT_BASE(): Promise<bigint> {
        return this.eth_call(functions.PCT_BASE, [])
    }

    isForwarder(): Promise<boolean> {
        return this.eth_call(functions.isForwarder, [])
    }
}
