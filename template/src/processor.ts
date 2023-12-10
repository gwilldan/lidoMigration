import { EvmBatchProcessor } from "@subsquid/evm-processor";
import { lookupArchive } from "@subsquid/archive-registry";

import * as accountingOracle from "./abi/AccountingOracle";
import * as easyTrack from "./abi/EasyTrack";
import * as hashConsensus from "./abi/HashConsensus";
import * as lidoDao from "./abi/LidoDao";
import * as legacyOracle from "./abi/LegacyOracle";
import * as lido from "./abi/Lido";
import * as nodeOperatorRegistry from "./abi/NodeOperatorRegistry";
import * as stakingRouter from "./abi/StakingRouter";
import * as voting from "./abi/Voting";
import * as withdrawalQueue from "./abi/WithdrawalQueue";

export const LIDO_DAO_CONTRACT =
	"0xb8FFC3Cd6e7Cf5a098A1c92F48009765B24088Dc".toLowerCase();
export const LIDO_CONTRACT =
	"0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84".toLowerCase();
export const LEGACY_ORACLE_CONTRACT =
	"0x442af784A788A5bd6F42A01Ebe9F287a871243fb".toLowerCase();
export const NODE_OPERATOR_REGISTRY_CONTRACT =
	"0x55032650b14df07b85bF18A3a3eC8E0Af2e028d5".toLowerCase();
export const VOTING_CONTRACT =
	"0x2e59A20f205bB85a89C53f1936454680651E618e".toLowerCase();
export const STAKING_ROUTER_CONTRACT =
	"0xFdDf38947aFB03C621C71b06C9C70bce73f12999".toLowerCase();
export const EASY_TRACK_CONTRACT =
	"0xF0211b7660680B49De1A7E9f25C65660F0a13Fea".toLowerCase();
export const ACCOUNTING_ORACLE_CONTRACT =
	"0x852deD011285fe67063a08005c71a85690503Cee".toLowerCase();
export const WITHDRAWAL_QUEUE_CONTRACT =
	"0x889edC2eDab5f40e902b864aD4d7AdE8E412F9B1".toLowerCase();
export const HASH_CONSENSUS_CONTRACT =
	"0xD624B08C83bAECF0807Dd2c6880C3154a5F0B288".toLowerCase();

