import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './Lido.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    BeaconValidatorsUpdated: new LogEvent<([beaconValidators: bigint] & {beaconValidators: bigint})>(
        abi, '0xedbcb4ca306d81687f1437e9dccd289dd7c938599cd3bcff6e1ae9bdd1d6b334'
    ),
    MevTxFeeReceived: new LogEvent<([amount: bigint] & {amount: bigint})>(
        abi, '0xe38dbc656b8029e533ec787bb92c50c2aea2fe488332519e1b0abdad046dafa5'
    ),
    ScriptResult: new LogEvent<([executor: string, script: string, input: string, returnData: string] & {executor: string, script: string, input: string, returnData: string})>(
        abi, '0x5229a5dba83a54ae8cb5b51bdd6de9474cacbe9dd332f5185f3a4f4f2e3f4ad9'
    ),
    RecoverToVault: new LogEvent<([vault: string, token: string, amount: bigint] & {vault: string, token: string, amount: bigint})>(
        abi, '0x596caf56044b55fb8c4ca640089bbc2b63cae3e978b851f5745cbb7c5b288e02'
    ),
    TransferShares: new LogEvent<([from: string, to: string, sharesValue: bigint] & {from: string, to: string, sharesValue: bigint})>(
        abi, '0x9d9c909296d9c674451c0c24f02cb64981eb3b727f99865939192f880a755dcb'
    ),
    SharesBurnt: new LogEvent<([account: string, preRebaseTokenAmount: bigint, postRebaseTokenAmount: bigint, sharesAmount: bigint] & {account: string, preRebaseTokenAmount: bigint, postRebaseTokenAmount: bigint, sharesAmount: bigint})>(
        abi, '0x8b2a1e1ad5e0578c3dd82494156e985dade827a87c573b5c1c7716a32162ad64'
    ),
    Stopped: new LogEvent<[]>(
        abi, '0x7acc84e34091ae817647a4c49116f5cc07f319078ba80f8f5fde37ea7e25cbd6'
    ),
    Resumed: new LogEvent<[]>(
        abi, '0x62451d457bc659158be6e6247f56ec1df424a5c7597f71c20c2bc44e0965c8f9'
    ),
    Transfer: new LogEvent<([from: string, to: string, value: bigint] & {from: string, to: string, value: bigint})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
    Approval: new LogEvent<([owner: string, spender: string, value: bigint] & {owner: string, spender: string, value: bigint})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    StakingPaused: new LogEvent<[]>(
        abi, '0x26d1807b479eaba249c1214b82e4b65bbb0cc73ee8a17901324b1ef1b5904e49'
    ),
    StakingResumed: new LogEvent<[]>(
        abi, '0xedaeeae9aed70c4545d3ab0065713261c9cee8d6cf5c8b07f52f0a65fd91efda'
    ),
    StakingLimitSet: new LogEvent<([maxStakeLimit: bigint, stakeLimitIncreasePerBlock: bigint] & {maxStakeLimit: bigint, stakeLimitIncreasePerBlock: bigint})>(
        abi, '0xce9fddf6179affa1ea7bf36d80a6bf0284e0f3b91f4b2fa6eea2af923e7fac2d'
    ),
    StakingLimitRemoved: new LogEvent<[]>(
        abi, '0x9b2a687c198898fcc32a33bbc610d478f177a73ab7352023e6cc1de5bf12a3df'
    ),
    ProtocolContactsSet: new LogEvent<([oracle: string, treasury: string, insuranceFund: string] & {oracle: string, treasury: string, insuranceFund: string})>(
        abi, '0x7df55cbe17c0cf85c9c23753c046f686eeb4c6b2ce13182943d215e92afc565a'
    ),
    FeeSet: new LogEvent<([feeBasisPoints: number] & {feeBasisPoints: number})>(
        abi, '0xaab062e3faf62b6c9a0f8e62af66e0310e27127a8c871a67be7dd4d93de6da53'
    ),
    FeeDistributionSet: new LogEvent<([treasuryFeeBasisPoints: number, insuranceFeeBasisPoints: number, operatorsFeeBasisPoints: number] & {treasuryFeeBasisPoints: number, insuranceFeeBasisPoints: number, operatorsFeeBasisPoints: number})>(
        abi, '0x034529db1bba3830b8877e116871f19c5b96ef86c739f2a05668c860c8466898'
    ),
    ELRewardsReceived: new LogEvent<([amount: bigint] & {amount: bigint})>(
        abi, '0xd27f9b0c98bdee27044afa149eadcd2047d6399cb6613a45c5b87e6aca76e6b5'
    ),
    ELRewardsWithdrawalLimitSet: new LogEvent<([limitPoints: bigint] & {limitPoints: bigint})>(
        abi, '0x166eb213129ab51688433b859b5a206403ee174774a1430f8ffb83af316161f6'
    ),
    WithdrawalCredentialsSet: new LogEvent<([withdrawalCredentials: string] & {withdrawalCredentials: string})>(
        abi, '0x13eb80e900aa05a2696d50d5de33ef631c73493c4921da233b17335ff6b7b114'
    ),
    ELRewardsVaultSet: new LogEvent<([executionLayerRewardsVault: string] & {executionLayerRewardsVault: string})>(
        abi, '0x8e2d01c4cfaa88fa4d772d37e4d068deda4342bf4ef6dc4b0cf3e868be5ebb40'
    ),
    Submitted: new LogEvent<([sender: string, amount: bigint, referral: string] & {sender: string, amount: bigint, referral: string})>(
        abi, '0x96a25c8ce0baabc1fdefd93e9ed25d8e092a3332f3aa9a41722b5697231d1d1a'
    ),
    Unbuffered: new LogEvent<([amount: bigint] & {amount: bigint})>(
        abi, '0x76a397bea5768d4fca97ef47792796e35f98dc81b16c1de84e28a818e1f97108'
    ),
    Withdrawal: new LogEvent<([sender: string, tokenAmount: bigint, sentFromBuffer: bigint, pubkeyHash: string, etherAmount: bigint] & {sender: string, tokenAmount: bigint, sentFromBuffer: bigint, pubkeyHash: string, etherAmount: bigint})>(
        abi, '0xcf8f72073b13b07fe51690fd7c43414d1a0ef6f21c9896ba1814a08be9bdab3a'
    ),
    ETHDistributed: new LogEvent<([reportTimestamp: bigint, preCLBalance: bigint, postCLBalance: bigint, withdrawalsWithdrawn: bigint, executionLayerRewardsWithdrawn: bigint, postBufferedEther: bigint] & {reportTimestamp: bigint, preCLBalance: bigint, postCLBalance: bigint, withdrawalsWithdrawn: bigint, executionLayerRewardsWithdrawn: bigint, postBufferedEther: bigint})>(
        abi, '0x92dd3cb149a1eebd51fd8c2a3653fd96f30c4ac01d4f850fc16d46abd6c3e92f'
    ),
    TokenRebased: new LogEvent<([reportTimestamp: bigint, timeElapsed: bigint, preTotalShares: bigint, preTotalEther: bigint, postTotalShares: bigint, postTotalEther: bigint, sharesMintedAsFees: bigint] & {reportTimestamp: bigint, timeElapsed: bigint, preTotalShares: bigint, preTotalEther: bigint, postTotalShares: bigint, postTotalEther: bigint, sharesMintedAsFees: bigint})>(
        abi, '0xff08c3ef606d198e316ef5b822193c489965899eb4e3c248cea1a4626c3eda50'
    ),
    WithdrawalsReceived: new LogEvent<([amount: bigint] & {amount: bigint})>(
        abi, '0x6e5086f7e1ab04bd826e77faae35b1bcfe31bd144623361a40ea4af51670b1c3'
    ),
    CLValidatorsUpdated: new LogEvent<([reportTimestamp: bigint, preCLValidators: bigint, postCLValidators: bigint] & {reportTimestamp: bigint, preCLValidators: bigint, postCLValidators: bigint})>(
        abi, '0x1252331d4f3ee8a9f0a3484c4c2fb059c70a047b5dc5482a3ee6415f742d9f2e'
    ),
    LidoLocatorSet: new LogEvent<([lidoLocator: string] & {lidoLocator: string})>(
        abi, '0x61f9416d3c29deb4e424342445a2b132738430becd9fa275e11297c90668b22e'
    ),
}

