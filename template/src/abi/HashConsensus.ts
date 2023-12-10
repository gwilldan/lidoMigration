import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './HashConsensus.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    ConsensusLost: new LogEvent<([refSlot: bigint] & {refSlot: bigint})>(
        abi, '0xde3f4ea5aa67881831e8fad2b0855d47e75aa63a2fae6ef657ffd5f856c4a613'
    ),
    ConsensusReached: new LogEvent<([refSlot: bigint, report: string, support: bigint] & {refSlot: bigint, report: string, support: bigint})>(
        abi, '0x2b6bc782c916fa763822f1e50c6db0f95dade36d6541a8a4cbe070735b8b226d'
    ),
    FastLaneConfigSet: new LogEvent<([fastLaneLengthSlots: bigint] & {fastLaneLengthSlots: bigint})>(
        abi, '0xab8b22776606cc75c47792d32af7e63ed9ca74e85c9780a7fc7994fdbd6fde2b'
    ),
    FrameConfigSet: new LogEvent<([newInitialEpoch: bigint, newEpochsPerFrame: bigint] & {newInitialEpoch: bigint, newEpochsPerFrame: bigint})>(
        abi, '0xe343afa5219eaf28c50ce9cd658acd69cbe28b34fa773eb3a523e28007f64afc'
    ),
    MemberAdded: new LogEvent<([addr: string, newTotalMembers: bigint, newQuorum: bigint] & {addr: string, newTotalMembers: bigint, newQuorum: bigint})>(
        abi, '0xe17e0e2cd88e2144dd54f3d823c30d4569092bcac1aabaec1129883e9cc12d2e'
    ),
    MemberRemoved: new LogEvent<([addr: string, newTotalMembers: bigint, newQuorum: bigint] & {addr: string, newTotalMembers: bigint, newQuorum: bigint})>(
        abi, '0xa182730913550d27dc6c5813fad297cb0785871bec3d0152c5650e59c5d39d60'
    ),
    QuorumSet: new LogEvent<([newQuorum: bigint, totalMembers: bigint, prevQuorum: bigint] & {newQuorum: bigint, totalMembers: bigint, prevQuorum: bigint})>(
        abi, '0x9f40cfd22fe91777c78f252bd21a710f3fb007dc2f321876891e7644ba0ae175'
    ),
    ReportProcessorSet: new LogEvent<([processor: string, prevProcessor: string] & {processor: string, prevProcessor: string})>(
        abi, '0x3b59429457a41af89ea682ac9ed8abb8e99eb5c7d3363d5eedfc6bff6271a81e'
    ),
    ReportReceived: new LogEvent<([refSlot: bigint, member: string, report: string] & {refSlot: bigint, member: string, report: string})>(
        abi, '0x92f77576dabd7bad26f75c36abb3021b5bbb66a3e5688570a0355daddd417488'
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
}

