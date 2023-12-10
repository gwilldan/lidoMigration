import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './WithdrawalQueue.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, approved: string, tokenId: bigint] & {owner: string, approved: string, tokenId: bigint})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    BaseURISet: new LogEvent<([baseURI: string] & {baseURI: string})>(
        abi, '0xf9c7803e94e0d3c02900d8a90893a6d5e90dd04d32a4cfe825520f82bf9f32f6'
    ),
    BunkerModeDisabled: new LogEvent<[]>(
        abi, '0xd1f8a2998c0caf73e09434aa93d273a599060d789407c6f70ccd4c9c9f32c8f4'
    ),
    BunkerModeEnabled: new LogEvent<([_sinceTimestamp: bigint] & {_sinceTimestamp: bigint})>(
        abi, '0x47f03b07e5b5377f871539bb2942f5ecb72733be9fc9d55a17b6d6a05d418345'
    ),
    ContractVersionSet: new LogEvent<([version: bigint] & {version: bigint})>(
        abi, '0xfddcded6b4f4730c226821172046b48372d3cd963c159701ae1b7c3bcac541bb'
    ),
    InitializedV1: new LogEvent<([_admin: string] & {_admin: string})>(
        abi, '0x20b34d2aaaf6acb4fbbc9c4846858bb824053ab11ff44a59dfba1e22ceb8a509'
    ),
    NftDescriptorAddressSet: new LogEvent<([nftDescriptorAddress: string] & {nftDescriptorAddress: string})>(
        abi, '0x4ec04ac71c49eea0a94dc5967b493412a8cdb2934b367713019d3b110e9f0ba8'
    ),
    Paused: new LogEvent<([duration: bigint] & {duration: bigint})>(
        abi, '0x32fb7c9891bc4f963c7de9f1186d2a7755c7d6e9f4604dabe1d8bb3027c2f49e'
    ),
    Resumed: new LogEvent<[]>(
        abi, '0x62451d457bc659158be6e6247f56ec1df424a5c7597f71c20c2bc44e0965c8f9'
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
    Transfer: new LogEvent<([from: string, to: string, tokenId: bigint] & {from: string, to: string, tokenId: bigint})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
    WithdrawalClaimed: new LogEvent<([requestId: bigint, owner: string, receiver: string, amountOfETH: bigint] & {requestId: bigint, owner: string, receiver: string, amountOfETH: bigint})>(
        abi, '0x6ad26c5e238e7d002799f9a5db07e81ef14e37386ae03496d7a7ef04713e145b'
    ),
    WithdrawalRequested: new LogEvent<([requestId: bigint, requestor: string, owner: string, amountOfStETH: bigint, amountOfShares: bigint] & {requestId: bigint, requestor: string, owner: string, amountOfStETH: bigint, amountOfShares: bigint})>(
        abi, '0xf0cb471f23fb74ea44b8252eb1881a2dca546288d9f6e90d1a0e82fe0ed342ab'
    ),
    WithdrawalsFinalized: new LogEvent<([from: bigint, to: bigint, amountOfETHLocked: bigint, sharesToBurn: bigint, timestamp: bigint] & {from: bigint, to: bigint, amountOfETHLocked: bigint, sharesToBurn: bigint, timestamp: bigint})>(
        abi, '0x197874c72af6a06fb0aa4fab45fd39c7cb61ac0992159872dc3295207da7e9eb'
    ),
    WithdrawalBatchFinalized: new LogEvent<([from: bigint, to: bigint, amountOfETHLocked: bigint, sharesToBurn: bigint, timestamp: bigint] & {from: bigint, to: bigint, amountOfETHLocked: bigint, sharesToBurn: bigint, timestamp: bigint})>(
        abi, '0x8d97cd404e2016c2c0a59a6495697a8bd352f4072c7fbd8e3ab4200402a86930'
    ),
}

