import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './Billing.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    CollectorUpdated: new LogEvent<([collector: string, enabled: boolean] & {collector: string, enabled: boolean})>(
        abi, '0x949457f2c83e79cb62d2f4f8a997d128579a78f100b40b1832fc0981b22c113f'
    ),
    InsufficientBalanceForRemoval: new LogEvent<([from: string, to: string, amount: bigint] & {from: string, to: string, amount: bigint})>(
        abi, '0xf86e16a86e860585f2e9d57b1515a2283367ba44092e7a7e86139aac5b2e6389'
    ),
    L1BillingConnectorUpdated: new LogEvent<([l1BillingConnector: string] & {l1BillingConnector: string})>(
        abi, '0x222eb2fdc329e9bd45f2e3a7204bfdd26a07aa95512ed8d6f9e0d6d9a7f21974'
    ),
    L2TokenGatewayUpdated: new LogEvent<([l2TokenGateway: string] & {l2TokenGateway: string})>(
        abi, '0x1f759e8cff804228c1e67fdffab0a7799ef3e9a7c29e6daf3306718037c57cd5'
    ),
    NewOwnership: new LogEvent<([from: string, to: string] & {from: string, to: string})>(
        abi, '0x0ac6deed30eef60090c749850e10f2fa469e3e25fec1d1bef2853003f6e6f18f'
    ),
    NewPendingOwnership: new LogEvent<([from: string, to: string] & {from: string, to: string})>(
        abi, '0x76563ad561b7036ae716b9b25cb521b21463240f104c97e12f25877f2235f33d'
    ),
    TokensAdded: new LogEvent<([user: string, amount: bigint] & {user: string, amount: bigint})>(
        abi, '0x0eaac1064ee8d13f83091f388597ffb5ff2d2e59f6a16aae2a74ba7f2d13c8d9'
    ),
    TokensPulled: new LogEvent<([user: string, amount: bigint] & {user: string, amount: bigint})>(
        abi, '0x3c3f210f5fb914ad3522d4b423e3db16130d0409700cb7b1827ccc90f341ac2f'
    ),
    TokensRemoved: new LogEvent<([from: string, to: string, amount: bigint] & {from: string, to: string, amount: bigint})>(
        abi, '0xcb0d9492300e48f4eaf3458b81c403bc7526f77735669f42e2378e5813d83857'
    ),
    TokensRescued: new LogEvent<([to: string, token: string, amount: bigint] & {to: string, token: string, amount: bigint})>(
        abi, '0x77023e19c7343ad491fd706c36335ca0e738340a91f29b1fd81e2673d44896c4'
    ),
}

export const functions = {
    acceptOwnership: new Func<[], {}, []>(
        abi, '0x79ba5097'
    ),
    add: new Func<[_amount: bigint], {_amount: bigint}, []>(
        abi, '0x1003e2d2'
    ),
    addTo: new Func<[_to: string, _amount: bigint], {_to: string, _amount: bigint}, []>(
        abi, '0xf29573ff'
    ),
    addToMany: new Func<[_to: Array<string>, _amount: Array<bigint>], {_to: Array<string>, _amount: Array<bigint>}, []>(
        abi, '0xf67a1389'
    ),
    governor: new Func<[], {}, string>(
        abi, '0x0c340a24'
    ),
    isCollector: new Func<[_: string], {}, boolean>(
        abi, '0x62129804'
    ),
    l1BillingConnector: new Func<[], {}, string>(
        abi, '0x9d4d15c5'
    ),
    l2TokenGateway: new Func<[], {}, string>(
        abi, '0xe7fa5272'
    ),
    onTokenTransfer: new Func<[_from: string, _amount: bigint, _data: string], {_from: string, _amount: bigint, _data: string}, []>(
        abi, '0xa4c0ed36'
    ),
    pendingGovernor: new Func<[], {}, string>(
        abi, '0xe3056a34'
    ),
    pull: new Func<[_user: string, _amount: bigint, _to: string], {_user: string, _amount: bigint, _to: string}, []>(
        abi, '0x07251d88'
    ),
    pullMany: new Func<[_users: Array<string>, _amounts: Array<bigint>, _to: string], {_users: Array<string>, _amounts: Array<bigint>, _to: string}, []>(
        abi, '0xef9aab68'
    ),
    remove: new Func<[_to: string, _amount: bigint], {_to: string, _amount: bigint}, []>(
        abi, '0xabe7f1ab'
    ),
    removeFromL1: new Func<[_from: string, _to: string, _amount: bigint], {_from: string, _to: string, _amount: bigint}, []>(
        abi, '0x23d7fab9'
    ),
    rescueTokens: new Func<[_to: string, _token: string, _amount: bigint], {_to: string, _token: string, _amount: bigint}, []>(
        abi, '0xcea9d26f'
    ),
    setCollector: new Func<[_collector: string, _enabled: boolean], {_collector: string, _enabled: boolean}, []>(
        abi, '0xdf2cc13f'
    ),
    setL1BillingConnector: new Func<[_l1BillingConnector: string], {_l1BillingConnector: string}, []>(
        abi, '0x73429da1'
    ),
    setL2TokenGateway: new Func<[_l2TokenGateway: string], {_l2TokenGateway: string}, []>(
        abi, '0x904e85a7'
    ),
    transferOwnership: new Func<[_newGovernor: string], {_newGovernor: string}, []>(
        abi, '0xf2fde38b'
    ),
    userBalances: new Func<[_: string], {}, bigint>(
        abi, '0x26224c64'
    ),
}

export class Contract extends ContractBase {

    governor(): Promise<string> {
        return this.eth_call(functions.governor, [])
    }

    isCollector(arg0: string): Promise<boolean> {
        return this.eth_call(functions.isCollector, [arg0])
    }

    l1BillingConnector(): Promise<string> {
        return this.eth_call(functions.l1BillingConnector, [])
    }

    l2TokenGateway(): Promise<string> {
        return this.eth_call(functions.l2TokenGateway, [])
    }

    pendingGovernor(): Promise<string> {
        return this.eth_call(functions.pendingGovernor, [])
    }

    userBalances(arg0: string): Promise<bigint> {
        return this.eth_call(functions.userBalances, [arg0])
    }
}
