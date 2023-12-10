import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './StakingRouter.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    ContractVersionSet: new LogEvent<([version: bigint] & {version: bigint})>(
        abi, '0xfddcded6b4f4730c226821172046b48372d3cd963c159701ae1b7c3bcac541bb'
    ),
    ExitedAndStuckValidatorsCountsUpdateFailed: new LogEvent<([stakingModuleId: bigint, lowLevelRevertData: string] & {stakingModuleId: bigint, lowLevelRevertData: string})>(
        abi, '0xe74bf895f0c3a2d6c74c40cbb362fdd9640035fc4226c72e3843809ad2a9d2b5'
    ),
    RewardsMintedReportFailed: new LogEvent<([stakingModuleId: bigint, lowLevelRevertData: string] & {stakingModuleId: bigint, lowLevelRevertData: string})>(
        abi, '0xf74208fedac7280fd11f8de0be14e00423dc5076da8e8ec8ca90e09257fff1b3'
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
    StakingModuleAdded: new LogEvent<([stakingModuleId: bigint, stakingModule: string, name: string, createdBy: string] & {stakingModuleId: bigint, stakingModule: string, name: string, createdBy: string})>(
        abi, '0x43b5213f0e1666cd0b8692a73686164c94deb955a59c65e10dee8bb958e7ce3e'
    ),
    StakingModuleExitedValidatorsIncompleteReporting: new LogEvent<([stakingModuleId: bigint, unreportedExitedValidatorsCount: bigint] & {stakingModuleId: bigint, unreportedExitedValidatorsCount: bigint})>(
        abi, '0xdd2523ca96a639ba7e17420698937f71eddd8af012ccb36ff5c8fe96141acae9'
    ),
    StakingModuleFeesSet: new LogEvent<([stakingModuleId: bigint, stakingModuleFee: bigint, treasuryFee: bigint, setBy: string] & {stakingModuleId: bigint, stakingModuleFee: bigint, treasuryFee: bigint, setBy: string})>(
        abi, '0x303c8ac43d1b1f9b898ddd2915a294efa01e9b07c322d7deeb7db332b66f0410'
    ),
    StakingModuleStatusSet: new LogEvent<([stakingModuleId: bigint, status: number, setBy: string] & {stakingModuleId: bigint, status: number, setBy: string})>(
        abi, '0xfd6f15fb2b48a21a60fe3d44d3c3a0433ca01e121b5124a63ec45c30ad925a17'
    ),
    StakingModuleTargetShareSet: new LogEvent<([stakingModuleId: bigint, targetShare: bigint, setBy: string] & {stakingModuleId: bigint, targetShare: bigint, setBy: string})>(
        abi, '0x065e5bd8e4145dd99cf69bad5871ad52d094aee07a67fcf2f418c89e49d5f20c'
    ),
    StakingRouterETHDeposited: new LogEvent<([stakingModuleId: bigint, amount: bigint] & {stakingModuleId: bigint, amount: bigint})>(
        abi, '0x9151b7f88aca05d432bb395647ef52b2ffc454e3c6afb69c95345af6b5a778c0'
    ),
    WithdrawalCredentialsSet: new LogEvent<([withdrawalCredentials: string, setBy: string] & {withdrawalCredentials: string, setBy: string})>(
        abi, '0x82e72df77173eab89b00556d791a407a78f4605c5c2f0694967c8c429dd43c7c'
    ),
    WithdrawalsCredentialsChangeFailed: new LogEvent<([stakingModuleId: bigint, lowLevelRevertData: string] & {stakingModuleId: bigint, lowLevelRevertData: string})>(
        abi, '0x0d64b11929aa111ca874dd00b5b0cc2d82b741be924ec9e3691e67c71552f623'
    ),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: new Func<[], {}, string>(
        abi, '0xa217fddf'
    ),
    DEPOSIT_CONTRACT: new Func<[], {}, string>(
        abi, '0x6b96736b'
    ),
    FEE_PRECISION_POINTS: new Func<[], {}, bigint>(
        abi, '0x7c8da51c'
    ),
    MANAGE_WITHDRAWAL_CREDENTIALS_ROLE: new Func<[], {}, string>(
        abi, '0x7a74884d'
    ),
    MAX_STAKING_MODULES_COUNT: new Func<[], {}, bigint>(
        abi, '0x4b3a1cb7'
    ),
    MAX_STAKING_MODULE_NAME_LENGTH: new Func<[], {}, bigint>(
        abi, '0x9b75b4ef'
    ),
    REPORT_EXITED_VALIDATORS_ROLE: new Func<[], {}, string>(
        abi, '0xc445ea75'
    ),
    REPORT_REWARDS_MINTED_ROLE: new Func<[], {}, string>(
        abi, '0x1d1b9d3c'
    ),
    STAKING_MODULE_MANAGE_ROLE: new Func<[], {}, string>(
        abi, '0xe016e6f7'
    ),
    STAKING_MODULE_PAUSE_ROLE: new Func<[], {}, string>(
        abi, '0xa7357c8c'
    ),
    STAKING_MODULE_RESUME_ROLE: new Func<[], {}, string>(
        abi, '0x8801da79'
    ),
    TOTAL_BASIS_POINTS: new Func<[], {}, bigint>(
        abi, '0x271662ec'
    ),
    UNSAFE_SET_EXITED_VALIDATORS_ROLE: new Func<[], {}, string>(
        abi, '0x1565d2f2'
    ),
    addStakingModule: new Func<[_name: string, _stakingModuleAddress: string, _targetShare: bigint, _stakingModuleFee: bigint, _treasuryFee: bigint], {_name: string, _stakingModuleAddress: string, _targetShare: bigint, _stakingModuleFee: bigint, _treasuryFee: bigint}, []>(
        abi, '0x3e54ee5b'
    ),
    deposit: new Func<[_depositsCount: bigint, _stakingModuleId: bigint, _depositCalldata: string], {_depositsCount: bigint, _stakingModuleId: bigint, _depositCalldata: string}, []>(
        abi, '0xaa0b7db7'
    ),
    getAllNodeOperatorDigests: new Func<[_stakingModuleId: bigint], {_stakingModuleId: bigint}, Array<([id: bigint, isActive: boolean, summary: ([isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})] & {id: bigint, isActive: boolean, summary: ([isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})})>>(
        abi, '0x3240a322'
    ),
    getAllStakingModuleDigests: new Func<[], {}, Array<([nodeOperatorsCount: bigint, activeNodeOperatorsCount: bigint, state: ([id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint] & {id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint}), summary: ([totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})] & {nodeOperatorsCount: bigint, activeNodeOperatorsCount: bigint, state: ([id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint] & {id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint}), summary: ([totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})})>>(
        abi, '0x57993b85'
    ),
    getContractVersion: new Func<[], {}, bigint>(
        abi, '0x8aa10435'
    ),
    getDepositsAllocation: new Func<[_depositsCount: bigint], {_depositsCount: bigint}, ([allocated: bigint, allocations: Array<bigint>] & {allocated: bigint, allocations: Array<bigint>})>(
        abi, '0xc82b1bb1'
    ),
    getLido: new Func<[], {}, string>(
        abi, '0x6a516b47'
    ),
    'getNodeOperatorDigests(uint256,uint256[])': new Func<[_stakingModuleId: bigint, _nodeOperatorIds: Array<bigint>], {_stakingModuleId: bigint, _nodeOperatorIds: Array<bigint>}, Array<([id: bigint, isActive: boolean, summary: ([isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})] & {id: bigint, isActive: boolean, summary: ([isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})})>>(
        abi, '0xf07ff28a'
    ),
    'getNodeOperatorDigests(uint256,uint256,uint256)': new Func<[_stakingModuleId: bigint, _offset: bigint, _limit: bigint], {_stakingModuleId: bigint, _offset: bigint, _limit: bigint}, Array<([id: bigint, isActive: boolean, summary: ([isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})] & {id: bigint, isActive: boolean, summary: ([isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})})>>(
        abi, '0xf8bb6d42'
    ),
    getNodeOperatorSummary: new Func<[_stakingModuleId: bigint, _nodeOperatorId: bigint], {_stakingModuleId: bigint, _nodeOperatorId: bigint}, ([isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})>(
        abi, '0xaa5a1b9d'
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
    getStakingFeeAggregateDistribution: new Func<[], {}, ([modulesFee: bigint, treasuryFee: bigint, basePrecision: bigint] & {modulesFee: bigint, treasuryFee: bigint, basePrecision: bigint})>(
        abi, '0xfa5093eb'
    ),
    getStakingFeeAggregateDistributionE4Precision: new Func<[], {}, ([modulesFee: number, treasuryFee: number] & {modulesFee: number, treasuryFee: number})>(
        abi, '0xefcdcc0e'
    ),
    getStakingModule: new Func<[_stakingModuleId: bigint], {_stakingModuleId: bigint}, ([id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint] & {id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint})>(
        abi, '0xbc1bb190'
    ),
    getStakingModuleActiveValidatorsCount: new Func<[_stakingModuleId: bigint], {_stakingModuleId: bigint}, bigint>(
        abi, '0x96b5d81c'
    ),
    getStakingModuleDigests: new Func<[_stakingModuleIds: Array<bigint>], {_stakingModuleIds: Array<bigint>}, Array<([nodeOperatorsCount: bigint, activeNodeOperatorsCount: bigint, state: ([id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint] & {id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint}), summary: ([totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})] & {nodeOperatorsCount: bigint, activeNodeOperatorsCount: bigint, state: ([id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint] & {id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint}), summary: ([totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})})>>(
        abi, '0x8525e3a1'
    ),
    getStakingModuleIds: new Func<[], {}, Array<bigint>>(
        abi, '0xf2aebb65'
    ),
    getStakingModuleIsActive: new Func<[_stakingModuleId: bigint], {_stakingModuleId: bigint}, boolean>(
        abi, '0x6608b11b'
    ),
    getStakingModuleIsDepositsPaused: new Func<[_stakingModuleId: bigint], {_stakingModuleId: bigint}, boolean>(
        abi, '0xe24ce9f1'
    ),
    getStakingModuleIsStopped: new Func<[_stakingModuleId: bigint], {_stakingModuleId: bigint}, boolean>(
        abi, '0x6ada55b9'
    ),
    getStakingModuleLastDepositBlock: new Func<[_stakingModuleId: bigint], {_stakingModuleId: bigint}, bigint>(
        abi, '0x473e0433'
    ),
    getStakingModuleMaxDepositsCount: new Func<[_stakingModuleId: bigint, _maxDepositsValue: bigint], {_stakingModuleId: bigint, _maxDepositsValue: bigint}, bigint>(
        abi, '0x19c64b79'
    ),
    getStakingModuleNonce: new Func<[_stakingModuleId: bigint], {_stakingModuleId: bigint}, bigint>(
        abi, '0x0519fbbf'
    ),
    getStakingModuleStatus: new Func<[_stakingModuleId: bigint], {_stakingModuleId: bigint}, number>(
        abi, '0x9fc5a6ed'
    ),
    getStakingModuleSummary: new Func<[_stakingModuleId: bigint], {_stakingModuleId: bigint}, ([totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})>(
        abi, '0x07e203ac'
    ),
    getStakingModules: new Func<[], {}, Array<([id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint] & {id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint})>>(
        abi, '0x6183214d'
    ),
    getStakingModulesCount: new Func<[], {}, bigint>(
        abi, '0x4a7583b6'
    ),
    getStakingRewardsDistribution: new Func<[], {}, ([recipients: Array<string>, stakingModuleIds: Array<bigint>, stakingModuleFees: Array<bigint>, totalFee: bigint, precisionPoints: bigint] & {recipients: Array<string>, stakingModuleIds: Array<bigint>, stakingModuleFees: Array<bigint>, totalFee: bigint, precisionPoints: bigint})>(
        abi, '0xba21ccae'
    ),
    getTotalFeeE4Precision: new Func<[], {}, number>(
        abi, '0x9fbb7bae'
    ),
    getWithdrawalCredentials: new Func<[], {}, string>(
        abi, '0x56396715'
    ),
    grantRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x2f2ff15d'
    ),
    hasRole: new Func<[role: string, account: string], {role: string, account: string}, boolean>(
        abi, '0x91d14854'
    ),
    hasStakingModule: new Func<[_stakingModuleId: bigint], {_stakingModuleId: bigint}, boolean>(
        abi, '0xa734329c'
    ),
    initialize: new Func<[_admin: string, _lido: string, _withdrawalCredentials: string], {_admin: string, _lido: string, _withdrawalCredentials: string}, []>(
        abi, '0x6133f985'
    ),
    onValidatorsCountsByNodeOperatorReportingFinished: new Func<[], {}, []>(
        abi, '0xdb3c7ba7'
    ),
    pauseStakingModule: new Func<[_stakingModuleId: bigint], {_stakingModuleId: bigint}, []>(
        abi, '0x5bf55e40'
    ),
    renounceRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x36568abe'
    ),
    reportRewardsMinted: new Func<[_stakingModuleIds: Array<bigint>, _totalShares: Array<bigint>], {_stakingModuleIds: Array<bigint>, _totalShares: Array<bigint>}, []>(
        abi, '0xaf124097'
    ),
    reportStakingModuleExitedValidatorsCountByNodeOperator: new Func<[_stakingModuleId: bigint, _nodeOperatorIds: string, _exitedValidatorsCounts: string], {_stakingModuleId: bigint, _nodeOperatorIds: string, _exitedValidatorsCounts: string}, []>(
        abi, '0xc8ac4980'
    ),
    reportStakingModuleStuckValidatorsCountByNodeOperator: new Func<[_stakingModuleId: bigint, _nodeOperatorIds: string, _stuckValidatorsCounts: string], {_stakingModuleId: bigint, _nodeOperatorIds: string, _stuckValidatorsCounts: string}, []>(
        abi, '0xcb589b9a'
    ),
    resumeStakingModule: new Func<[_stakingModuleId: bigint], {_stakingModuleId: bigint}, []>(
        abi, '0xd861c584'
    ),
    revokeRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0xd547741f'
    ),
    setStakingModuleStatus: new Func<[_stakingModuleId: bigint, _status: number], {_stakingModuleId: bigint, _status: number}, []>(
        abi, '0xd0a2b1b8'
    ),
    setWithdrawalCredentials: new Func<[_withdrawalCredentials: string], {_withdrawalCredentials: string}, []>(
        abi, '0xe97ee8cc'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    unsafeSetExitedValidatorsCount: new Func<[_stakingModuleId: bigint, _nodeOperatorId: bigint, _triggerUpdateFinish: boolean, _correction: ([currentModuleExitedValidatorsCount: bigint, currentNodeOperatorExitedValidatorsCount: bigint, currentNodeOperatorStuckValidatorsCount: bigint, newModuleExitedValidatorsCount: bigint, newNodeOperatorExitedValidatorsCount: bigint, newNodeOperatorStuckValidatorsCount: bigint] & {currentModuleExitedValidatorsCount: bigint, currentNodeOperatorExitedValidatorsCount: bigint, currentNodeOperatorStuckValidatorsCount: bigint, newModuleExitedValidatorsCount: bigint, newNodeOperatorExitedValidatorsCount: bigint, newNodeOperatorStuckValidatorsCount: bigint})], {_stakingModuleId: bigint, _nodeOperatorId: bigint, _triggerUpdateFinish: boolean, _correction: ([currentModuleExitedValidatorsCount: bigint, currentNodeOperatorExitedValidatorsCount: bigint, currentNodeOperatorStuckValidatorsCount: bigint, newModuleExitedValidatorsCount: bigint, newNodeOperatorExitedValidatorsCount: bigint, newNodeOperatorStuckValidatorsCount: bigint] & {currentModuleExitedValidatorsCount: bigint, currentNodeOperatorExitedValidatorsCount: bigint, currentNodeOperatorStuckValidatorsCount: bigint, newModuleExitedValidatorsCount: bigint, newNodeOperatorExitedValidatorsCount: bigint, newNodeOperatorStuckValidatorsCount: bigint})}, []>(
        abi, '0x072859c7'
    ),
    updateExitedValidatorsCountByStakingModule: new Func<[_stakingModuleIds: Array<bigint>, _exitedValidatorsCounts: Array<bigint>], {_stakingModuleIds: Array<bigint>, _exitedValidatorsCounts: Array<bigint>}, bigint>(
        abi, '0xabd44a24'
    ),
    updateRefundedValidatorsCount: new Func<[_stakingModuleId: bigint, _nodeOperatorId: bigint, _refundedValidatorsCount: bigint], {_stakingModuleId: bigint, _nodeOperatorId: bigint, _refundedValidatorsCount: bigint}, []>(
        abi, '0xe1b92a5c'
    ),
    updateStakingModule: new Func<[_stakingModuleId: bigint, _targetShare: bigint, _stakingModuleFee: bigint, _treasuryFee: bigint], {_stakingModuleId: bigint, _targetShare: bigint, _stakingModuleFee: bigint, _treasuryFee: bigint}, []>(
        abi, '0x8dc70c57'
    ),
    updateTargetValidatorsLimits: new Func<[_stakingModuleId: bigint, _nodeOperatorId: bigint, _isTargetLimitActive: boolean, _targetLimit: bigint], {_stakingModuleId: bigint, _nodeOperatorId: bigint, _isTargetLimitActive: boolean, _targetLimit: bigint}, []>(
        abi, '0x7443f523'
    ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE(): Promise<string> {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, [])
    }

    DEPOSIT_CONTRACT(): Promise<string> {
        return this.eth_call(functions.DEPOSIT_CONTRACT, [])
    }

    FEE_PRECISION_POINTS(): Promise<bigint> {
        return this.eth_call(functions.FEE_PRECISION_POINTS, [])
    }

    MANAGE_WITHDRAWAL_CREDENTIALS_ROLE(): Promise<string> {
        return this.eth_call(functions.MANAGE_WITHDRAWAL_CREDENTIALS_ROLE, [])
    }

    MAX_STAKING_MODULES_COUNT(): Promise<bigint> {
        return this.eth_call(functions.MAX_STAKING_MODULES_COUNT, [])
    }

    MAX_STAKING_MODULE_NAME_LENGTH(): Promise<bigint> {
        return this.eth_call(functions.MAX_STAKING_MODULE_NAME_LENGTH, [])
    }

    REPORT_EXITED_VALIDATORS_ROLE(): Promise<string> {
        return this.eth_call(functions.REPORT_EXITED_VALIDATORS_ROLE, [])
    }

    REPORT_REWARDS_MINTED_ROLE(): Promise<string> {
        return this.eth_call(functions.REPORT_REWARDS_MINTED_ROLE, [])
    }

    STAKING_MODULE_MANAGE_ROLE(): Promise<string> {
        return this.eth_call(functions.STAKING_MODULE_MANAGE_ROLE, [])
    }

    STAKING_MODULE_PAUSE_ROLE(): Promise<string> {
        return this.eth_call(functions.STAKING_MODULE_PAUSE_ROLE, [])
    }

    STAKING_MODULE_RESUME_ROLE(): Promise<string> {
        return this.eth_call(functions.STAKING_MODULE_RESUME_ROLE, [])
    }

    TOTAL_BASIS_POINTS(): Promise<bigint> {
        return this.eth_call(functions.TOTAL_BASIS_POINTS, [])
    }

    UNSAFE_SET_EXITED_VALIDATORS_ROLE(): Promise<string> {
        return this.eth_call(functions.UNSAFE_SET_EXITED_VALIDATORS_ROLE, [])
    }

    getAllNodeOperatorDigests(_stakingModuleId: bigint): Promise<Array<([id: bigint, isActive: boolean, summary: ([isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})] & {id: bigint, isActive: boolean, summary: ([isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})})>> {
        return this.eth_call(functions.getAllNodeOperatorDigests, [_stakingModuleId])
    }

    getAllStakingModuleDigests(): Promise<Array<([nodeOperatorsCount: bigint, activeNodeOperatorsCount: bigint, state: ([id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint] & {id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint}), summary: ([totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})] & {nodeOperatorsCount: bigint, activeNodeOperatorsCount: bigint, state: ([id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint] & {id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint}), summary: ([totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})})>> {
        return this.eth_call(functions.getAllStakingModuleDigests, [])
    }

    getContractVersion(): Promise<bigint> {
        return this.eth_call(functions.getContractVersion, [])
    }

    getDepositsAllocation(_depositsCount: bigint): Promise<([allocated: bigint, allocations: Array<bigint>] & {allocated: bigint, allocations: Array<bigint>})> {
        return this.eth_call(functions.getDepositsAllocation, [_depositsCount])
    }

    getLido(): Promise<string> {
        return this.eth_call(functions.getLido, [])
    }

    'getNodeOperatorDigests(uint256,uint256[])'(_stakingModuleId: bigint, _nodeOperatorIds: Array<bigint>): Promise<Array<([id: bigint, isActive: boolean, summary: ([isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})] & {id: bigint, isActive: boolean, summary: ([isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})})>> {
        return this.eth_call(functions['getNodeOperatorDigests(uint256,uint256[])'], [_stakingModuleId, _nodeOperatorIds])
    }

    'getNodeOperatorDigests(uint256,uint256,uint256)'(_stakingModuleId: bigint, _offset: bigint, _limit: bigint): Promise<Array<([id: bigint, isActive: boolean, summary: ([isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})] & {id: bigint, isActive: boolean, summary: ([isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})})>> {
        return this.eth_call(functions['getNodeOperatorDigests(uint256,uint256,uint256)'], [_stakingModuleId, _offset, _limit])
    }

    getNodeOperatorSummary(_stakingModuleId: bigint, _nodeOperatorId: bigint): Promise<([isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {isTargetLimitActive: boolean, targetValidatorsCount: bigint, stuckValidatorsCount: bigint, refundedValidatorsCount: bigint, stuckPenaltyEndTimestamp: bigint, totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})> {
        return this.eth_call(functions.getNodeOperatorSummary, [_stakingModuleId, _nodeOperatorId])
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

    getStakingFeeAggregateDistribution(): Promise<([modulesFee: bigint, treasuryFee: bigint, basePrecision: bigint] & {modulesFee: bigint, treasuryFee: bigint, basePrecision: bigint})> {
        return this.eth_call(functions.getStakingFeeAggregateDistribution, [])
    }

    getStakingFeeAggregateDistributionE4Precision(): Promise<([modulesFee: number, treasuryFee: number] & {modulesFee: number, treasuryFee: number})> {
        return this.eth_call(functions.getStakingFeeAggregateDistributionE4Precision, [])
    }

    getStakingModule(_stakingModuleId: bigint): Promise<([id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint] & {id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint})> {
        return this.eth_call(functions.getStakingModule, [_stakingModuleId])
    }

    getStakingModuleActiveValidatorsCount(_stakingModuleId: bigint): Promise<bigint> {
        return this.eth_call(functions.getStakingModuleActiveValidatorsCount, [_stakingModuleId])
    }

    getStakingModuleDigests(_stakingModuleIds: Array<bigint>): Promise<Array<([nodeOperatorsCount: bigint, activeNodeOperatorsCount: bigint, state: ([id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint] & {id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint}), summary: ([totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})] & {nodeOperatorsCount: bigint, activeNodeOperatorsCount: bigint, state: ([id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint] & {id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint}), summary: ([totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})})>> {
        return this.eth_call(functions.getStakingModuleDigests, [_stakingModuleIds])
    }

    getStakingModuleIds(): Promise<Array<bigint>> {
        return this.eth_call(functions.getStakingModuleIds, [])
    }

    getStakingModuleIsActive(_stakingModuleId: bigint): Promise<boolean> {
        return this.eth_call(functions.getStakingModuleIsActive, [_stakingModuleId])
    }

    getStakingModuleIsDepositsPaused(_stakingModuleId: bigint): Promise<boolean> {
        return this.eth_call(functions.getStakingModuleIsDepositsPaused, [_stakingModuleId])
    }

    getStakingModuleIsStopped(_stakingModuleId: bigint): Promise<boolean> {
        return this.eth_call(functions.getStakingModuleIsStopped, [_stakingModuleId])
    }

    getStakingModuleLastDepositBlock(_stakingModuleId: bigint): Promise<bigint> {
        return this.eth_call(functions.getStakingModuleLastDepositBlock, [_stakingModuleId])
    }

    getStakingModuleMaxDepositsCount(_stakingModuleId: bigint, _maxDepositsValue: bigint): Promise<bigint> {
        return this.eth_call(functions.getStakingModuleMaxDepositsCount, [_stakingModuleId, _maxDepositsValue])
    }

    getStakingModuleNonce(_stakingModuleId: bigint): Promise<bigint> {
        return this.eth_call(functions.getStakingModuleNonce, [_stakingModuleId])
    }

    getStakingModuleStatus(_stakingModuleId: bigint): Promise<number> {
        return this.eth_call(functions.getStakingModuleStatus, [_stakingModuleId])
    }

    getStakingModuleSummary(_stakingModuleId: bigint): Promise<([totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint] & {totalExitedValidators: bigint, totalDepositedValidators: bigint, depositableValidatorsCount: bigint})> {
        return this.eth_call(functions.getStakingModuleSummary, [_stakingModuleId])
    }

    getStakingModules(): Promise<Array<([id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint] & {id: number, stakingModuleAddress: string, stakingModuleFee: number, treasuryFee: number, targetShare: number, status: number, name: string, lastDepositAt: bigint, lastDepositBlock: bigint, exitedValidatorsCount: bigint})>> {
        return this.eth_call(functions.getStakingModules, [])
    }

    getStakingModulesCount(): Promise<bigint> {
        return this.eth_call(functions.getStakingModulesCount, [])
    }

    getStakingRewardsDistribution(): Promise<([recipients: Array<string>, stakingModuleIds: Array<bigint>, stakingModuleFees: Array<bigint>, totalFee: bigint, precisionPoints: bigint] & {recipients: Array<string>, stakingModuleIds: Array<bigint>, stakingModuleFees: Array<bigint>, totalFee: bigint, precisionPoints: bigint})> {
        return this.eth_call(functions.getStakingRewardsDistribution, [])
    }

    getTotalFeeE4Precision(): Promise<number> {
        return this.eth_call(functions.getTotalFeeE4Precision, [])
    }

    getWithdrawalCredentials(): Promise<string> {
        return this.eth_call(functions.getWithdrawalCredentials, [])
    }

    hasRole(role: string, account: string): Promise<boolean> {
        return this.eth_call(functions.hasRole, [role, account])
    }

    hasStakingModule(_stakingModuleId: bigint): Promise<boolean> {
        return this.eth_call(functions.hasStakingModule, [_stakingModuleId])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }
}