export const functions = {
    setValidatorsNumber: new Func<[_validators: bigint], {_validators: bigint}, []>(
        abi, '0xa134a98d'
    ),
    resume: new Func<[], {}, []>(
        abi, '0x046f7da2'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    stop: new Func<[], {}, []>(
        abi, '0x07da68f5'
    ),
    hasInitialized: new Func<[], {}, boolean>(
        abi, '0x0803fac0'
    ),
    approve: new Func<[_spender: string, _amount: bigint], {_spender: string, _amount: bigint}, boolean>(
        abi, '0x095ea7b3'
    ),
    STAKING_CONTROL_ROLE: new Func<[], {}, string>(
        abi, '0x136dd43c'
    ),
    initialize: new Func<[_depositContract: string, _oracle: string, _operators: string, _treasury: string, _insuranceFund: string], {_depositContract: string, _oracle: string, _operators: string, _treasury: string, _insuranceFund: string}, []>(
        abi, '0x1459457a'
    ),
    getInsuranceFund: new Func<[], {}, string>(
        abi, '0x158626f7'
    ),
    totalSupply: new Func<[], {}, bigint>(
        abi, '0x18160ddd'
    ),
    getSharesByPooledEth: new Func<[_ethAmount: bigint], {_ethAmount: bigint}, bigint>(
        abi, '0x19208451'
    ),
    isStakingPaused: new Func<[], {}, boolean>(
        abi, '0x1ea7ca89'
    ),
    transferFrom: new Func<[_sender: string, _recipient: string, _amount: bigint], {_sender: string, _recipient: string, _amount: bigint}, boolean>(
        abi, '0x23b872dd'
    ),
    getOperators: new Func<[], {}, string>(
        abi, '0x27a099d8'
    ),
    getEVMScriptExecutor: new Func<[_script: string], {_script: string}, string>(
        abi, '0x2914b9bd'
    ),
    setStakingLimit: new Func<[_maxStakeLimit: bigint, _stakeLimitIncreasePerBlock: bigint], {_maxStakeLimit: bigint, _stakeLimitIncreasePerBlock: bigint}, []>(
        abi, '0x2cb5f784'
    ),
    RESUME_ROLE: new Func<[], {}, string>(
        abi, '0x2de03aa1'
    ),
    decimals: new Func<[], {}, number>(
        abi, '0x313ce567'
    ),
    getRecoveryVault: new Func<[], {}, string>(
        abi, '0x32f0a3b5'
    ),
    DEPOSIT_ROLE: new Func<[], {}, string>(
        abi, '0x353efdcf'
    ),
    DEPOSIT_SIZE: new Func<[], {}, bigint>(
        abi, '0x36bf3325'
    ),
    getTotalPooledEther: new Func<[], {}, bigint>(
        abi, '0x37cfdaca'
    ),
    PAUSE_ROLE: new Func<[], {}, string>(
        abi, '0x389ed267'
    ),
    increaseAllowance: new Func<[_spender: string, _addedValue: bigint], {_spender: string, _addedValue: bigint}, boolean>(
        abi, '0x39509351'
    ),
    getTreasury: new Func<[], {}, string>(
        abi, '0x3b19e84a'
    ),
    isStopped: new Func<[], {}, boolean>(
        abi, '0x3f683b6a'
    ),
    MANAGE_WITHDRAWAL_KEY: new Func<[], {}, string>(
        abi, '0x435721da'
    ),
    getBufferedEther: new Func<[], {}, bigint>(
        abi, '0x47b714e0'
    ),
    receiveELRewards: new Func<[], {}, []>(
        abi, '0x4ad509b2'
    ),
    getELRewardsWithdrawalLimit: new Func<[], {}, bigint>(
        abi, '0x52b3af93'
    ),
    SIGNATURE_LENGTH: new Func<[], {}, bigint>(
        abi, '0x540bc5ea'
    ),
    getWithdrawalCredentials: new Func<[], {}, string>(
        abi, '0x56396715'
    ),
    getCurrentStakeLimit: new Func<[], {}, bigint>(
        abi, '0x609c4c6c'
    ),
    setELRewardsWithdrawalLimit: new Func<[_limitPoints: number], {_limitPoints: number}, []>(
        abi, '0x63c2eb53'
    ),
    handleOracleReport: new Func<[_beaconValidators: bigint, _beaconBalance: bigint], {_beaconValidators: bigint, _beaconBalance: bigint}, []>(
        abi, '0x64f9991a'
    ),
    getStakeLimitFullInfo: new Func<[], {}, ([isStakingPaused: boolean, isStakingLimitSet: boolean, currentStakeLimit: bigint, maxStakeLimit: bigint, maxStakeLimitGrowthBlocks: bigint, prevStakeLimit: bigint, prevStakeBlockNumber: bigint] & {isStakingPaused: boolean, isStakingLimitSet: boolean, currentStakeLimit: bigint, maxStakeLimit: bigint, maxStakeLimitGrowthBlocks: bigint, prevStakeLimit: bigint, prevStakeBlockNumber: bigint})>(
        abi, '0x665b4b0b'
    ),
    SET_EL_REWARDS_WITHDRAWAL_LIMIT_ROLE: new Func<[], {}, string>(
        abi, '0x6bb98ad3'
    ),
    getELRewardsVault: new Func<[], {}, string>(
        abi, '0x706aa30d'
    ),
    balanceOf: new Func<[_account: string], {_account: string}, bigint>(
        abi, '0x70a08231'
    ),
    resumeStaking: new Func<[], {}, []>(
        abi, '0x7475f913'
    ),
    getFeeDistribution: new Func<[], {}, ([treasuryFeeBasisPoints: number, insuranceFeeBasisPoints: number, operatorsFeeBasisPoints: number] & {treasuryFeeBasisPoints: number, insuranceFeeBasisPoints: number, operatorsFeeBasisPoints: number})>(
        abi, '0x752f77f1'
    ),
    getPooledEthByShares: new Func<[_sharesAmount: bigint], {_sharesAmount: bigint}, bigint>(
        abi, '0x7a28fb88'
    ),
    setELRewardsVault: new Func<[_executionLayerRewardsVault: string], {_executionLayerRewardsVault: string}, []>(
        abi, '0x7e4193c6'
    ),
    allowRecoverability: new Func<[token: string], {token: string}, boolean>(
        abi, '0x7e7db6e1'
    ),
    MANAGE_PROTOCOL_CONTRACTS_ROLE: new Func<[], {}, string>(
        abi, '0x7f6fdac7'
    ),
    appId: new Func<[], {}, string>(
        abi, '0x80afdea8'
    ),
    getOracle: new Func<[], {}, string>(
        abi, '0x833b1fce'
    ),
    getInitializationBlock: new Func<[], {}, bigint>(
        abi, '0x8b3dd749'
    ),
    setFeeDistribution: new Func<[_treasuryFeeBasisPoints: number, _insuranceFeeBasisPoints: number, _operatorsFeeBasisPoints: number], {_treasuryFeeBasisPoints: number, _insuranceFeeBasisPoints: number, _operatorsFeeBasisPoints: number}, []>(
        abi, '0x8cef3612'
    ),
    setFee: new Func<[_feeBasisPoints: number], {_feeBasisPoints: number}, []>(
        abi, '0x8e005553'
    ),
    transferShares: new Func<[_recipient: string, _sharesAmount: bigint], {_recipient: string, _sharesAmount: bigint}, bigint>(
        abi, '0x8fcb4e5b'
    ),
    'depositBufferedEther(uint256)': new Func<[_maxDeposits: bigint], {_maxDeposits: bigint}, []>(
        abi, '0x90adc83b'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    MANAGE_FEE: new Func<[], {}, string>(
        abi, '0x9aaa2d15'
    ),
    transferToVault: new Func<[_token: string], {_token: string}, []>(
        abi, '0x9d4941d8'
    ),
    canPerform: new Func<[_sender: string, _role: string, _params: Array<bigint>], {_sender: string, _role: string, _params: Array<bigint>}, boolean>(
        abi, '0xa1658fad'
    ),
    submit: new Func<[_referral: string], {_referral: string}, bigint>(
        abi, '0xa1903eab'
    ),
    WITHDRAWAL_CREDENTIALS_LENGTH: new Func<[], {}, bigint>(
        abi, '0xa30448c0'
    ),
    decreaseAllowance: new Func<[_spender: string, _subtractedValue: bigint], {_spender: string, _subtractedValue: bigint}, boolean>(
        abi, '0xa457c2d7'
    ),
    getEVMScriptRegistry: new Func<[], {}, string>(
        abi, '0xa479e508'
    ),
    PUBKEY_LENGTH: new Func<[], {}, bigint>(
        abi, '0xa4d55d1d'
    ),
    SET_EL_REWARDS_VAULT_ROLE: new Func<[], {}, string>(
        abi, '0xa6426f5f'
    ),
    transfer: new Func<[_recipient: string, _amount: bigint], {_recipient: string, _amount: bigint}, boolean>(
        abi, '0xa9059cbb'
    ),
    getDepositContract: new Func<[], {}, string>(
        abi, '0xab94276a'
    ),
    getBeaconStat: new Func<[], {}, ([depositedValidators: bigint, beaconValidators: bigint, beaconBalance: bigint] & {depositedValidators: bigint, beaconValidators: bigint, beaconBalance: bigint})>(
        abi, '0xae2e3538'
    ),
    removeStakingLimit: new Func<[], {}, []>(
        abi, '0xb3320d9a'
    ),
    BURN_ROLE: new Func<[], {}, string>(
        abi, '0xb930908f'
    ),
    getFee: new Func<[], {}, number>(
        abi, '0xced72f87'
    ),
    kernel: new Func<[], {}, string>(
        abi, '0xd4aae0c4'
    ),
    getTotalShares: new Func<[], {}, bigint>(
        abi, '0xd5002f2e'
    ),
    allowance: new Func<[_owner: string, _spender: string], {_owner: string, _spender: string}, bigint>(
        abi, '0xdd62ed3e'
    ),
    isPetrified: new Func<[], {}, boolean>(
        abi, '0xde4796ed'
    ),
    setProtocolContracts: new Func<[_oracle: string, _treasury: string, _insuranceFund: string], {_oracle: string, _treasury: string, _insuranceFund: string}, []>(
        abi, '0xe73f4529'
    ),
    setWithdrawalCredentials: new Func<[_withdrawalCredentials: string], {_withdrawalCredentials: string}, []>(
        abi, '0xe97ee8cc'
    ),
    STAKING_PAUSE_ROLE: new Func<[], {}, string>(
        abi, '0xeb85262f'
    ),
    'depositBufferedEther()': new Func<[], {}, []>(
        abi, '0xecc1dcfb'
    ),
    burnShares: new Func<[_account: string, _sharesAmount: bigint], {_account: string, _sharesAmount: bigint}, bigint>(
        abi, '0xee7a7c04'
    ),
    sharesOf: new Func<[_account: string], {_account: string}, bigint>(
        abi, '0xf5eb42dc'
    ),
    pauseStaking: new Func<[], {}, []>(
        abi, '0xf999c506'
    ),
    getTotalELRewardsCollected: new Func<[], {}, bigint>(
        abi, '0xfa64ebac'
    ),
}

export class Contract extends ContractBase {

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    hasInitialized(): Promise<boolean> {
        return this.eth_call(functions.hasInitialized, [])
    }

    STAKING_CONTROL_ROLE(): Promise<string> {
        return this.eth_call(functions.STAKING_CONTROL_ROLE, [])
    }

    getInsuranceFund(): Promise<string> {
        return this.eth_call(functions.getInsuranceFund, [])
    }

    totalSupply(): Promise<bigint> {
        return this.eth_call(functions.totalSupply, [])
    }

    getSharesByPooledEth(_ethAmount: bigint): Promise<bigint> {
        return this.eth_call(functions.getSharesByPooledEth, [_ethAmount])
    }

    isStakingPaused(): Promise<boolean> {
        return this.eth_call(functions.isStakingPaused, [])
    }

    getOperators(): Promise<string> {
        return this.eth_call(functions.getOperators, [])
    }

    getEVMScriptExecutor(_script: string): Promise<string> {
        return this.eth_call(functions.getEVMScriptExecutor, [_script])
    }

    RESUME_ROLE(): Promise<string> {
        return this.eth_call(functions.RESUME_ROLE, [])
    }

    decimals(): Promise<number> {
        return this.eth_call(functions.decimals, [])
    }

    getRecoveryVault(): Promise<string> {
        return this.eth_call(functions.getRecoveryVault, [])
    }

    DEPOSIT_ROLE(): Promise<string> {
        return this.eth_call(functions.DEPOSIT_ROLE, [])
    }

    DEPOSIT_SIZE(): Promise<bigint> {
        return this.eth_call(functions.DEPOSIT_SIZE, [])
    }

    getTotalPooledEther(): Promise<bigint> {
        return this.eth_call(functions.getTotalPooledEther, [])
    }

    PAUSE_ROLE(): Promise<string> {
        return this.eth_call(functions.PAUSE_ROLE, [])
    }

    getTreasury(): Promise<string> {
        return this.eth_call(functions.getTreasury, [])
    }

    isStopped(): Promise<boolean> {
        return this.eth_call(functions.isStopped, [])
    }

    MANAGE_WITHDRAWAL_KEY(): Promise<string> {
        return this.eth_call(functions.MANAGE_WITHDRAWAL_KEY, [])
    }

    getBufferedEther(): Promise<bigint> {
        return this.eth_call(functions.getBufferedEther, [])
    }

    getELRewardsWithdrawalLimit(): Promise<bigint> {
        return this.eth_call(functions.getELRewardsWithdrawalLimit, [])
    }

    SIGNATURE_LENGTH(): Promise<bigint> {
        return this.eth_call(functions.SIGNATURE_LENGTH, [])
    }

    getWithdrawalCredentials(): Promise<string> {
        return this.eth_call(functions.getWithdrawalCredentials, [])
    }

    getCurrentStakeLimit(): Promise<bigint> {
        return this.eth_call(functions.getCurrentStakeLimit, [])
    }

    getStakeLimitFullInfo(): Promise<([isStakingPaused: boolean, isStakingLimitSet: boolean, currentStakeLimit: bigint, maxStakeLimit: bigint, maxStakeLimitGrowthBlocks: bigint, prevStakeLimit: bigint, prevStakeBlockNumber: bigint] & {isStakingPaused: boolean, isStakingLimitSet: boolean, currentStakeLimit: bigint, maxStakeLimit: bigint, maxStakeLimitGrowthBlocks: bigint, prevStakeLimit: bigint, prevStakeBlockNumber: bigint})> {
        return this.eth_call(functions.getStakeLimitFullInfo, [])
    }

    SET_EL_REWARDS_WITHDRAWAL_LIMIT_ROLE(): Promise<string> {
        return this.eth_call(functions.SET_EL_REWARDS_WITHDRAWAL_LIMIT_ROLE, [])
    }

    getELRewardsVault(): Promise<string> {
        return this.eth_call(functions.getELRewardsVault, [])
    }

    balanceOf(_account: string): Promise<bigint> {
        return this.eth_call(functions.balanceOf, [_account])
    }

    getFeeDistribution(): Promise<([treasuryFeeBasisPoints: number, insuranceFeeBasisPoints: number, operatorsFeeBasisPoints: number] & {treasuryFeeBasisPoints: number, insuranceFeeBasisPoints: number, operatorsFeeBasisPoints: number})> {
        return this.eth_call(functions.getFeeDistribution, [])
    }

    getPooledEthByShares(_sharesAmount: bigint): Promise<bigint> {
        return this.eth_call(functions.getPooledEthByShares, [_sharesAmount])
    }

    allowRecoverability(token: string): Promise<boolean> {
        return this.eth_call(functions.allowRecoverability, [token])
    }

    MANAGE_PROTOCOL_CONTRACTS_ROLE(): Promise<string> {
        return this.eth_call(functions.MANAGE_PROTOCOL_CONTRACTS_ROLE, [])
    }

    appId(): Promise<string> {
        return this.eth_call(functions.appId, [])
    }

    getOracle(): Promise<string> {
        return this.eth_call(functions.getOracle, [])
    }

    getInitializationBlock(): Promise<bigint> {
        return this.eth_call(functions.getInitializationBlock, [])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    MANAGE_FEE(): Promise<string> {
        return this.eth_call(functions.MANAGE_FEE, [])
    }

    canPerform(_sender: string, _role: string, _params: Array<bigint>): Promise<boolean> {
        return this.eth_call(functions.canPerform, [_sender, _role, _params])
    }

    WITHDRAWAL_CREDENTIALS_LENGTH(): Promise<bigint> {
        return this.eth_call(functions.WITHDRAWAL_CREDENTIALS_LENGTH, [])
    }

    getEVMScriptRegistry(): Promise<string> {
        return this.eth_call(functions.getEVMScriptRegistry, [])
    }

    PUBKEY_LENGTH(): Promise<bigint> {
        return this.eth_call(functions.PUBKEY_LENGTH, [])
    }

    SET_EL_REWARDS_VAULT_ROLE(): Promise<string> {
        return this.eth_call(functions.SET_EL_REWARDS_VAULT_ROLE, [])
    }

    getDepositContract(): Promise<string> {
        return this.eth_call(functions.getDepositContract, [])
    }

    getBeaconStat(): Promise<([depositedValidators: bigint, beaconValidators: bigint, beaconBalance: bigint] & {depositedValidators: bigint, beaconValidators: bigint, beaconBalance: bigint})> {
        return this.eth_call(functions.getBeaconStat, [])
    }

    BURN_ROLE(): Promise<string> {
        return this.eth_call(functions.BURN_ROLE, [])
    }

    getFee(): Promise<number> {
        return this.eth_call(functions.getFee, [])
    }

    kernel(): Promise<string> {
        return this.eth_call(functions.kernel, [])
    }

    getTotalShares(): Promise<bigint> {
        return this.eth_call(functions.getTotalShares, [])
    }

    allowance(_owner: string, _spender: string): Promise<bigint> {
        return this.eth_call(functions.allowance, [_owner, _spender])
    }

    isPetrified(): Promise<boolean> {
        return this.eth_call(functions.isPetrified, [])
    }

    STAKING_PAUSE_ROLE(): Promise<string> {
        return this.eth_call(functions.STAKING_PAUSE_ROLE, [])
    }

    sharesOf(_account: string): Promise<bigint> {
        return this.eth_call(functions.sharesOf, [_account])
    }

    getTotalELRewardsCollected(): Promise<bigint> {
        return this.eth_call(functions.getTotalELRewardsCollected, [])
    }
}
