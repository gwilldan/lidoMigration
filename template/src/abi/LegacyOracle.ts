import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './LegacyOracle.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    ScriptResult: new LogEvent<([executor: string, script: string, input: string, returnData: string] & {executor: string, script: string, input: string, returnData: string})>(
        abi, '0x5229a5dba83a54ae8cb5b51bdd6de9474cacbe9dd332f5185f3a4f4f2e3f4ad9'
    ),
    RecoverToVault: new LogEvent<([vault: string, token: string, amount: bigint] & {vault: string, token: string, amount: bigint})>(
        abi, '0x596caf56044b55fb8c4ca640089bbc2b63cae3e978b851f5745cbb7c5b288e02'
    ),
    AllowedBeaconBalanceAnnualRelativeIncreaseSet: new LogEvent<([value: bigint] & {value: bigint})>(
        abi, '0x15befe448b41dd28cf3e1b9db42dbb489e7bd480093345e3dbb132ab2993b537'
    ),
    AllowedBeaconBalanceRelativeDecreaseSet: new LogEvent<([value: bigint] & {value: bigint})>(
        abi, '0x0116349092cceaec6172fcd61b2b801a45663783c9dca24919105b66a62da84a'
    ),
    BeaconReportReceiverSet: new LogEvent<([callback: string] & {callback: string})>(
        abi, '0x10bdb8bba3913c9e1b7ffbf8759dfcf1c355d9796d58906b147ff0b4c3e31448'
    ),
    MemberAdded: new LogEvent<([member: string] & {member: string})>(
        abi, '0xb251eb052afc73ffd02ffe85ad79990a8b3fed60d76dbc2fa2fdd7123dffd914'
    ),
    MemberRemoved: new LogEvent<([member: string] & {member: string})>(
        abi, '0x6e76fb4c77256006d9c38ec7d82b45a8c8f3c27b1d6766fffc42dfb8de684492'
    ),
    QuorumChanged: new LogEvent<([quorum: bigint] & {quorum: bigint})>(
        abi, '0x027863d12a407097e086a48e36475bfc859d0b200b7e6f65b5fd3b218e46632e'
    ),
    ExpectedEpochIdUpdated: new LogEvent<([epochId: bigint] & {epochId: bigint})>(
        abi, '0xcdcd275f4d96ed683d684f3610a92beacdebcf1ee4d37e2df526fb9001e1ea63'
    ),
    BeaconSpecSet: new LogEvent<([epochsPerFrame: bigint, slotsPerEpoch: bigint, secondsPerSlot: bigint, genesisTime: bigint] & {epochsPerFrame: bigint, slotsPerEpoch: bigint, secondsPerSlot: bigint, genesisTime: bigint})>(
        abi, '0xa15de8f88515e04da45ad2303c04e9f126945fd99e173d3d93ff6351e1f335ee'
    ),
    BeaconReported: new LogEvent<([epochId: bigint, beaconBalance: bigint, beaconValidators: bigint, caller: string] & {epochId: bigint, beaconBalance: bigint, beaconValidators: bigint, caller: string})>(
        abi, '0x23285eb039d2d2881abbf7503a6d39ac5d3113701031b3e69abcb1d2cc24266f'
    ),
    Completed: new LogEvent<([epochId: bigint, beaconBalance: bigint, beaconValidators: bigint] & {epochId: bigint, beaconBalance: bigint, beaconValidators: bigint})>(
        abi, '0x95423529aa0b2867e02676b0bb4766cde576fb31ea77056f683bc236c7c15f9d'
    ),
    PostTotalShares: new LogEvent<([postTotalPooledEther: bigint, preTotalPooledEther: bigint, timeElapsed: bigint, totalShares: bigint] & {postTotalPooledEther: bigint, preTotalPooledEther: bigint, timeElapsed: bigint, totalShares: bigint})>(
        abi, '0xdafd48d1eba2a416b2aca45e9ead3ad18b84e868fa6d2e1a3048bfd37ed10a32'
    ),
    ContractVersionSet: new LogEvent<([version: bigint] & {version: bigint})>(
        abi, '0xfddcded6b4f4730c226821172046b48372d3cd963c159701ae1b7c3bcac541bb'
    ),
}