export const processor = new EvmBatchProcessor()
	.setDataSource({
		archive: lookupArchive("eth-mainnet"),
		chain: "https://rpc.ankr.com/eth",
	})
	.setFinalityConfirmation(10)
	.setFields({
		log: {
			topics: true,
			data: true,
			transactionHash: true,
		},
		transaction: {
			from: true,
			value: true,
			hash: true,
		},
	})
	.setBlockRange({
		from: 11_473_216,
	})
	.addLog({
		address: [LIDO_DAO_CONTRACT],
		topic0: [lidoDao.events["SetApp"].topic],
		transaction: true,
	})
	.addLog({
		address: [LIDO_CONTRACT],
		topic0: [
			lido.events["Submitted"].topic,
			lido.events["Transfer"].topic,
			lido.events["TransferShares"].topic,
			lido.events["ELRewardsReceived"].topic,
			lido.events["TokenRebased"].topic,
			lido.events["MevTxFeeReceived"].topic,
			lido.events["SharesBurnt"].topic,
			lido.events["ETHDistributed"].topic,
			lido.events["LidoLocatorSet"].topic,
			lido.events["Stopped"].topic,
			lido.events["Resumed"].topic,
			lido.events["StakingLimitRemoved"].topic,
			lido.events["StakingLimitSet"].topic,
			lido.events["StakingResumed"].topic,
			lido.events["StakingPaused"].topic,
			lido.events["Approval"].topic,
			lido.events["FeeSet"].topic,
			lido.events["FeeDistributionSet"].topic,
			lido.events["WithdrawalCredentialsSet"].topic,
			lido.events["ProtocolContactsSet"].topic,
			lido.events["ELRewardsWithdrawalLimitSet"].topic,
			lido.events["ELRewardsVaultSet"].topic,
			lido.events["BeaconValidatorsUpdated"].topic,
		],
		transaction: true,
	})
	.addLog({
		address: [LEGACY_ORACLE_CONTRACT],
		topic0: [
			legacyOracle.events["Completed"].topic,
			legacyOracle.events["PostTotalShares"].topic,
			legacyOracle.events["MemberAdded"].topic,
			legacyOracle.events["MemberRemoved"].topic,
			legacyOracle.events["ContractVersionSet"].topic,
			legacyOracle.events["QuorumChanged"].topic,
			legacyOracle.events["BeaconSpecSet"].topic,
			legacyOracle.events["BeaconReportReceiverSet"].topic,
			legacyOracle.events["AllowedBeaconBalanceRelativeDecreaseSet"].topic,
			legacyOracle.events["AllowedBeaconBalanceAnnualRelativeIncreaseSet"]
				.topic,
		],
		transaction: true,
	})
	.addLog({
		address: [NODE_OPERATOR_REGISTRY_CONTRACT],
		topic0: [
			nodeOperatorRegistry.events["NodeOperatorAdded"].topic,
			nodeOperatorRegistry.events["NodeOperatorActiveSet"].topic,
			nodeOperatorRegistry.events["NodeOperatorNameSet"].topic,
			nodeOperatorRegistry.events["NodeOperatorRewardAddressSet"].topic,
			nodeOperatorRegistry.events["SigningKeyAdded"].topic,
			nodeOperatorRegistry.events["SigningKeyRemoved"].topic,
			nodeOperatorRegistry.events["NodeOperatorTotalKeysTrimmed"].topic,
			nodeOperatorRegistry.events["KeysOpIndexSet"].topic,
			nodeOperatorRegistry.events["NodeOperatorStakingLimitSet"].topic,
			nodeOperatorRegistry.events["NodeOperatorTotalStoppedValidatorsReported"]
				.topic,
		],
		transaction: true,
	})
	.addLog({
		address: [VOTING_CONTRACT],
		topic0: [
			voting.events["StartVote"].topic,
			voting.events["CastVote"].topic,
			voting.events["CastObjection"].topic,
			voting.events["ExecuteVote"].topic,
			voting.events["ChangeSupportRequired"].topic,
			voting.events["ChangeMinQuorum"].topic,
			voting.events["ChangeVoteTime"].topic,
			voting.events["ChangeObjectionPhaseTime"].topic,
		],
		transaction: true,
	})
	.addLog({
		address: [EASY_TRACK_CONTRACT],
		topic0: [
			easyTrack.events["EVMScriptExecutorChanged"].topic,
			easyTrack.events["EVMScriptFactoryAdded"].topic,
			easyTrack.events["EVMScriptFactoryRemoved"].topic,
			easyTrack.events["MotionCanceled"].topic,
			easyTrack.events["MotionCreated"].topic,
			easyTrack.events["MotionDurationChanged"].topic,
			easyTrack.events["MotionEnacted"].topic,
			easyTrack.events["MotionObjected"].topic,
			easyTrack.events["MotionRejected"].topic,
			easyTrack.events["MotionsCountLimitChanged"].topic,
			easyTrack.events["ObjectionsThresholdChanged"].topic,
			easyTrack.events["Paused"].topic,
			easyTrack.events["Unpaused"].topic,
		],
		transaction: true,
	})
	.addLog({
		address: [STAKING_ROUTER_CONTRACT],
		topic0: [stakingRouter.events["WithdrawalCredentialsSet"].topic],
		transaction: true,
	})
	.addLog({
		address: [ACCOUNTING_ORACLE_CONTRACT],
		topic0: [
			accountingOracle.events["ProcessingStarted"].topic,
			accountingOracle.events["ExtraDataSubmitted"].topic,
		],
		transaction: true,
	})
	.addLog({
		address: [WITHDRAWAL_QUEUE_CONTRACT],
		topic0: [
			withdrawalQueue.events["BunkerModeDisabled"].topic,
			withdrawalQueue.events["BunkerModeEnabled"].topic,
			withdrawalQueue.events["ContractVersionSet"].topic,
			withdrawalQueue.events["Paused"].topic,
			withdrawalQueue.events["Resumed"].topic,
			withdrawalQueue.events["WithdrawalClaimed"].topic,
			withdrawalQueue.events["WithdrawalRequested"].topic,
			withdrawalQueue.events["WithdrawalsFinalized"].topic,
			withdrawalQueue.events["WithdrawalBatchFinalized"].topic,
		],
		transaction: true,
	})
	.addLog({
		address: [HASH_CONSENSUS_CONTRACT],
		topic0: [hashConsensus.events["FrameConfigSet"].topic],
		transaction: true,
	});
