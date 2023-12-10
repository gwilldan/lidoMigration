export const ABI_JSON = [
    {
        "type": "function",
        "name": "setValidatorsNumber",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_validators"
            }
        ],
        "outputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BeaconValidatorsUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "beaconValidators",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MevTxFeeReceived",
        "inputs": [
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "resume",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "name",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "stop",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "hasInitialized",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "approve",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_spender"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "STAKING_CONTROL_ROLE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_depositContract"
            },
            {
                "type": "address",
                "name": "_oracle"
            },
            {
                "type": "address",
                "name": "_operators"
            },
            {
                "type": "address",
                "name": "_treasury"
            },
            {
                "type": "address",
                "name": "_insuranceFund"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getInsuranceFund",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "totalSupply",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getSharesByPooledEth",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_ethAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isStakingPaused",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "transferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_sender"
            },
            {
                "type": "address",
                "name": "_recipient"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getOperators",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getEVMScriptExecutor",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "_script"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "setStakingLimit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_maxStakeLimit"
            },
            {
                "type": "uint256",
                "name": "_stakeLimitIncreasePerBlock"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "RESUME_ROLE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "decimals",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getRecoveryVault",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "DEPOSIT_ROLE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "DEPOSIT_SIZE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getTotalPooledEther",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "PAUSE_ROLE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "increaseAllowance",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_spender"
            },
            {
                "type": "uint256",
                "name": "_addedValue"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getTreasury",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isStopped",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "MANAGE_WITHDRAWAL_KEY",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getBufferedEther",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "receiveELRewards",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getELRewardsWithdrawalLimit",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "SIGNATURE_LENGTH",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getWithdrawalCredentials",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getCurrentStakeLimit",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "setELRewardsWithdrawalLimit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint16",
                "name": "_limitPoints"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "handleOracleReport",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_beaconValidators"
            },
            {
                "type": "uint256",
                "name": "_beaconBalance"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getStakeLimitFullInfo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool",
                "name": "isStakingPaused"
            },
            {
                "type": "bool",
                "name": "isStakingLimitSet"
            },
            {
                "type": "uint256",
                "name": "currentStakeLimit"
            },
            {
                "type": "uint256",
                "name": "maxStakeLimit"
            },
            {
                "type": "uint256",
                "name": "maxStakeLimitGrowthBlocks"
            },
            {
                "type": "uint256",
                "name": "prevStakeLimit"
            },
            {
                "type": "uint256",
                "name": "prevStakeBlockNumber"
            }
        ]
    },
    {
        "type": "function",
        "name": "SET_EL_REWARDS_WITHDRAWAL_LIMIT_ROLE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getELRewardsVault",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "balanceOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_account"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "resumeStaking",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getFeeDistribution",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint16",
                "name": "treasuryFeeBasisPoints"
            },
            {
                "type": "uint16",
                "name": "insuranceFeeBasisPoints"
            },
            {
                "type": "uint16",
                "name": "operatorsFeeBasisPoints"
            }
        ]
    },
    {
        "type": "function",
        "name": "getPooledEthByShares",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_sharesAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "setELRewardsVault",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_executionLayerRewardsVault"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "allowRecoverability",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "MANAGE_PROTOCOL_CONTRACTS_ROLE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "appId",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getOracle",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getInitializationBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "setFeeDistribution",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint16",
                "name": "_treasuryFeeBasisPoints"
            },
            {
                "type": "uint16",
                "name": "_insuranceFeeBasisPoints"
            },
            {
                "type": "uint16",
                "name": "_operatorsFeeBasisPoints"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setFee",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint16",
                "name": "_feeBasisPoints"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferShares",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_recipient"
            },
            {
                "type": "uint256",
                "name": "_sharesAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "depositBufferedEther",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_maxDeposits"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "symbol",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "MANAGE_FEE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "transferToVault",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_token"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "canPerform",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_sender"
            },
            {
                "type": "bytes32",
                "name": "_role"
            },
            {
                "type": "uint256[]",
                "name": "_params"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "submit",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "_referral"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "WITHDRAWAL_CREDENTIALS_LENGTH",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "decreaseAllowance",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_spender"
            },
            {
                "type": "uint256",
                "name": "_subtractedValue"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getEVMScriptRegistry",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "PUBKEY_LENGTH",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "SET_EL_REWARDS_VAULT_ROLE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "transfer",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_recipient"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getDepositContract",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getBeaconStat",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "depositedValidators"
            },
            {
                "type": "uint256",
                "name": "beaconValidators"
            },
            {
                "type": "uint256",
                "name": "beaconBalance"
            }
        ]
    },
    {
        "type": "function",
        "name": "removeStakingLimit",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "BURN_ROLE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getFee",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint16",
                "name": "feeBasisPoints"
            }
        ]
    },
    {
        "type": "function",
        "name": "kernel",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getTotalShares",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "allowance",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_owner"
            },
            {
                "type": "address",
                "name": "_spender"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isPetrified",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "setProtocolContracts",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_oracle"
            },
            {
                "type": "address",
                "name": "_treasury"
            },
            {
                "type": "address",
                "name": "_insuranceFund"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setWithdrawalCredentials",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_withdrawalCredentials"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "STAKING_PAUSE_ROLE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "depositBufferedEther",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "burnShares",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_account"
            },
            {
                "type": "uint256",
                "name": "_sharesAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "newTotalShares"
            }
        ]
    },
    {
        "type": "function",
        "name": "sharesOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_account"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "pauseStaking",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getTotalELRewardsCollected",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "fallback",
        "stateMutability": "payable"
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ScriptResult",
        "inputs": [
            {
                "type": "address",
                "name": "executor",
                "indexed": true
            },
            {
                "type": "bytes",
                "name": "script",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "input",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "returnData",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RecoverToVault",
        "inputs": [
            {
                "type": "address",
                "name": "vault",
                "indexed": true
            },
            {
                "type": "address",
                "name": "token",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TransferShares",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "sharesValue",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SharesBurnt",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "preRebaseTokenAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "postRebaseTokenAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "sharesAmount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Stopped",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Resumed",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Transfer",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "value",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Approval",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "spender",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "value",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "StakingPaused",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "StakingResumed",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "StakingLimitSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "maxStakeLimit",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "stakeLimitIncreasePerBlock",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "StakingLimitRemoved",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ProtocolContactsSet",
        "inputs": [
            {
                "type": "address",
                "name": "oracle",
                "indexed": false
            },
            {
                "type": "address",
                "name": "treasury",
                "indexed": false
            },
            {
                "type": "address",
                "name": "insuranceFund",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FeeSet",
        "inputs": [
            {
                "type": "uint16",
                "name": "feeBasisPoints",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FeeDistributionSet",
        "inputs": [
            {
                "type": "uint16",
                "name": "treasuryFeeBasisPoints",
                "indexed": false
            },
            {
                "type": "uint16",
                "name": "insuranceFeeBasisPoints",
                "indexed": false
            },
            {
                "type": "uint16",
                "name": "operatorsFeeBasisPoints",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ELRewardsReceived",
        "inputs": [
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ELRewardsWithdrawalLimitSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "limitPoints",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "WithdrawalCredentialsSet",
        "inputs": [
            {
                "type": "bytes32",
                "name": "withdrawalCredentials",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ELRewardsVaultSet",
        "inputs": [
            {
                "type": "address",
                "name": "executionLayerRewardsVault",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Submitted",
        "inputs": [
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "address",
                "name": "referral",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Unbuffered",
        "inputs": [
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Withdrawal",
        "inputs": [
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "sentFromBuffer",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "pubkeyHash",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "etherAmount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ETHDistributed",
        "inputs": [
            {
                "type": "uint256",
                "name": "reportTimestamp",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "preCLBalance",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "postCLBalance",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "withdrawalsWithdrawn",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "executionLayerRewardsWithdrawn",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "postBufferedEther",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TokenRebased",
        "inputs": [
            {
                "type": "uint256",
                "name": "reportTimestamp",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timeElapsed",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "preTotalShares",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "preTotalEther",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "postTotalShares",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "postTotalEther",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "sharesMintedAsFees",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "WithdrawalsReceived",
        "inputs": [
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CLValidatorsUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "reportTimestamp",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "preCLValidators",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "postCLValidators",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LidoLocatorSet",
        "inputs": [
            {
                "type": "address",
                "name": "lidoLocator",
                "indexed": false
            }
        ]
    }
]