export const functions = {
    BUNKER_MODE_DISABLED_TIMESTAMP: new Func<[], {}, bigint>(
        abi, '0xe7c0835d'
    ),
    DEFAULT_ADMIN_ROLE: new Func<[], {}, string>(
        abi, '0xa217fddf'
    ),
    FINALIZE_ROLE: new Func<[], {}, string>(
        abi, '0x220ca2f4'
    ),
    MANAGE_TOKEN_URI_ROLE: new Func<[], {}, string>(
        abi, '0xb7bdf748'
    ),
    MAX_BATCHES_LENGTH: new Func<[], {}, bigint>(
        abi, '0x29fd065d'
    ),
    MAX_STETH_WITHDRAWAL_AMOUNT: new Func<[], {}, bigint>(
        abi, '0xdb2296cd'
    ),
    MIN_STETH_WITHDRAWAL_AMOUNT: new Func<[], {}, bigint>(
        abi, '0x0d25a957'
    ),
    ORACLE_ROLE: new Func<[], {}, string>(
        abi, '0x07e2cea5'
    ),
    PAUSE_INFINITELY: new Func<[], {}, bigint>(
        abi, '0xa302ee38'
    ),
    PAUSE_ROLE: new Func<[], {}, string>(
        abi, '0x389ed267'
    ),
    RESUME_ROLE: new Func<[], {}, string>(
        abi, '0x2de03aa1'
    ),
    STETH: new Func<[], {}, string>(
        abi, '0xe00bfe50'
    ),
    WSTETH: new Func<[], {}, string>(
        abi, '0xd9fb643a'
    ),
    approve: new Func<[_to: string, _requestId: bigint], {_to: string, _requestId: bigint}, []>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[_owner: string], {_owner: string}, bigint>(
        abi, '0x70a08231'
    ),
    bunkerModeSinceTimestamp: new Func<[], {}, bigint>(
        abi, '0x9b36be58'
    ),
    calculateFinalizationBatches: new Func<[_maxShareRate: bigint, _maxTimestamp: bigint, _maxRequestsPerCall: bigint, _state: ([remainingEthBudget: bigint, finished: boolean, batches: Array<bigint>, batchesLength: bigint] & {remainingEthBudget: bigint, finished: boolean, batches: Array<bigint>, batchesLength: bigint})], {_maxShareRate: bigint, _maxTimestamp: bigint, _maxRequestsPerCall: bigint, _state: ([remainingEthBudget: bigint, finished: boolean, batches: Array<bigint>, batchesLength: bigint] & {remainingEthBudget: bigint, finished: boolean, batches: Array<bigint>, batchesLength: bigint})}, ([remainingEthBudget: bigint, finished: boolean, batches: Array<bigint>, batchesLength: bigint] & {remainingEthBudget: bigint, finished: boolean, batches: Array<bigint>, batchesLength: bigint})>(
        abi, '0xeed53bf5'
    ),
    claimWithdrawal: new Func<[_requestId: bigint], {_requestId: bigint}, []>(
        abi, '0xf8444436'
    ),
    claimWithdrawals: new Func<[_requestIds: Array<bigint>, _hints: Array<bigint>], {_requestIds: Array<bigint>, _hints: Array<bigint>}, []>(
        abi, '0xe3afe0a3'
    ),
    claimWithdrawalsTo: new Func<[_requestIds: Array<bigint>, _hints: Array<bigint>, _recipient: string], {_requestIds: Array<bigint>, _hints: Array<bigint>, _recipient: string}, []>(
        abi, '0x5e7eead9'
    ),
    finalize: new Func<[_batches: Array<bigint>, _maxShareRate: bigint], {_batches: Array<bigint>, _maxShareRate: bigint}, []>(
        abi, '0x19bbf7dc'
    ),
    findCheckpointHints: new Func<[_requestIds: Array<bigint>, _firstIndex: bigint, _lastIndex: bigint], {_requestIds: Array<bigint>, _firstIndex: bigint, _lastIndex: bigint}, Array<bigint>>(
        abi, '0x62abe3fa'
    ),
    getApproved: new Func<[_requestId: bigint], {_requestId: bigint}, string>(
        abi, '0x081812fc'
    ),
    getBaseURI: new Func<[], {}, string>(
        abi, '0x714c5398'
    ),
    getClaimableEther: new Func<[_requestIds: Array<bigint>, _hints: Array<bigint>], {_requestIds: Array<bigint>, _hints: Array<bigint>}, Array<bigint>>(
        abi, '0xc97912d8'
    ),
    getContractVersion: new Func<[], {}, bigint>(
        abi, '0x8aa10435'
    ),
    getLastCheckpointIndex: new Func<[], {}, bigint>(
        abi, '0x526eae3e'
    ),
    getLastFinalizedRequestId: new Func<[], {}, bigint>(
        abi, '0x4f069a13'
    ),
    getLastRequestId: new Func<[], {}, bigint>(
        abi, '0x19c2b4c3'
    ),
    getLockedEtherAmount: new Func<[], {}, bigint>(
        abi, '0xf6fa8a47'
    ),
    getNFTDescriptorAddress: new Func<[], {}, string>(
        abi, '0x46a086b4'
    ),
    getResumeSinceTimestamp: new Func<[], {}, bigint>(
        abi, '0x589ff76c'
    ),
    getRoleAdmin: new Func<[role: string], {role: string}, string>(
        abi, '0x248a9ca3'
    ),
    getRoleMember: new Func<[role: string, index: bigint], {role: string, index: bigint}, string>(
        abi, '0x9010d07c'
    ),
    getRoleMemberCount: new Func<[role: string], {role: string}, bigint>(
        abi, '0xca15c873'
    ),
    getWithdrawalRequests: new Func<[_owner: string], {_owner: string}, Array<bigint>>(
        abi, '0x7d031b65'
    ),
    getWithdrawalStatus: new Func<[_requestIds: Array<bigint>], {_requestIds: Array<bigint>}, Array<([amountOfStETH: bigint, amountOfShares: bigint, owner: string, timestamp: bigint, isFinalized: boolean, isClaimed: boolean] & {amountOfStETH: bigint, amountOfShares: bigint, owner: string, timestamp: bigint, isFinalized: boolean, isClaimed: boolean})>>(
        abi, '0xb8c4b85a'
    ),
    grantRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x2f2ff15d'
    ),
    hasRole: new Func<[role: string, account: string], {role: string, account: string}, boolean>(
        abi, '0x91d14854'
    ),
    initialize: new Func<[_admin: string], {_admin: string}, []>(
        abi, '0xc4d66de8'
    ),
    isApprovedForAll: new Func<[_owner: string, _operator: string], {_owner: string, _operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    isBunkerModeActive: new Func<[], {}, boolean>(
        abi, '0x2b95b781'
    ),
    isPaused: new Func<[], {}, boolean>(
        abi, '0xb187bd26'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    onOracleReport: new Func<[_isBunkerModeNow: boolean, _bunkerStartTimestamp: bigint, _currentReportTimestamp: bigint], {_isBunkerModeNow: boolean, _bunkerStartTimestamp: bigint, _currentReportTimestamp: bigint}, []>(
        abi, '0x96992fed'
    ),
    ownerOf: new Func<[_requestId: bigint], {_requestId: bigint}, string>(
        abi, '0x6352211e'
    ),
    pauseFor: new Func<[_duration: bigint], {_duration: bigint}, []>(
        abi, '0xf3f449c7'
    ),
    pauseUntil: new Func<[_pauseUntilInclusive: bigint], {_pauseUntilInclusive: bigint}, []>(
        abi, '0xabe9cfc8'
    ),
    prefinalize: new Func<[_batches: Array<bigint>, _maxShareRate: bigint], {_batches: Array<bigint>, _maxShareRate: bigint}, ([ethToLock: bigint, sharesToBurn: bigint] & {ethToLock: bigint, sharesToBurn: bigint})>(
        abi, '0xa52e9c9f'
    ),
    renounceRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x36568abe'
    ),
    requestWithdrawals: new Func<[amounts: Array<bigint>, _owner: string], {amounts: Array<bigint>, _owner: string}, Array<bigint>>(
        abi, '0xd6681042'
    ),
    requestWithdrawalsWithPermit: new Func<[_amounts: Array<bigint>, _owner: string, _permit: ([value: bigint, deadline: bigint, v: number, r: string, s: string] & {value: bigint, deadline: bigint, v: number, r: string, s: string})], {_amounts: Array<bigint>, _owner: string, _permit: ([value: bigint, deadline: bigint, v: number, r: string, s: string] & {value: bigint, deadline: bigint, v: number, r: string, s: string})}, Array<bigint>>(
        abi, '0xacf41e4d'
    ),
    requestWithdrawalsWstETH: new Func<[amounts: Array<bigint>, _owner: string], {amounts: Array<bigint>, _owner: string}, Array<bigint>>(
        abi, '0x19aa6257'
    ),
    requestWithdrawalsWstETHWithPermit: new Func<[_amounts: Array<bigint>, _owner: string, _permit: ([value: bigint, deadline: bigint, v: number, r: string, s: string] & {value: bigint, deadline: bigint, v: number, r: string, s: string})], {_amounts: Array<bigint>, _owner: string, _permit: ([value: bigint, deadline: bigint, v: number, r: string, s: string] & {value: bigint, deadline: bigint, v: number, r: string, s: string})}, Array<bigint>>(
        abi, '0x7951b76f'
    ),
    resume: new Func<[], {}, []>(
        abi, '0x046f7da2'
    ),
    revokeRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0xd547741f'
    ),
    'safeTransferFrom(address,address,uint256)': new Func<[_from: string, _to: string, _requestId: bigint], {_from: string, _to: string, _requestId: bigint}, []>(
        abi, '0x42842e0e'
    ),
    'safeTransferFrom(address,address,uint256,bytes)': new Func<[_from: string, _to: string, _requestId: bigint, _data: string], {_from: string, _to: string, _requestId: bigint, _data: string}, []>(
        abi, '0xb88d4fde'
    ),
    setApprovalForAll: new Func<[_operator: string, _approved: boolean], {_operator: string, _approved: boolean}, []>(
        abi, '0xa22cb465'
    ),
    setBaseURI: new Func<[_baseURI: string], {_baseURI: string}, []>(
        abi, '0x55f804b3'
    ),
    setNFTDescriptorAddress: new Func<[_nftDescriptorAddress: string], {_nftDescriptorAddress: string}, []>(
        abi, '0x92b18a47'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    tokenURI: new Func<[_requestId: bigint], {_requestId: bigint}, string>(
        abi, '0xc87b56dd'
    ),
    transferFrom: new Func<[_from: string, _to: string, _requestId: bigint], {_from: string, _to: string, _requestId: bigint}, []>(
        abi, '0x23b872dd'
    ),
    unfinalizedRequestNumber: new Func<[], {}, bigint>(
        abi, '0xc2fc7aff'
    ),
    unfinalizedStETH: new Func<[], {}, bigint>(
        abi, '0xd0fb84e8'
    ),
}

