import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './AppRepo.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    NewVersion: new LogEvent<([versionId: bigint, semanticVersion: Array<number>] & {versionId: bigint, semanticVersion: Array<number>})>(
        abi, '0x003aea8189d1a0aa3ebdb05219cd4c2a663166706e949e9d6e8aa63718ca43fd'
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
    getEVMScriptExecutor: new Func<[_script: string], {_script: string}, string>(
        abi, '0x2914b9bd'
    ),
    getRecoveryVault: new Func<[], {}, string>(
        abi, '0x32f0a3b5'
    ),
    getBySemanticVersion: new Func<[_semanticVersion: Array<number>], {_semanticVersion: Array<number>}, ([semanticVersion: Array<number>, contractAddress: string, contentURI: string] & {semanticVersion: Array<number>, contractAddress: string, contentURI: string})>(
        abi, '0x4c3ba268'
    ),
    newVersion: new Func<[_newSemanticVersion: Array<number>, _contractAddress: string, _contentURI: string], {_newSemanticVersion: Array<number>, _contractAddress: string, _contentURI: string}, []>(
        abi, '0x73053410'
    ),
    getByVersionId: new Func<[_versionId: bigint], {_versionId: bigint}, ([semanticVersion: Array<number>, contractAddress: string, contentURI: string] & {semanticVersion: Array<number>, contractAddress: string, contentURI: string})>(
        abi, '0x737e7d4f'
    ),
    allowRecoverability: new Func<[token: string], {token: string}, boolean>(
        abi, '0x7e7db6e1'
    ),
    appId: new Func<[], {}, string>(
        abi, '0x80afdea8'
    ),
    initialize: new Func<[], {}, []>(
        abi, '0x8129fc1c'
    ),
    getInitializationBlock: new Func<[], {}, bigint>(
        abi, '0x8b3dd749'
    ),
    getLatestForContractAddress: new Func<[_contractAddress: string], {_contractAddress: string}, ([semanticVersion: Array<number>, contractAddress: string, contentURI: string] & {semanticVersion: Array<number>, contractAddress: string, contentURI: string})>(
        abi, '0x9a6fe50c'
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
    isValidBump: new Func<[_oldVersion: Array<number>, _newVersion: Array<number>], {_oldVersion: Array<number>, _newVersion: Array<number>}, boolean>(
        abi, '0xa7bdf16e'
    ),
    CREATE_VERSION_ROLE: new Func<[], {}, string>(
        abi, '0xaa61924a'
    ),
    getLatest: new Func<[], {}, ([semanticVersion: Array<number>, contractAddress: string, contentURI: string] & {semanticVersion: Array<number>, contractAddress: string, contentURI: string})>(
        abi, '0xc36af460'
    ),
    getVersionsCount: new Func<[], {}, bigint>(
        abi, '0xc6d48e0d'
    ),
    kernel: new Func<[], {}, string>(
        abi, '0xd4aae0c4'
    ),
    isPetrified: new Func<[], {}, boolean>(
        abi, '0xde4796ed'
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

    getBySemanticVersion(_semanticVersion: Array<number>): Promise<([semanticVersion: Array<number>, contractAddress: string, contentURI: string] & {semanticVersion: Array<number>, contractAddress: string, contentURI: string})> {
        return this.eth_call(functions.getBySemanticVersion, [_semanticVersion])
    }

    getByVersionId(_versionId: bigint): Promise<([semanticVersion: Array<number>, contractAddress: string, contentURI: string] & {semanticVersion: Array<number>, contractAddress: string, contentURI: string})> {
        return this.eth_call(functions.getByVersionId, [_versionId])
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

    getLatestForContractAddress(_contractAddress: string): Promise<([semanticVersion: Array<number>, contractAddress: string, contentURI: string] & {semanticVersion: Array<number>, contractAddress: string, contentURI: string})> {
        return this.eth_call(functions.getLatestForContractAddress, [_contractAddress])
    }

    canPerform(_sender: string, _role: string, _params: Array<bigint>): Promise<boolean> {
        return this.eth_call(functions.canPerform, [_sender, _role, _params])
    }

    getEVMScriptRegistry(): Promise<string> {
        return this.eth_call(functions.getEVMScriptRegistry, [])
    }

    isValidBump(_oldVersion: Array<number>, _newVersion: Array<number>): Promise<boolean> {
        return this.eth_call(functions.isValidBump, [_oldVersion, _newVersion])
    }

    CREATE_VERSION_ROLE(): Promise<string> {
        return this.eth_call(functions.CREATE_VERSION_ROLE, [])
    }

    getLatest(): Promise<([semanticVersion: Array<number>, contractAddress: string, contentURI: string] & {semanticVersion: Array<number>, contractAddress: string, contentURI: string})> {
        return this.eth_call(functions.getLatest, [])
    }

    getVersionsCount(): Promise<bigint> {
        return this.eth_call(functions.getVersionsCount, [])
    }

    kernel(): Promise<string> {
        return this.eth_call(functions.kernel, [])
    }

    isPetrified(): Promise<boolean> {
        return this.eth_call(functions.isPetrified, [])
    }
}
