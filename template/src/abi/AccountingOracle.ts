import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './AccountingOracle.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    ConsensusHashContractSet: new LogEvent<([addr: string, prevAddr: string] & {addr: string, prevAddr: string})>(
        abi, '0x25421480fb7f52d18947876279a213696b58d7e0e5416ce5e2c9f9942661c34c'
    ),
    ConsensusVersionSet: new LogEvent<([version: bigint, prevVersion: bigint] & {version: bigint, prevVersion: bigint})>(
        abi, '0xfa5304972d4ec3e3207f0bbf91155a49d0dfa62488f9529403a2a49e4b29a895'
    ),
    ContractVersionSet: new LogEvent<([version: bigint] & {version: bigint})>(
        abi, '0xfddcded6b4f4730c226821172046b48372d3cd963c159701ae1b7c3bcac541bb'
    ),
    ExtraDataSubmitted: new LogEvent<([refSlot: bigint, itemsProcessed: bigint, itemsCount: bigint] & {refSlot: bigint, itemsProcessed: bigint, itemsCount: bigint})>(
        abi, '0x6d8abc91d336688c551c9bae92a74fa116852ac20bb9b2df4c12bd2fcf1cd46a'
    ),
    ProcessingStarted: new LogEvent<([refSlot: bigint, hash: string] & {refSlot: bigint, hash: string})>(
        abi, '0xf73febded7d4502284718948a3e1d75406151c6326bde069424a584a4f6af87a'
    ),
    ReportSubmitted: new LogEvent<([refSlot: bigint, hash: string, processingDeadlineTime: bigint] & {refSlot: bigint, hash: string, processingDeadlineTime: bigint})>(
        abi, '0xaed7d1a7a1831158dcda1e4214f5862f450bd3eb5721a5f322bf8c9fe1790b0a'
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
    WarnExtraDataIncompleteProcessing: new LogEvent<([refSlot: bigint, processedItemsCount: bigint, itemsCount: bigint] & {refSlot: bigint, processedItemsCount: bigint, itemsCount: bigint})>(
        abi, '0x801a93267f699b033e11b662b16b36c41b6f9a59a5b5ad967d4cb84232e523c2'
    ),
    WarnProcessingMissed: new LogEvent<([refSlot: bigint] & {refSlot: bigint})>(
        abi, '0x800b849c8bf80718cf786c99d1091c079fe2c5e420a3ba7ba9b0ef8179ef2c38'
    ),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: new Func<[], {}, string>(
        abi, '0xa217fddf'
    ),
    EXTRA_DATA_FORMAT_EMPTY: new Func<[], {}, bigint>(
        abi, '0x74facb9b'
    ),
    EXTRA_DATA_FORMAT_LIST: new Func<[], {}, bigint>(
        abi, '0x005418e1'
    ),
    EXTRA_DATA_TYPE_EXITED_VALIDATORS: new Func<[], {}, bigint>(
        abi, '0x560f97cb'
    ),
    EXTRA_DATA_TYPE_STUCK_VALIDATORS: new Func<[], {}, bigint>(
        abi, '0x672690b4'
    ),
    GENESIS_TIME: new Func<[], {}, bigint>(
        abi, '0xf2882461'
    ),
    LEGACY_ORACLE: new Func<[], {}, string>(
        abi, '0xce976fa9'
    ),
    LIDO: new Func<[], {}, string>(
        abi, '0x8b21f170'
    ),
    LOCATOR: new Func<[], {}, string>(
        abi, '0x57a78289'
    ),
    MANAGE_CONSENSUS_CONTRACT_ROLE: new Func<[], {}, string>(
        abi, '0xad5cac4e'
    ),
    MANAGE_CONSENSUS_VERSION_ROLE: new Func<[], {}, string>(
        abi, '0x9cc23c79'
    ),
    SECONDS_PER_SLOT: new Func<[], {}, bigint>(
        abi, '0x304b9071'
    ),
    SUBMIT_DATA_ROLE: new Func<[], {}, string>(
        abi, '0x46e1f576'
    ),
    getConsensusContract: new Func<[], {}, string>(
        abi, '0x8f55b571'
    ),
    getConsensusReport: new Func<[], {}, ([hash: string, refSlot: bigint, processingDeadlineTime: bigint, processingStarted: boolean] & {hash: string, refSlot: bigint, processingDeadlineTime: bigint, processingStarted: boolean})>(
        abi, '0x60d64d38'
    ),
    getConsensusVersion: new Func<[], {}, bigint>(
        abi, '0x5be20425'
    ),
    getContractVersion: new Func<[], {}, bigint>(
        abi, '0x8aa10435'
    ),
    getLastProcessingRefSlot: new Func<[], {}, bigint>(
        abi, '0x3584d59c'
    ),
    getProcessingState: new Func<[], {}, ([currentFrameRefSlot: bigint, processingDeadlineTime: bigint, mainDataHash: string, mainDataSubmitted: boolean, extraDataHash: string, extraDataFormat: bigint, extraDataSubmitted: boolean, extraDataItemsCount: bigint, extraDataItemsSubmitted: bigint] & {currentFrameRefSlot: bigint, processingDeadlineTime: bigint, mainDataHash: string, mainDataSubmitted: boolean, extraDataHash: string, extraDataFormat: bigint, extraDataSubmitted: boolean, extraDataItemsCount: bigint, extraDataItemsSubmitted: bigint})>(
        abi, '0x8f7797c2'
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
    grantRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x2f2ff15d'
    ),
    hasRole: new Func<[role: string, account: string], {role: string, account: string}, boolean>(
        abi, '0x91d14854'
    ),
    initialize: new Func<[admin: string, consensusContract: string, consensusVersion: bigint], {admin: string, consensusContract: string, consensusVersion: bigint}, []>(
        abi, '0x1794bb3c'
    ),
    initializeWithoutMigration: new Func<[admin: string, consensusContract: string, consensusVersion: bigint, lastProcessingRefSlot: bigint], {admin: string, consensusContract: string, consensusVersion: bigint, lastProcessingRefSlot: bigint}, []>(
        abi, '0xb74d4631'
    ),
    renounceRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x36568abe'
    ),
    revokeRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0xd547741f'
    ),
    setConsensusContract: new Func<[addr: string], {addr: string}, []>(
        abi, '0xc469c307'
    ),
    setConsensusVersion: new Func<[version: bigint], {version: bigint}, []>(
        abi, '0x8d591474'
    ),
    submitConsensusReport: new Func<[reportHash: string, refSlot: bigint, deadline: bigint], {reportHash: string, refSlot: bigint, deadline: bigint}, []>(
        abi, '0x063f36ad'
    ),
    submitReportData: new Func<[data: ([consensusVersion: bigint, refSlot: bigint, numValidators: bigint, clBalanceGwei: bigint, stakingModuleIdsWithNewlyExitedValidators: Array<bigint>, numExitedValidatorsByStakingModule: Array<bigint>, withdrawalVaultBalance: bigint, elRewardsVaultBalance: bigint, sharesRequestedToBurn: bigint, withdrawalFinalizationBatches: Array<bigint>, simulatedShareRate: bigint, isBunkerMode: boolean, extraDataFormat: bigint, extraDataHash: string, extraDataItemsCount: bigint] & {consensusVersion: bigint, refSlot: bigint, numValidators: bigint, clBalanceGwei: bigint, stakingModuleIdsWithNewlyExitedValidators: Array<bigint>, numExitedValidatorsByStakingModule: Array<bigint>, withdrawalVaultBalance: bigint, elRewardsVaultBalance: bigint, sharesRequestedToBurn: bigint, withdrawalFinalizationBatches: Array<bigint>, simulatedShareRate: bigint, isBunkerMode: boolean, extraDataFormat: bigint, extraDataHash: string, extraDataItemsCount: bigint}), contractVersion: bigint], {data: ([consensusVersion: bigint, refSlot: bigint, numValidators: bigint, clBalanceGwei: bigint, stakingModuleIdsWithNewlyExitedValidators: Array<bigint>, numExitedValidatorsByStakingModule: Array<bigint>, withdrawalVaultBalance: bigint, elRewardsVaultBalance: bigint, sharesRequestedToBurn: bigint, withdrawalFinalizationBatches: Array<bigint>, simulatedShareRate: bigint, isBunkerMode: boolean, extraDataFormat: bigint, extraDataHash: string, extraDataItemsCount: bigint] & {consensusVersion: bigint, refSlot: bigint, numValidators: bigint, clBalanceGwei: bigint, stakingModuleIdsWithNewlyExitedValidators: Array<bigint>, numExitedValidatorsByStakingModule: Array<bigint>, withdrawalVaultBalance: bigint, elRewardsVaultBalance: bigint, sharesRequestedToBurn: bigint, withdrawalFinalizationBatches: Array<bigint>, simulatedShareRate: bigint, isBunkerMode: boolean, extraDataFormat: bigint, extraDataHash: string, extraDataItemsCount: bigint}), contractVersion: bigint}, []>(
        abi, '0xfc7377cd'
    ),
    submitReportExtraDataEmpty: new Func<[], {}, []>(
        abi, '0xfa565b05'
    ),
    submitReportExtraDataList: new Func<[items: string], {items: string}, []>(
        abi, '0x06c373da'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE(): Promise<string> {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, [])
    }

    EXTRA_DATA_FORMAT_EMPTY(): Promise<bigint> {
        return this.eth_call(functions.EXTRA_DATA_FORMAT_EMPTY, [])
    }

    EXTRA_DATA_FORMAT_LIST(): Promise<bigint> {
        return this.eth_call(functions.EXTRA_DATA_FORMAT_LIST, [])
    }

    EXTRA_DATA_TYPE_EXITED_VALIDATORS(): Promise<bigint> {
        return this.eth_call(functions.EXTRA_DATA_TYPE_EXITED_VALIDATORS, [])
    }

    EXTRA_DATA_TYPE_STUCK_VALIDATORS(): Promise<bigint> {
        return this.eth_call(functions.EXTRA_DATA_TYPE_STUCK_VALIDATORS, [])
    }

    GENESIS_TIME(): Promise<bigint> {
        return this.eth_call(functions.GENESIS_TIME, [])
    }

    LEGACY_ORACLE(): Promise<string> {
        return this.eth_call(functions.LEGACY_ORACLE, [])
    }

    LIDO(): Promise<string> {
        return this.eth_call(functions.LIDO, [])
    }

    LOCATOR(): Promise<string> {
        return this.eth_call(functions.LOCATOR, [])
    }

    MANAGE_CONSENSUS_CONTRACT_ROLE(): Promise<string> {
        return this.eth_call(functions.MANAGE_CONSENSUS_CONTRACT_ROLE, [])
    }

    MANAGE_CONSENSUS_VERSION_ROLE(): Promise<string> {
        return this.eth_call(functions.MANAGE_CONSENSUS_VERSION_ROLE, [])
    }

    SECONDS_PER_SLOT(): Promise<bigint> {
        return this.eth_call(functions.SECONDS_PER_SLOT, [])
    }

    SUBMIT_DATA_ROLE(): Promise<string> {
        return this.eth_call(functions.SUBMIT_DATA_ROLE, [])
    }

    getConsensusContract(): Promise<string> {
        return this.eth_call(functions.getConsensusContract, [])
    }

    getConsensusReport(): Promise<([hash: string, refSlot: bigint, processingDeadlineTime: bigint, processingStarted: boolean] & {hash: string, refSlot: bigint, processingDeadlineTime: bigint, processingStarted: boolean})> {
        return this.eth_call(functions.getConsensusReport, [])
    }

    getConsensusVersion(): Promise<bigint> {
        return this.eth_call(functions.getConsensusVersion, [])
    }

    getContractVersion(): Promise<bigint> {
        return this.eth_call(functions.getContractVersion, [])
    }

    getLastProcessingRefSlot(): Promise<bigint> {
        return this.eth_call(functions.getLastProcessingRefSlot, [])
    }

    getProcessingState(): Promise<([currentFrameRefSlot: bigint, processingDeadlineTime: bigint, mainDataHash: string, mainDataSubmitted: boolean, extraDataHash: string, extraDataFormat: bigint, extraDataSubmitted: boolean, extraDataItemsCount: bigint, extraDataItemsSubmitted: bigint] & {currentFrameRefSlot: bigint, processingDeadlineTime: bigint, mainDataHash: string, mainDataSubmitted: boolean, extraDataHash: string, extraDataFormat: bigint, extraDataSubmitted: boolean, extraDataItemsCount: bigint, extraDataItemsSubmitted: bigint})> {
        return this.eth_call(functions.getProcessingState, [])
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

    hasRole(role: string, account: string): Promise<boolean> {
        return this.eth_call(functions.hasRole, [role, account])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }
}