export class Contract extends ContractBase {

    BUNKER_MODE_DISABLED_TIMESTAMP(): Promise<bigint> {
        return this.eth_call(functions.BUNKER_MODE_DISABLED_TIMESTAMP, [])
    }

    DEFAULT_ADMIN_ROLE(): Promise<string> {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, [])
    }

    FINALIZE_ROLE(): Promise<string> {
        return this.eth_call(functions.FINALIZE_ROLE, [])
    }

    MANAGE_TOKEN_URI_ROLE(): Promise<string> {
        return this.eth_call(functions.MANAGE_TOKEN_URI_ROLE, [])
    }

    MAX_BATCHES_LENGTH(): Promise<bigint> {
        return this.eth_call(functions.MAX_BATCHES_LENGTH, [])
    }

    MAX_STETH_WITHDRAWAL_AMOUNT(): Promise<bigint> {
        return this.eth_call(functions.MAX_STETH_WITHDRAWAL_AMOUNT, [])
    }

    MIN_STETH_WITHDRAWAL_AMOUNT(): Promise<bigint> {
        return this.eth_call(functions.MIN_STETH_WITHDRAWAL_AMOUNT, [])
    }

    ORACLE_ROLE(): Promise<string> {
        return this.eth_call(functions.ORACLE_ROLE, [])
    }

    PAUSE_INFINITELY(): Promise<bigint> {
        return this.eth_call(functions.PAUSE_INFINITELY, [])
    }

    PAUSE_ROLE(): Promise<string> {
        return this.eth_call(functions.PAUSE_ROLE, [])
    }

    RESUME_ROLE(): Promise<string> {
        return this.eth_call(functions.RESUME_ROLE, [])
    }

    STETH(): Promise<string> {
        return this.eth_call(functions.STETH, [])
    }

    WSTETH(): Promise<string> {
        return this.eth_call(functions.WSTETH, [])
    }

    balanceOf(_owner: string): Promise<bigint> {
        return this.eth_call(functions.balanceOf, [_owner])
    }

    bunkerModeSinceTimestamp(): Promise<bigint> {
        return this.eth_call(functions.bunkerModeSinceTimestamp, [])
    }

    calculateFinalizationBatches(_maxShareRate: bigint, _maxTimestamp: bigint, _maxRequestsPerCall: bigint, _state: ([remainingEthBudget: bigint, finished: boolean, batches: Array<bigint>, batchesLength: bigint] & {remainingEthBudget: bigint, finished: boolean, batches: Array<bigint>, batchesLength: bigint})): Promise<([remainingEthBudget: bigint, finished: boolean, batches: Array<bigint>, batchesLength: bigint] & {remainingEthBudget: bigint, finished: boolean, batches: Array<bigint>, batchesLength: bigint})> {
        return this.eth_call(functions.calculateFinalizationBatches, [_maxShareRate, _maxTimestamp, _maxRequestsPerCall, _state])
    }

    findCheckpointHints(_requestIds: Array<bigint>, _firstIndex: bigint, _lastIndex: bigint): Promise<Array<bigint>> {
        return this.eth_call(functions.findCheckpointHints, [_requestIds, _firstIndex, _lastIndex])
    }

    getApproved(_requestId: bigint): Promise<string> {
        return this.eth_call(functions.getApproved, [_requestId])
    }

    getBaseURI(): Promise<string> {
        return this.eth_call(functions.getBaseURI, [])
    }

    getClaimableEther(_requestIds: Array<bigint>, _hints: Array<bigint>): Promise<Array<bigint>> {
        return this.eth_call(functions.getClaimableEther, [_requestIds, _hints])
    }

    getContractVersion(): Promise<bigint> {
        return this.eth_call(functions.getContractVersion, [])
    }

    getLastCheckpointIndex(): Promise<bigint> {
        return this.eth_call(functions.getLastCheckpointIndex, [])
    }

    getLastFinalizedRequestId(): Promise<bigint> {
        return this.eth_call(functions.getLastFinalizedRequestId, [])
    }

    getLastRequestId(): Promise<bigint> {
        return this.eth_call(functions.getLastRequestId, [])
    }

    getLockedEtherAmount(): Promise<bigint> {
        return this.eth_call(functions.getLockedEtherAmount, [])
    }

    getNFTDescriptorAddress(): Promise<string> {
        return this.eth_call(functions.getNFTDescriptorAddress, [])
    }

    getResumeSinceTimestamp(): Promise<bigint> {
        return this.eth_call(functions.getResumeSinceTimestamp, [])
    }

    getRoleAdmin(role: string): Promise<string> {
        return this.eth_call(functions.getRoleAdmin, [role])
    }

    getRoleMember(role: string, index: bigint): Promise<string> {
        return this.eth_call(functions.getRoleMember, [role, index])
    }

    getRoleMemberCount(role: string): Promise<bigint> {
        return this.eth_call(functions.getRoleMemberCount, [role])
    }

    getWithdrawalRequests(_owner: string): Promise<Array<bigint>> {
        return this.eth_call(functions.getWithdrawalRequests, [_owner])
    }

    getWithdrawalStatus(_requestIds: Array<bigint>): Promise<Array<([amountOfStETH: bigint, amountOfShares: bigint, owner: string, timestamp: bigint, isFinalized: boolean, isClaimed: boolean] & {amountOfStETH: bigint, amountOfShares: bigint, owner: string, timestamp: bigint, isFinalized: boolean, isClaimed: boolean})>> {
        return this.eth_call(functions.getWithdrawalStatus, [_requestIds])
    }

    hasRole(role: string, account: string): Promise<boolean> {
        return this.eth_call(functions.hasRole, [role, account])
    }

    isApprovedForAll(_owner: string, _operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [_owner, _operator])
    }

    isBunkerModeActive(): Promise<boolean> {
        return this.eth_call(functions.isBunkerModeActive, [])
    }

    isPaused(): Promise<boolean> {
        return this.eth_call(functions.isPaused, [])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    ownerOf(_requestId: bigint): Promise<string> {
        return this.eth_call(functions.ownerOf, [_requestId])
    }

    prefinalize(_batches: Array<bigint>, _maxShareRate: bigint): Promise<([ethToLock: bigint, sharesToBurn: bigint] & {ethToLock: bigint, sharesToBurn: bigint})> {
        return this.eth_call(functions.prefinalize, [_batches, _maxShareRate])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    tokenURI(_requestId: bigint): Promise<string> {
        return this.eth_call(functions.tokenURI, [_requestId])
    }

    unfinalizedRequestNumber(): Promise<bigint> {
        return this.eth_call(functions.unfinalizedRequestNumber, [])
    }

    unfinalizedStETH(): Promise<bigint> {
        return this.eth_call(functions.unfinalizedStETH, [])
    }
}
