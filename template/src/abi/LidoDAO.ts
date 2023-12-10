import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './LidoDAO.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    NewAppProxy: new LogEvent<([proxy: string, isUpgradeable: boolean, appId: string] & {proxy: string, isUpgradeable: boolean, appId: string})>(
        abi, '0xd880e726dced8808d727f02dd0e6fdd3a945b24bfee77e13367bcbe61ddbaf47'
    ),
    RecoverToVault: new LogEvent<([vault: string, token: string, amount: bigint] & {vault: string, token: string, amount: bigint})>(
        abi, '0x596caf56044b55fb8c4ca640089bbc2b63cae3e978b851f5745cbb7c5b288e02'
    ),
    SetApp: new LogEvent<([namespace: string, appId: string, app: string] & {namespace: string, appId: string, app: string})>(
        abi, '0x2ec1ae0a449b7ae354b9dacfb3ade6b6332ba26b7fcbb935835fa39dd7263b23'
    ),
}

export const functions = {
    hasInitialized: new Func<[], {}, boolean>(
        abi, '0x0803fac0'
    ),
    KERNEL_APP_ID: new Func<[], {}, string>(
        abi, '0x1113ed0d'
    ),
    APP_ADDR_NAMESPACE: new Func<[], {}, string>(
        abi, '0x178e6079'
    ),
    getRecoveryVault: new Func<[], {}, string>(
        abi, '0x32f0a3b5'
    ),
    'newAppInstance(bytes32,address,bytes,bool)': new Func<[_appId: string, _appBase: string, _initializePayload: string, _setDefault: boolean], {_appId: string, _appBase: string, _initializePayload: string, _setDefault: boolean}, string>(
        abi, '0x397edd41'
    ),
    apps: new Func<[_: string, _: string], {}, string>(
        abi, '0x4558850c'
    ),
    initialize: new Func<[_baseAcl: string, _permissionsCreator: string], {_baseAcl: string, _permissionsCreator: string}, []>(
        abi, '0x485cc955'
    ),
    CORE_NAMESPACE: new Func<[], {}, string>(
        abi, '0x756f6049'
    ),
    allowRecoverability: new Func<[token: string], {token: string}, boolean>(
        abi, '0x7e7db6e1'
    ),
    'newAppInstance(bytes32,address)': new Func<[_appId: string, _appBase: string], {_appId: string, _appBase: string}, string>(
        abi, '0x80cd5ac3'
    ),
    recoveryVaultAppId: new Func<[], {}, string>(
        abi, '0x86070cfe'
    ),
    getInitializationBlock: new Func<[], {}, bigint>(
        abi, '0x8b3dd749'
    ),
    setRecoveryVaultAppId: new Func<[_recoveryVaultAppId: string], {_recoveryVaultAppId: string}, []>(
        abi, '0x8c61757d'
    ),
    APP_MANAGER_ROLE: new Func<[], {}, string>(
        abi, '0x8ea8dc9d'
    ),
    'newPinnedAppInstance(bytes32,address)': new Func<[_appId: string, _appBase: string], {_appId: string, _appBase: string}, string>(
        abi, '0x958fde82'
    ),
    transferToVault: new Func<[_token: string], {_token: string}, []>(
        abi, '0x9d4941d8'
    ),
    setApp: new Func<[_namespace: string, _appId: string, _app: string], {_namespace: string, _appId: string, _app: string}, []>(
        abi, '0xae5b2540'
    ),
    getApp: new Func<[_namespace: string, _appId: string], {_namespace: string, _appId: string}, string>(
        abi, '0xbe00bbd8'
    ),
    'newPinnedAppInstance(bytes32,address,bytes,bool)': new Func<[_appId: string, _appBase: string, _initializePayload: string, _setDefault: boolean], {_appId: string, _appBase: string, _initializePayload: string, _setDefault: boolean}, string>(
        abi, '0xc050a7a6'
    ),
    'newAppProxyPinned(address,bytes32,bytes)': new Func<[_kernel: string, _appId: string, _initializePayload: string], {_kernel: string, _appId: string, _initializePayload: string}, string>(
        abi, '0xd162f8b0'
    ),
    APP_BASES_NAMESPACE: new Func<[], {}, string>(
        abi, '0xdb8a61d4'
    ),
    acl: new Func<[], {}, string>(
        abi, '0xde287359'
    ),
    isPetrified: new Func<[], {}, boolean>(
        abi, '0xde4796ed'
    ),
    'newAppProxy(address,bytes32)': new Func<[_kernel: string, _appId: string], {_kernel: string, _appId: string}, string>(
        abi, '0xe156a8f3'
    ),
    DEFAULT_ACL_APP_ID: new Func<[], {}, string>(
        abi, '0xe8187ff0'
    ),
    'newAppProxy(address,bytes32,bytes)': new Func<[_kernel: string, _appId: string, _initializePayload: string], {_kernel: string, _appId: string, _initializePayload: string}, string>(
        abi, '0xede658b0'
    ),
    hasPermission: new Func<[_who: string, _where: string, _what: string, _how: string], {_who: string, _where: string, _what: string, _how: string}, boolean>(
        abi, '0xfdef9106'
    ),
    'newAppProxyPinned(address,bytes32)': new Func<[_kernel: string, _appId: string], {_kernel: string, _appId: string}, string>(
        abi, '0xff289fc5'
    ),
}

export class Contract extends ContractBase {

    hasInitialized(): Promise<boolean> {
        return this.eth_call(functions.hasInitialized, [])
    }

    KERNEL_APP_ID(): Promise<string> {
        return this.eth_call(functions.KERNEL_APP_ID, [])
    }

    APP_ADDR_NAMESPACE(): Promise<string> {
        return this.eth_call(functions.APP_ADDR_NAMESPACE, [])
    }

    getRecoveryVault(): Promise<string> {
        return this.eth_call(functions.getRecoveryVault, [])
    }

    apps(arg0: string, arg1: string): Promise<string> {
        return this.eth_call(functions.apps, [arg0, arg1])
    }

    CORE_NAMESPACE(): Promise<string> {
        return this.eth_call(functions.CORE_NAMESPACE, [])
    }

    allowRecoverability(token: string): Promise<boolean> {
        return this.eth_call(functions.allowRecoverability, [token])
    }

    recoveryVaultAppId(): Promise<string> {
        return this.eth_call(functions.recoveryVaultAppId, [])
    }

    getInitializationBlock(): Promise<bigint> {
        return this.eth_call(functions.getInitializationBlock, [])
    }

    APP_MANAGER_ROLE(): Promise<string> {
        return this.eth_call(functions.APP_MANAGER_ROLE, [])
    }

    getApp(_namespace: string, _appId: string): Promise<string> {
        return this.eth_call(functions.getApp, [_namespace, _appId])
    }

    APP_BASES_NAMESPACE(): Promise<string> {
        return this.eth_call(functions.APP_BASES_NAMESPACE, [])
    }

    acl(): Promise<string> {
        return this.eth_call(functions.acl, [])
    }

    isPetrified(): Promise<boolean> {
        return this.eth_call(functions.isPetrified, [])
    }

    DEFAULT_ACL_APP_ID(): Promise<string> {
        return this.eth_call(functions.DEFAULT_ACL_APP_ID, [])
    }

    hasPermission(_who: string, _where: string, _what: string, _how: string): Promise<boolean> {
        return this.eth_call(functions.hasPermission, [_who, _where, _what, _how])
    }
}