export const functions = {
    getCurrentOraclesReportStatus: new Func<[], {}, bigint>(
        abi, '0x03cda963'
    ),
    setAllowedBeaconBalanceAnnualRelativeIncrease: new Func<[_value: bigint], {_value: bigint}, []>(
        abi, '0x0719d531'
    ),
    hasInitialized: new Func<[], {}, boolean>(
        abi, '0x0803fac0'
    ),
    getVersion: new Func<[], {}, bigint>(
        abi, '0x0d8e6e2c'
    ),
    getEVMScriptExecutor: new Func<[_script: string], {_script: string}, string>(
        abi, '0x2914b9bd'
    ),
    MANAGE_QUORUM: new Func<[], {}, string>(
        abi, '0x2fa689bb'
    ),
    reportBeacon: new Func<[_epochId: bigint, _beaconBalance: bigint, _beaconValidators: number], {_epochId: bigint, _beaconBalance: bigint, _beaconValidators: number}, []>(
        abi, '0x31f208b3'
    ),
    getRecoveryVault: new Func<[], {}, string>(
        abi, '0x32f0a3b5'
    ),
    getAllowedBeaconBalanceAnnualRelativeIncrease: new Func<[], {}, bigint>(
        abi, '0x43125b02'
    ),
    getAllowedBeaconBalanceRelativeDecrease: new Func<[], {}, bigint>(
        abi, '0x43d21789'
    ),
    getExpectedEpochId: new Func<[], {}, bigint>(
        abi, '0x4b47b74f'
    ),
    getLastCompletedReportDelta: new Func<[], {}, ([postTotalPooledEther: bigint, preTotalPooledEther: bigint, timeElapsed: bigint] & {postTotalPooledEther: bigint, preTotalPooledEther: bigint, timeElapsed: bigint})>(
        abi, '0x534649c4'
    ),
    initialize: new Func<[_lido: string, _epochsPerFrame: bigint, _slotsPerEpoch: bigint, _secondsPerSlot: bigint, _genesisTime: bigint, _allowedBeaconBalanceAnnualRelativeIncrease: bigint, _allowedBeaconBalanceRelativeDecrease: bigint], {_lido: string, _epochsPerFrame: bigint, _slotsPerEpoch: bigint, _secondsPerSlot: bigint, _genesisTime: bigint, _allowedBeaconBalanceAnnualRelativeIncrease: bigint, _allowedBeaconBalanceRelativeDecrease: bigint}, []>(
        abi, '0x59ae8e9e'
    ),
    getLido: new Func<[], {}, string>(
        abi, '0x6a516b47'
    ),
    SET_BEACON_REPORT_RECEIVER: new Func<[], {}, string>(
        abi, '0x6b788573'
    ),
    finalizeUpgrade_v3: new Func<[], {}, []>(
        abi, '0x6d395b7e'
    ),
    MANAGE_MEMBERS: new Func<[], {}, string>(
        abi, '0x6e93beb8'
    ),
    getCurrentFrame: new Func<[], {}, ([frameEpochId: bigint, frameStartTime: bigint, frameEndTime: bigint] & {frameEpochId: bigint, frameStartTime: bigint, frameEndTime: bigint})>(
        abi, '0x72f79b13'
    ),
    allowRecoverability: new Func<[token: string], {token: string}, boolean>(
        abi, '0x7e7db6e1'
    ),
    getCurrentReportVariant: new Func<[_index: bigint], {_index: bigint}, ([beaconBalance: bigint, beaconValidators: number, count: number] & {beaconBalance: bigint, beaconValidators: number, count: number})>(
        abi, '0x7ffb1472'
    ),
    appId: new Func<[], {}, string>(
        abi, '0x80afdea8'
    ),
    getLastCompletedEpochId: new Func<[], {}, bigint>(
        abi, '0x89896aef'
    ),
    getInitializationBlock: new Func<[], {}, bigint>(
        abi, '0x8b3dd749'
    ),
    setBeaconReportReceiver: new Func<[_addr: string], {_addr: string}, []>(
        abi, '0x9a3cb2ca'
    ),
    transferToVault: new Func<[_token: string], {_token: string}, []>(
        abi, '0x9d4941d8'
    ),
    SET_BEACON_SPEC: new Func<[], {}, string>(
        abi, '0xa01f0486'
    ),
    canPerform: new Func<[_sender: string, _role: string, _params: Array<bigint>], {_sender: string, _role: string, _params: Array<bigint>}, boolean>(
        abi, '0xa1658fad'
    ),
    getCurrentEpochId: new Func<[], {}, bigint>(
        abi, '0xa29a839f'
    ),
    getEVMScriptRegistry: new Func<[], {}, string>(
        abi, '0xa479e508'
    ),
    addOracleMember: new Func<[_member: string], {_member: string}, []>(
        abi, '0xb164e437'
    ),
    getBeaconReportReceiver: new Func<[], {}, string>(
        abi, '0xb2480603'
    ),
    SET_REPORT_BOUNDARIES: new Func<[], {}, string>(
        abi, '0xb97d5596'
    ),
    setQuorum: new Func<[_quorum: bigint], {_quorum: bigint}, []>(
        abi, '0xc1ba4e59'
    ),
    getQuorum: new Func<[], {}, bigint>(
        abi, '0xc26c12eb'
    ),
    kernel: new Func<[], {}, string>(
        abi, '0xd4aae0c4'
    ),
    getOracleMembers: new Func<[], {}, Array<string>>(
        abi, '0xdabb5757'
    ),
    isPetrified: new Func<[], {}, boolean>(
        abi, '0xde4796ed'
    ),
    setAllowedBeaconBalanceRelativeDecrease: new Func<[_value: bigint], {_value: bigint}, []>(
        abi, '0xde50700f'
    ),
    getBeaconSpec: new Func<[], {}, ([epochsPerFrame: bigint, slotsPerEpoch: bigint, secondsPerSlot: bigint, genesisTime: bigint] & {epochsPerFrame: bigint, slotsPerEpoch: bigint, secondsPerSlot: bigint, genesisTime: bigint})>(
        abi, '0xe547c77c'
    ),
    setBeaconSpec: new Func<[_epochsPerFrame: bigint, _slotsPerEpoch: bigint, _secondsPerSlot: bigint, _genesisTime: bigint], {_epochsPerFrame: bigint, _slotsPerEpoch: bigint, _secondsPerSlot: bigint, _genesisTime: bigint}, []>(
        abi, '0xe90b2da1'
    ),
    MAX_MEMBERS: new Func<[], {}, bigint>(
        abi, '0xea0e35b1'
    ),
    getCurrentReportVariantsSize: new Func<[], {}, bigint>(
        abi, '0xed9767d9'
    ),
    removeOracleMember: new Func<[_member: string], {_member: string}, []>(
        abi, '0xf98fae81'
    ),
}