export const functions = {
    DEFAULT_ADMIN_ROLE: new Func<[], {}, string>(
        abi, '0xa217fddf'
    ),
    DISABLE_CONSENSUS_ROLE: new Func<[], {}, string>(
        abi, '0x60a50a5c'
    ),
    MANAGE_FAST_LANE_CONFIG_ROLE: new Func<[], {}, string>(
        abi, '0x239c327f'
    ),
    MANAGE_FRAME_CONFIG_ROLE: new Func<[], {}, string>(
        abi, '0x115a57c4'
    ),
    MANAGE_MEMBERS_AND_QUORUM_ROLE: new Func<[], {}, string>(
        abi, '0xa1e07cac'
    ),
    MANAGE_REPORT_PROCESSOR_ROLE: new Func<[], {}, string>(
        abi, '0xfb4209ac'
    ),
    addMember: new Func<[addr: string, quorum: bigint], {addr: string, quorum: bigint}, []>(
        abi, '0x98041ea3'
    ),
    disableConsensus: new Func<[], {}, []>(
        abi, '0xad231cb2'
    ),
    getChainConfig: new Func<[], {}, ([slotsPerEpoch: bigint, secondsPerSlot: bigint, genesisTime: bigint] & {slotsPerEpoch: bigint, secondsPerSlot: bigint, genesisTime: bigint})>(
        abi, '0x606c0c94'
    ),
    getConsensusState: new Func<[], {}, ([refSlot: bigint, consensusReport: string, isReportProcessing: boolean] & {refSlot: bigint, consensusReport: string, isReportProcessing: boolean})>(
        abi, '0xea87627d'
    ),
    getConsensusStateForMember: new Func<[addr: string], {addr: string}, ([currentFrameRefSlot: bigint, currentFrameConsensusReport: string, isMember: boolean, isFastLane: boolean, canReport: boolean, lastMemberReportRefSlot: bigint, currentFrameMemberReport: string] & {currentFrameRefSlot: bigint, currentFrameConsensusReport: string, isMember: boolean, isFastLane: boolean, canReport: boolean, lastMemberReportRefSlot: bigint, currentFrameMemberReport: string})>(
        abi, '0x60e61801'
    ),
    getCurrentFrame: new Func<[], {}, ([refSlot: bigint, reportProcessingDeadlineSlot: bigint] & {refSlot: bigint, reportProcessingDeadlineSlot: bigint})>(
        abi, '0x72f79b13'
    ),
    getFastLaneMembers: new Func<[], {}, ([addresses: Array<string>, lastReportedRefSlots: Array<bigint>] & {addresses: Array<string>, lastReportedRefSlots: Array<bigint>})>(
        abi, '0x433ab1f3'
    ),
    getFrameConfig: new Func<[], {}, ([initialEpoch: bigint, epochsPerFrame: bigint, fastLaneLengthSlots: bigint] & {initialEpoch: bigint, epochsPerFrame: bigint, fastLaneLengthSlots: bigint})>(
        abi, '0x6fb1bf66'
    ),
    getInitialRefSlot: new Func<[], {}, bigint>(
        abi, '0x6095012f'
    ),
    getIsFastLaneMember: new Func<[addr: string], {addr: string}, boolean>(
        abi, '0x20b4d751'
    ),
    getIsMember: new Func<[addr: string], {addr: string}, boolean>(
        abi, '0x1951c037'
    ),
    getMembers: new Func<[], {}, ([addresses: Array<string>, lastReportedRefSlots: Array<bigint>] & {addresses: Array<string>, lastReportedRefSlots: Array<bigint>})>(
        abi, '0x9eab5253'
    ),
    getQuorum: new Func<[], {}, bigint>(
        abi, '0xc26c12eb'
    ),
    getReportProcessor: new Func<[], {}, string>(
        abi, '0x6d058268'
    ),
    getReportVariants: new Func<[], {}, ([variants: Array<string>, support: Array<bigint>] & {variants: Array<string>, support: Array<bigint>})>(
        abi, '0x2fd2d750'
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
    removeMember: new Func<[addr: string, quorum: bigint], {addr: string, quorum: bigint}, []>(
        abi, '0x16f6f03e'
    ),
    renounceRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x36568abe'
    ),
    revokeRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0xd547741f'
    ),
    setFastLaneLengthSlots: new Func<[fastLaneLengthSlots: bigint], {fastLaneLengthSlots: bigint}, []>(
        abi, '0x99229f58'
    ),
    setFrameConfig: new Func<[epochsPerFrame: bigint, fastLaneLengthSlots: bigint], {epochsPerFrame: bigint, fastLaneLengthSlots: bigint}, []>(
        abi, '0x34aa6753'
    ),
    setQuorum: new Func<[quorum: bigint], {quorum: bigint}, []>(
        abi, '0xc1ba4e59'
    ),
    setReportProcessor: new Func<[newProcessor: string], {newProcessor: string}, []>(
        abi, '0xe76cd4e0'
    ),
    submitReport: new Func<[slot: bigint, report: string, consensusVersion: bigint], {slot: bigint, report: string, consensusVersion: bigint}, []>(
        abi, '0xe33a8d39'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    updateInitialEpoch: new Func<[initialEpoch: bigint], {initialEpoch: bigint}, []>(
        abi, '0x323a41f6'
    ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE(): Promise<string> {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, [])
    }

    DISABLE_CONSENSUS_ROLE(): Promise<string> {
        return this.eth_call(functions.DISABLE_CONSENSUS_ROLE, [])
    }

    MANAGE_FAST_LANE_CONFIG_ROLE(): Promise<string> {
        return this.eth_call(functions.MANAGE_FAST_LANE_CONFIG_ROLE, [])
    }

    MANAGE_FRAME_CONFIG_ROLE(): Promise<string> {
        return this.eth_call(functions.MANAGE_FRAME_CONFIG_ROLE, [])
    }

    MANAGE_MEMBERS_AND_QUORUM_ROLE(): Promise<string> {
        return this.eth_call(functions.MANAGE_MEMBERS_AND_QUORUM_ROLE, [])
    }

    MANAGE_REPORT_PROCESSOR_ROLE(): Promise<string> {
        return this.eth_call(functions.MANAGE_REPORT_PROCESSOR_ROLE, [])
    }

    getChainConfig(): Promise<([slotsPerEpoch: bigint, secondsPerSlot: bigint, genesisTime: bigint] & {slotsPerEpoch: bigint, secondsPerSlot: bigint, genesisTime: bigint})> {
        return this.eth_call(functions.getChainConfig, [])
    }

    getConsensusState(): Promise<([refSlot: bigint, consensusReport: string, isReportProcessing: boolean] & {refSlot: bigint, consensusReport: string, isReportProcessing: boolean})> {
        return this.eth_call(functions.getConsensusState, [])
    }

    getConsensusStateForMember(addr: string): Promise<([currentFrameRefSlot: bigint, currentFrameConsensusReport: string, isMember: boolean, isFastLane: boolean, canReport: boolean, lastMemberReportRefSlot: bigint, currentFrameMemberReport: string] & {currentFrameRefSlot: bigint, currentFrameConsensusReport: string, isMember: boolean, isFastLane: boolean, canReport: boolean, lastMemberReportRefSlot: bigint, currentFrameMemberReport: string})> {
        return this.eth_call(functions.getConsensusStateForMember, [addr])
    }

    getCurrentFrame(): Promise<([refSlot: bigint, reportProcessingDeadlineSlot: bigint] & {refSlot: bigint, reportProcessingDeadlineSlot: bigint})> {
        return this.eth_call(functions.getCurrentFrame, [])
    }

    getFastLaneMembers(): Promise<([addresses: Array<string>, lastReportedRefSlots: Array<bigint>] & {addresses: Array<string>, lastReportedRefSlots: Array<bigint>})> {
        return this.eth_call(functions.getFastLaneMembers, [])
    }

    getFrameConfig(): Promise<([initialEpoch: bigint, epochsPerFrame: bigint, fastLaneLengthSlots: bigint] & {initialEpoch: bigint, epochsPerFrame: bigint, fastLaneLengthSlots: bigint})> {
        return this.eth_call(functions.getFrameConfig, [])
    }

    getInitialRefSlot(): Promise<bigint> {
        return this.eth_call(functions.getInitialRefSlot, [])
    }

    getIsFastLaneMember(addr: string): Promise<boolean> {
        return this.eth_call(functions.getIsFastLaneMember, [addr])
    }

    getIsMember(addr: string): Promise<boolean> {
        return this.eth_call(functions.getIsMember, [addr])
    }

    getMembers(): Promise<([addresses: Array<string>, lastReportedRefSlots: Array<bigint>] & {addresses: Array<string>, lastReportedRefSlots: Array<bigint>})> {
        return this.eth_call(functions.getMembers, [])
    }

    getQuorum(): Promise<bigint> {
        return this.eth_call(functions.getQuorum, [])
    }

    getReportProcessor(): Promise<string> {
        return this.eth_call(functions.getReportProcessor, [])
    }

    getReportVariants(): Promise<([variants: Array<string>, support: Array<bigint>] & {variants: Array<string>, support: Array<bigint>})> {
        return this.eth_call(functions.getReportVariants, [])
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
