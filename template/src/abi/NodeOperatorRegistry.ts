import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './NodeOperatorRegistry.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    ScriptResult: new LogEvent<([executor: string, script: string, input: string, returnData: string] & {executor: string, script: string, input: string, returnData: string})>(
        abi, '0x5229a5dba83a54ae8cb5b51bdd6de9474cacbe9dd332f5185f3a4f4f2e3f4ad9'
    ),
    RecoverToVault: new LogEvent<([vault: string, token: string, amount: bigint] & {vault: string, token: string, amount: bigint})>(
        abi, '0x596caf56044b55fb8c4ca640089bbc2b63cae3e978b851f5745cbb7c5b288e02'
    ),
    NodeOperatorAdded: new LogEvent<([id: bigint, name: string, rewardAddress: string, stakingLimit: bigint] & {id: bigint, name: string, rewardAddress: string, stakingLimit: bigint})>(
        abi, '0xc52ec0ad7872dae440d886040390c13677df7bf3cca136d8d81e5e5e7dd62ff1'
    ),
    NodeOperatorActiveSet: new LogEvent<([id: bigint, active: boolean] & {id: bigint, active: boolean})>(
        abi, '0xecdf08e8a6c4493efb460f6abc7d14532074fa339c3a6410623a1d3ee0fb2cac'
    ),
    NodeOperatorNameSet: new LogEvent<([id: bigint, name: string] & {id: bigint, name: string})>(
        abi, '0xcb16868f4831cc58a28d413f658752a2958bd1f50e94ed6391716b936c48093b'
    ),
    NodeOperatorRewardAddressSet: new LogEvent<([id: bigint, rewardAddress: string] & {id: bigint, rewardAddress: string})>(
        abi, '0x9a52205165d510fc1e428886d52108725dc01ed544da1702dc7bd3fdb3f243b2'
    ),
    NodeOperatorStakingLimitSet: new LogEvent<([id: bigint, stakingLimit: bigint] & {id: bigint, stakingLimit: bigint})>(
        abi, '0x59d11713a8801e3ba782d59e757fbcef75ca2ecabce8ccd06a0827941230b9f2'
    ),
    NodeOperatorTotalStoppedValidatorsReported: new LogEvent<([id: bigint, totalStopped: bigint] & {id: bigint, totalStopped: bigint})>(
        abi, '0xe6452c223b953d8ab5cb26c014095615322891268537911ba6fe1c939689703d'
    ),
    NodeOperatorTotalKeysTrimmed: new LogEvent<([id: bigint, totalKeysTrimmed: bigint] & {id: bigint, totalKeysTrimmed: bigint})>(
        abi, '0x9824694569ba758f8872bb150515caaf8f1e2cc27e6805679c4ac8c3b9b83d87'
    ),
    SigningKeyAdded: new LogEvent<([operatorId: bigint, pubkey: string] & {operatorId: bigint, pubkey: string})>(
        abi, '0xc77a17d6b857abe6d6e6c37301621bc72c4dd52fa8830fb54dfa715c04911a89'
    ),
    SigningKeyRemoved: new LogEvent<([operatorId: bigint, pubkey: string] & {operatorId: bigint, pubkey: string})>(
        abi, '0xea4b75aaf57196f73d338cadf79ecd0a437902e2dd0d2c4c2cf3ea71b8ab27b9'
    ),
    KeysOpIndexSet: new LogEvent<([keysOpIndex: bigint] & {keysOpIndex: bigint})>(
        abi, '0xfb992daec9d46d64898e3a9336d02811349df6cbea8b95d4deb2fa6c7b454f0d'
    ),
}