export class Contract extends ContractBase {

    getCurrentOraclesReportStatus(): Promise<bigint> {
        return this.eth_call(functions.getCurrentOraclesReportStatus, [])
    }

    hasInitialized(): Promise<boolean> {
        return this.eth_call(functions.hasInitialized, [])
    }

    getVersion(): Promise<bigint> {
        return this.eth_call(functions.getVersion, [])
    }

    getEVMScriptExecutor(_script: string): Promise<string> {
        return this.eth_call(functions.getEVMScriptExecutor, [_script])
    }

    MANAGE_QUORUM(): Promise<string> {
        return this.eth_call(functions.MANAGE_QUORUM, [])
    }

    getRecoveryVault(): Promise<string> {
        return this.eth_call(functions.getRecoveryVault, [])
    }

    getAllowedBeaconBalanceAnnualRelativeIncrease(): Promise<bigint> {
        return this.eth_call(functions.getAllowedBeaconBalanceAnnualRelativeIncrease, [])
    }

    getAllowedBeaconBalanceRelativeDecrease(): Promise<bigint> {
        return this.eth_call(functions.getAllowedBeaconBalanceRelativeDecrease, [])
    }

    getExpectedEpochId(): Promise<bigint> {
        return this.eth_call(functions.getExpectedEpochId, [])
    }