export const functions = {
    hasInitialized: new Func<[], {}, boolean>(
        abi, '0x0803fac0'
    ),
    addSigningKeys: new Func<[_operator_id: bigint, _quantity: bigint, _pubkeys: string, _signatures: string], {_operator_id: bigint, _quantity: bigint, _pubkeys: string, _signatures: string}, []>(
        abi, '0x096b7b35'
    ),
    getEVMScriptExecutor: new Func<[_script: string], {_script: string}, string>(
        abi, '0x2914b9bd'
    ),
    disableNodeOperator: new Func<[_id: bigint], {_id: bigint}, []>(
        abi, '0x316e56b9'
    ),
    getRecoveryVault: new Func<[], {}, string>(
        abi, '0x32f0a3b5'
    ),
    assignNextSigningKeys: new Func<[_numKeys: bigint], {_numKeys: bigint}, ([pubkeys: string, signatures: string] & {pubkeys: string, signatures: string})>(
        abi, '0x41bc716f'
    ),
    SIGNATURE_LENGTH: new Func<[], {}, bigint>(
        abi, '0x540bc5ea'
    ),
    SET_NODE_OPERATOR_ADDRESS_ROLE: new Func<[], {}, string>(
        abi, '0x5a9fc07e'
    ),
    removeSigningKeysOperatorBH: new Func<[_operator_id: bigint, _index: bigint, _amount: bigint], {_operator_id: bigint, _index: bigint, _amount: bigint}, []>(
        abi, '0x5ddde810'
    ),
    setNodeOperatorName: new Func<[_id: bigint, _name: string], {_id: bigint, _name: string}, []>(
        abi, '0x5e57d742'
    ),
    getRewardsDistribution: new Func<[_totalRewardShares: bigint], {_totalRewardShares: bigint}, ([recipients: Array<string>, shares: Array<bigint>] & {recipients: Array<string>, shares: Array<bigint>})>(
        abi, '0x62dcfda1'
    ),
    setNodeOperatorActive: new Func<[_id: bigint, _active: boolean], {_id: bigint, _active: boolean}, []>(
        abi, '0x687ca337'
    ),
    SET_NODE_OPERATOR_NAME_ROLE: new Func<[], {}, string>(
        abi, '0x69602607'
    ),
    removeSigningKey: new Func<[_operator_id: bigint, _index: bigint], {_operator_id: bigint, _index: bigint}, []>(
        abi, '0x6ef355f1'
    ),
    removeSigningKeys: new Func<[_operator_id: bigint, _index: bigint, _amount: bigint], {_operator_id: bigint, _index: bigint, _amount: bigint}, []>(
        abi, '0x7038b141'
    ),
    ADD_NODE_OPERATOR_ROLE: new Func<[], {}, string>(
        abi, '0x7294d685'
    ),
    allowRecoverability: new Func<[token: string], {token: string}, boolean>(
        abi, '0x7e7db6e1'
    ),
    addSigningKeysOperatorBH: new Func<[_operator_id: bigint, _quantity: bigint, _pubkeys: string, _signatures: string], {_operator_id: bigint, _quantity: bigint, _pubkeys: string, _signatures: string}, []>(
        abi, '0x805911ae'
    ),
    appId: new Func<[], {}, string>(
        abi, '0x80afdea8'
    ),
    getActiveNodeOperatorsCount: new Func<[], {}, bigint>(
        abi, '0x8469cbd3'
    ),
    addNodeOperator: new Func<[_name: string, _rewardAddress: string], {_name: string, _rewardAddress: string}, bigint>(
        abi, '0x85fa63d7'
    ),
    getInitializationBlock: new Func<[], {}, bigint>(
        abi, '0x8b3dd749'
    ),
    getUnusedSigningKeyCount: new Func<[_operator_id: bigint], {_operator_id: bigint}, bigint>(
        abi, '0x8ca7c052'
    ),
    setNodeOperatorRewardAddress: new Func<[_id: bigint, _rewardAddress: string], {_id: bigint, _rewardAddress: string}, []>(
        abi, '0x973e9328'
    ),
    getNodeOperator: new Func<[_id: bigint, _fullInfo: boolean], {_id: bigint, _fullInfo: boolean}, ([active: boolean, name: string, rewardAddress: string, stakingLimit: bigint, stoppedValidators: bigint, totalSigningKeys: bigint, usedSigningKeys: bigint] & {active: boolean, name: string, rewardAddress: string, stakingLimit: bigint, stoppedValidators: bigint, totalSigningKeys: bigint, usedSigningKeys: bigint})>(
        abi, '0x9a56983c'
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
    PUBKEY_LENGTH: new Func<[], {}, bigint>(
        abi, '0xa4d55d1d'
    ),
    getNodeOperatorsCount: new Func<[], {}, bigint>(
        abi, '0xa70c70e4'
    ),
    setNodeOperatorStakingLimit: new Func<[_id: bigint, _stakingLimit: bigint], {_id: bigint, _stakingLimit: bigint}, []>(
        abi, '0xae962acf'
    ),
    getSigningKey: new Func<[_operator_id: bigint, _index: bigint], {_operator_id: bigint, _index: bigint}, ([key: string, depositSignature: string, used: boolean] & {key: string, depositSignature: string, used: boolean})>(
        abi, '0xb449402a'
    ),
    reportStoppedValidators: new Func<[_id: bigint, _stoppedIncrement: bigint], {_id: bigint, _stoppedIncrement: bigint}, []>(
        abi, '0xbe726da2'
    ),
    initialize: new Func<[_lido: string], {_lido: string}, []>(
        abi, '0xc4d66de8'
    ),
    REPORT_STOPPED_VALIDATORS_ROLE: new Func<[], {}, string>(
        abi, '0xcb10af07'
    ),
    getKeysOpIndex: new Func<[], {}, bigint>(
        abi, '0xd07442f1'
    ),
    kernel: new Func<[], {}, string>(
        abi, '0xd4aae0c4'
    ),
    SET_NODE_OPERATOR_ACTIVE_ROLE: new Func<[], {}, string>(
        abi, '0xd6e1c2cc'
    ),
    SET_NODE_OPERATOR_LIMIT_ROLE: new Func<[], {}, string>(
        abi, '0xd8e71cd1'
    ),
    getTotalSigningKeyCount: new Func<[_operator_id: bigint], {_operator_id: bigint}, bigint>(
        abi, '0xdb9887ea'
    ),
    isPetrified: new Func<[], {}, boolean>(
        abi, '0xde4796ed'
    ),
    MAX_NODE_OPERATORS_COUNT: new Func<[], {}, bigint>(
        abi, '0xec5af3a4'
    ),
    removeSigningKeyOperatorBH: new Func<[_operator_id: bigint, _index: bigint], {_operator_id: bigint, _index: bigint}, []>(
        abi, '0xed5cfa41'
    ),
    MANAGE_SIGNING_KEYS: new Func<[], {}, string>(
        abi, '0xf31bd9c1'
    ),
    trimUnusedKeys: new Func<[], {}, []>(
        abi, '0xf778021e'
    ),
}

export class Contract extends ContractBase {

    hasInitialized(): Promise<boolean> {
        return this.eth_call(functions.hasInitialized, [])
    }

    getEVMScriptExecutor(_script: string): Promise<string> {
        return this.eth_call(functions.getEVMScriptExecutor, [_script])
    }

    getRecoveryVault(): Promise<string> {
        return this.eth_call(functions.getRecoveryVault, [])
    }

    SIGNATURE_LENGTH(): Promise<bigint> {
        return this.eth_call(functions.SIGNATURE_LENGTH, [])
    }

    SET_NODE_OPERATOR_ADDRESS_ROLE(): Promise<string> {
        return this.eth_call(functions.SET_NODE_OPERATOR_ADDRESS_ROLE, [])
    }

    getRewardsDistribution(_totalRewardShares: bigint): Promise<([recipients: Array<string>, shares: Array<bigint>] & {recipients: Array<string>, shares: Array<bigint>})> {
        return this.eth_call(functions.getRewardsDistribution, [_totalRewardShares])
    }

    SET_NODE_OPERATOR_NAME_ROLE(): Promise<string> {
        return this.eth_call(functions.SET_NODE_OPERATOR_NAME_ROLE, [])
    }

    ADD_NODE_OPERATOR_ROLE(): Promise<string> {
        return this.eth_call(functions.ADD_NODE_OPERATOR_ROLE, [])
    }

    allowRecoverability(token: string): Promise<boolean> {
        return this.eth_call(functions.allowRecoverability, [token])
    }

    appId(): Promise<string> {
        return this.eth_call(functions.appId, [])
    }

    getActiveNodeOperatorsCount(): Promise<bigint> {
        return this.eth_call(functions.getActiveNodeOperatorsCount, [])
    }

    getInitializationBlock(): Promise<bigint> {
        return this.eth_call(functions.getInitializationBlock, [])
    }

    getUnusedSigningKeyCount(_operator_id: bigint): Promise<bigint> {
        return this.eth_call(functions.getUnusedSigningKeyCount, [_operator_id])
    }

    getNodeOperator(_id: bigint, _fullInfo: boolean): Promise<([active: boolean, name: string, rewardAddress: string, stakingLimit: bigint, stoppedValidators: bigint, totalSigningKeys: bigint, usedSigningKeys: bigint] & {active: boolean, name: string, rewardAddress: string, stakingLimit: bigint, stoppedValidators: bigint, totalSigningKeys: bigint, usedSigningKeys: bigint})> {
        return this.eth_call(functions.getNodeOperator, [_id, _fullInfo])
    }

    canPerform(_sender: string, _role: string, _params: Array<bigint>): Promise<boolean> {
        return this.eth_call(functions.canPerform, [_sender, _role, _params])
    }

    getEVMScriptRegistry(): Promise<string> {
        return this.eth_call(functions.getEVMScriptRegistry, [])
    }

    PUBKEY_LENGTH(): Promise<bigint> {
        return this.eth_call(functions.PUBKEY_LENGTH, [])
    }

    getNodeOperatorsCount(): Promise<bigint> {
        return this.eth_call(functions.getNodeOperatorsCount, [])
    }

    getSigningKey(_operator_id: bigint, _index: bigint): Promise<([key: string, depositSignature: string, used: boolean] & {key: string, depositSignature: string, used: boolean})> {
        return this.eth_call(functions.getSigningKey, [_operator_id, _index])
    }

    REPORT_STOPPED_VALIDATORS_ROLE(): Promise<string> {
        return this.eth_call(functions.REPORT_STOPPED_VALIDATORS_ROLE, [])
    }

    getKeysOpIndex(): Promise<bigint> {
        return this.eth_call(functions.getKeysOpIndex, [])
    }

    kernel(): Promise<string> {
        return this.eth_call(functions.kernel, [])
    }

    SET_NODE_OPERATOR_ACTIVE_ROLE(): Promise<string> {
        return this.eth_call(functions.SET_NODE_OPERATOR_ACTIVE_ROLE, [])
    }

    SET_NODE_OPERATOR_LIMIT_ROLE(): Promise<string> {
        return this.eth_call(functions.SET_NODE_OPERATOR_LIMIT_ROLE, [])
    }

    getTotalSigningKeyCount(_operator_id: bigint): Promise<bigint> {
        return this.eth_call(functions.getTotalSigningKeyCount, [_operator_id])
    }

    isPetrified(): Promise<boolean> {
        return this.eth_call(functions.isPetrified, [])
    }

    MAX_NODE_OPERATORS_COUNT(): Promise<bigint> {
        return this.eth_call(functions.MAX_NODE_OPERATORS_COUNT, [])
    }

    MANAGE_SIGNING_KEYS(): Promise<string> {
        return this.eth_call(functions.MANAGE_SIGNING_KEYS, [])
    }
}