    getLastCompletedReportDelta(): Promise<([postTotalPooledEther: bigint, preTotalPooledEther: bigint, timeElapsed: bigint] & {postTotalPooledEther: bigint, preTotalPooledEther: bigint, timeElapsed: bigint})> {
        return this.eth_call(functions.getLastCompletedReportDelta, [])
    }

    getLido(): Promise<string> {
        return this.eth_call(functions.getLido, [])
    }

    SET_BEACON_REPORT_RECEIVER(): Promise<string> {
        return this.eth_call(functions.SET_BEACON_REPORT_RECEIVER, [])
    }

    MANAGE_MEMBERS(): Promise<string> {
        return this.eth_call(functions.MANAGE_MEMBERS, [])
    }

    getCurrentFrame(): Promise<([frameEpochId: bigint, frameStartTime: bigint, frameEndTime: bigint] & {frameEpochId: bigint, frameStartTime: bigint, frameEndTime: bigint})> {
        return this.eth_call(functions.getCurrentFrame, [])
    }

    allowRecoverability(token: string): Promise<boolean> {
        return this.eth_call(functions.allowRecoverability, [token])
    }

    getCurrentReportVariant(_index: bigint): Promise<([beaconBalance: bigint, beaconValidators: number, count: number] & {beaconBalance: bigint, beaconValidators: number, count: number})> {
        return this.eth_call(functions.getCurrentReportVariant, [_index])
    }

    appId(): Promise<string> {
        return this.eth_call(functions.appId, [])
    }

    getLastCompletedEpochId(): Promise<bigint> {
        return this.eth_call(functions.getLastCompletedEpochId, [])
    }

    getInitializationBlock(): Promise<bigint> {
        return this.eth_call(functions.getInitializationBlock, [])
    }

    SET_BEACON_SPEC(): Promise<string> {
        return this.eth_call(functions.SET_BEACON_SPEC, [])
    }

    canPerform(_sender: string, _role: string, _params: Array<bigint>): Promise<boolean> {
        return this.eth_call(functions.canPerform, [_sender, _role, _params])
    }

    getCurrentEpochId(): Promise<bigint> {
        return this.eth_call(functions.getCurrentEpochId, [])
    }

    getEVMScriptRegistry(): Promise<string> {
        return this.eth_call(functions.getEVMScriptRegistry, [])
    }

    getBeaconReportReceiver(): Promise<string> {
        return this.eth_call(functions.getBeaconReportReceiver, [])
    }

    SET_REPORT_BOUNDARIES(): Promise<string> {
        return this.eth_call(functions.SET_REPORT_BOUNDARIES, [])
    }

    getQuorum(): Promise<bigint> {
        return this.eth_call(functions.getQuorum, [])
    }

    kernel(): Promise<string> {
        return this.eth_call(functions.kernel, [])
    }

    getOracleMembers(): Promise<Array<string>> {
        return this.eth_call(functions.getOracleMembers, [])
    }

    isPetrified(): Promise<boolean> {
        return this.eth_call(functions.isPetrified, [])
    }

    getBeaconSpec(): Promise<([epochsPerFrame: bigint, slotsPerEpoch: bigint, secondsPerSlot: bigint, genesisTime: bigint] & {epochsPerFrame: bigint, slotsPerEpoch: bigint, secondsPerSlot: bigint, genesisTime: bigint})> {
        return this.eth_call(functions.getBeaconSpec, [])
    }

    MAX_MEMBERS(): Promise<bigint> {
        return this.eth_call(functions.MAX_MEMBERS, [])
    }

    getCurrentReportVariantsSize(): Promise<bigint> {
        return this.eth_call(functions.getCurrentReportVariantsSize, [])
    }
}
