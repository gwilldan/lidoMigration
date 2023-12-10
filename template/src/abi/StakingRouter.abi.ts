export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_depositContract"
            }
        ]
    },
    {
        "type": "error",
        "name": "AppAuthLidoFailed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ArraysLengthMismatch",
        "inputs": [
            {
                "type": "uint256",
                "name": "firstArrayLength"
            },
            {
                "type": "uint256",
                "name": "secondArrayLength"
            }
        ]
    },
    {
        "type": "error",
        "name": "DepositContractZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "DirectETHTransfer",
        "inputs": []
    },
    {
        "type": "error",
        "name": "EmptyWithdrawalsCredentials",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ExitedValidatorsCountCannotDecrease",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidContractVersionIncrement",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidDepositsValue",
        "inputs": [
            {
                "type": "uint256",
                "name": "etherValue"
            },
            {
                "type": "uint256",
                "name": "depositsCount"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidPublicKeysBatchLength",
        "inputs": [
            {
                "type": "uint256",
                "name": "actual"
            },
            {
                "type": "uint256",
                "name": "expected"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidReportData",
        "inputs": [
            {
                "type": "uint256",
                "name": "code"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidSignaturesBatchLength",
        "inputs": [
            {
                "type": "uint256",
                "name": "actual"
            },
            {
                "type": "uint256",
                "name": "expected"
            }
        ]
    },
    {
        "type": "error",
        "name": "NonZeroContractVersionOnInit",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ReportedExitedValidatorsExceedDeposited",
        "inputs": [
            {
                "type": "uint256",
                "name": "reportedExitedValidatorsCount"
            },
            {
                "type": "uint256",
                "name": "depositedValidatorsCount"
            }
        ]
    },
    {
        "type": "error",
        "name": "StakingModuleAddressExists",
        "inputs": []
    },
    {
        "type": "error",
        "name": "StakingModuleNotActive",
        "inputs": []
    },
    {
        "type": "error",
        "name": "StakingModuleNotPaused",
        "inputs": []
    },
    {
        "type": "error",
        "name": "StakingModuleStatusTheSame",
        "inputs": []
    },
    {
        "type": "error",
        "name": "StakingModuleUnregistered",
        "inputs": []
    },
    {
        "type": "error",
        "name": "StakingModuleWrongName",
        "inputs": []
    },
    {
        "type": "error",
        "name": "StakingModulesLimitExceeded",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UnexpectedContractVersion",
        "inputs": [
            {
                "type": "uint256",
                "name": "expected"
            },
            {
                "type": "uint256",
                "name": "received"
            }
        ]
    },
    {
        "type": "error",
        "name": "UnexpectedCurrentValidatorsCount",
        "inputs": [
            {
                "type": "uint256",
                "name": "currentModuleExitedValidatorsCount"
            },
            {
                "type": "uint256",
                "name": "currentNodeOpExitedValidatorsCount"
            },
            {
                "type": "uint256",
                "name": "currentNodeOpStuckValidatorsCount"
            }
        ]
    },
    {
        "type": "error",
        "name": "UnrecoverableModuleError",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ValueOver100Percent",
        "inputs": [
            {
                "type": "string",
                "name": "field"
            }
        ]
    },
    {
        "type": "error",
        "name": "ZeroAddress",
        "inputs": [
            {
                "type": "string",
                "name": "field"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ContractVersionSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "version",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExitedAndStuckValidatorsCountsUpdateFailed",
        "inputs": [
            {
                "type": "uint256",
                "name": "stakingModuleId",
                "indexed": true
            },
            {
                "type": "bytes",
                "name": "lowLevelRevertData",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RewardsMintedReportFailed",
        "inputs": [
            {
                "type": "uint256",
                "name": "stakingModuleId",
                "indexed": true
            },
            {
                "type": "bytes",
                "name": "lowLevelRevertData",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleAdminChanged",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "previousAdminRole",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "newAdminRole",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleGranted",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleRevoked",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "StakingModuleAdded",
        "inputs": [
            {
                "type": "uint256",
                "name": "stakingModuleId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "stakingModule",
                "indexed": false
            },
            {
                "type": "string",
                "name": "name",
                "indexed": false
            },
            {
                "type": "address",
                "name": "createdBy",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "StakingModuleExitedValidatorsIncompleteReporting",
        "inputs": [
            {
                "type": "uint256",
                "name": "stakingModuleId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "unreportedExitedValidatorsCount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "StakingModuleFeesSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "stakingModuleId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "stakingModuleFee",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "treasuryFee",
                "indexed": false
            },
            {
                "type": "address",
                "name": "setBy",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "StakingModuleStatusSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "stakingModuleId",
                "indexed": true
            },
            {
                "type": "uint8",
                "name": "status",
                "indexed": false
            },
            {
                "type": "address",
                "name": "setBy",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "StakingModuleTargetShareSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "stakingModuleId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "targetShare",
                "indexed": false
            },
            {
                "type": "address",
                "name": "setBy",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "StakingRouterETHDeposited",
        "inputs": [
            {
                "type": "uint256",
                "name": "stakingModuleId",
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
        "name": "WithdrawalCredentialsSet",
        "inputs": [
            {
                "type": "bytes32",
                "name": "withdrawalCredentials",
                "indexed": false
            },
            {
                "type": "address",
                "name": "setBy",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "WithdrawalsCredentialsChangeFailed",
        "inputs": [
            {
                "type": "uint256",
                "name": "stakingModuleId",
                "indexed": true
            },
            {
                "type": "bytes",
                "name": "lowLevelRevertData",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "DEFAULT_ADMIN_ROLE",
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
        "name": "DEPOSIT_CONTRACT",
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
        "name": "FEE_PRECISION_POINTS",
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
        "name": "MANAGE_WITHDRAWAL_CREDENTIALS_ROLE",
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
        "name": "MAX_STAKING_MODULES_COUNT",
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
        "name": "MAX_STAKING_MODULE_NAME_LENGTH",
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
        "name": "REPORT_EXITED_VALIDATORS_ROLE",
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
        "name": "REPORT_REWARDS_MINTED_ROLE",
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
        "name": "STAKING_MODULE_MANAGE_ROLE",
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
        "name": "STAKING_MODULE_PAUSE_ROLE",
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
        "name": "STAKING_MODULE_RESUME_ROLE",
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
        "name": "TOTAL_BASIS_POINTS",
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
        "name": "UNSAFE_SET_EXITED_VALIDATORS_ROLE",
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
        "name": "addStakingModule",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "_name"
            },
            {
                "type": "address",
                "name": "_stakingModuleAddress"
            },
            {
                "type": "uint256",
                "name": "_targetShare"
            },
            {
                "type": "uint256",
                "name": "_stakingModuleFee"
            },
            {
                "type": "uint256",
                "name": "_treasuryFee"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "deposit",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "_depositsCount"
            },
            {
                "type": "uint256",
                "name": "_stakingModuleId"
            },
            {
                "type": "bytes",
                "name": "_depositCalldata"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getAllNodeOperatorDigests",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "name": "",
                "components": [
                    {
                        "type": "uint256",
                        "name": "id"
                    },
                    {
                        "type": "bool",
                        "name": "isActive"
                    },
                    {
                        "type": "tuple",
                        "name": "summary",
                        "components": [
                            {
                                "type": "bool",
                                "name": "isTargetLimitActive"
                            },
                            {
                                "type": "uint256",
                                "name": "targetValidatorsCount"
                            },
                            {
                                "type": "uint256",
                                "name": "stuckValidatorsCount"
                            },
                            {
                                "type": "uint256",
                                "name": "refundedValidatorsCount"
                            },
                            {
                                "type": "uint256",
                                "name": "stuckPenaltyEndTimestamp"
                            },
                            {
                                "type": "uint256",
                                "name": "totalExitedValidators"
                            },
                            {
                                "type": "uint256",
                                "name": "totalDepositedValidators"
                            },
                            {
                                "type": "uint256",
                                "name": "depositableValidatorsCount"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getAllStakingModuleDigests",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "tuple[]",
                "name": "",
                "components": [
                    {
                        "type": "uint256",
                        "name": "nodeOperatorsCount"
                    },
                    {
                        "type": "uint256",
                        "name": "activeNodeOperatorsCount"
                    },
                    {
                        "type": "tuple",
                        "name": "state",
                        "components": [
                            {
                                "type": "uint24",
                                "name": "id"
                            },
                            {
                                "type": "address",
                                "name": "stakingModuleAddress"
                            },
                            {
                                "type": "uint16",
                                "name": "stakingModuleFee"
                            },
                            {
                                "type": "uint16",
                                "name": "treasuryFee"
                            },
                            {
                                "type": "uint16",
                                "name": "targetShare"
                            },
                            {
                                "type": "uint8",
                                "name": "status"
                            },
                            {
                                "type": "string",
                                "name": "name"
                            },
                            {
                                "type": "uint64",
                                "name": "lastDepositAt"
                            },
                            {
                                "type": "uint256",
                                "name": "lastDepositBlock"
                            },
                            {
                                "type": "uint256",
                                "name": "exitedValidatorsCount"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "summary",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "totalExitedValidators"
                            },
                            {
                                "type": "uint256",
                                "name": "totalDepositedValidators"
                            },
                            {
                                "type": "uint256",
                                "name": "depositableValidatorsCount"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getContractVersion",
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
        "name": "getDepositsAllocation",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_depositsCount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "allocated"
            },
            {
                "type": "uint256[]",
                "name": "allocations"
            }
        ]
    },
    {
        "type": "function",
        "name": "getLido",
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
        "name": "getNodeOperatorDigests",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
            },
            {
                "type": "uint256[]",
                "name": "_nodeOperatorIds"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "name": "digests",
                "components": [
                    {
                        "type": "uint256",
                        "name": "id"
                    },
                    {
                        "type": "bool",
                        "name": "isActive"
                    },
                    {
                        "type": "tuple",
                        "name": "summary",
                        "components": [
                            {
                                "type": "bool",
                                "name": "isTargetLimitActive"
                            },
                            {
                                "type": "uint256",
                                "name": "targetValidatorsCount"
                            },
                            {
                                "type": "uint256",
                                "name": "stuckValidatorsCount"
                            },
                            {
                                "type": "uint256",
                                "name": "refundedValidatorsCount"
                            },
                            {
                                "type": "uint256",
                                "name": "stuckPenaltyEndTimestamp"
                            },
                            {
                                "type": "uint256",
                                "name": "totalExitedValidators"
                            },
                            {
                                "type": "uint256",
                                "name": "totalDepositedValidators"
                            },
                            {
                                "type": "uint256",
                                "name": "depositableValidatorsCount"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getNodeOperatorDigests",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
            },
            {
                "type": "uint256",
                "name": "_offset"
            },
            {
                "type": "uint256",
                "name": "_limit"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "name": "",
                "components": [
                    {
                        "type": "uint256",
                        "name": "id"
                    },
                    {
                        "type": "bool",
                        "name": "isActive"
                    },
                    {
                        "type": "tuple",
                        "name": "summary",
                        "components": [
                            {
                                "type": "bool",
                                "name": "isTargetLimitActive"
                            },
                            {
                                "type": "uint256",
                                "name": "targetValidatorsCount"
                            },
                            {
                                "type": "uint256",
                                "name": "stuckValidatorsCount"
                            },
                            {
                                "type": "uint256",
                                "name": "refundedValidatorsCount"
                            },
                            {
                                "type": "uint256",
                                "name": "stuckPenaltyEndTimestamp"
                            },
                            {
                                "type": "uint256",
                                "name": "totalExitedValidators"
                            },
                            {
                                "type": "uint256",
                                "name": "totalDepositedValidators"
                            },
                            {
                                "type": "uint256",
                                "name": "depositableValidatorsCount"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getNodeOperatorSummary",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
            },
            {
                "type": "uint256",
                "name": "_nodeOperatorId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "summary",
                "components": [
                    {
                        "type": "bool",
                        "name": "isTargetLimitActive"
                    },
                    {
                        "type": "uint256",
                        "name": "targetValidatorsCount"
                    },
                    {
                        "type": "uint256",
                        "name": "stuckValidatorsCount"
                    },
                    {
                        "type": "uint256",
                        "name": "refundedValidatorsCount"
                    },
                    {
                        "type": "uint256",
                        "name": "stuckPenaltyEndTimestamp"
                    },
                    {
                        "type": "uint256",
                        "name": "totalExitedValidators"
                    },
                    {
                        "type": "uint256",
                        "name": "totalDepositedValidators"
                    },
                    {
                        "type": "uint256",
                        "name": "depositableValidatorsCount"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getRoleAdmin",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getRoleMember",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "uint256",
                "name": "index"
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
        "name": "getRoleMemberCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
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
        "name": "getStakingFeeAggregateDistribution",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint96",
                "name": "modulesFee"
            },
            {
                "type": "uint96",
                "name": "treasuryFee"
            },
            {
                "type": "uint256",
                "name": "basePrecision"
            }
        ]
    },
    {
        "type": "function",
        "name": "getStakingFeeAggregateDistributionE4Precision",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint16",
                "name": "modulesFee"
            },
            {
                "type": "uint16",
                "name": "treasuryFee"
            }
        ]
    },
    {
        "type": "function",
        "name": "getStakingModule",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "uint24",
                        "name": "id"
                    },
                    {
                        "type": "address",
                        "name": "stakingModuleAddress"
                    },
                    {
                        "type": "uint16",
                        "name": "stakingModuleFee"
                    },
                    {
                        "type": "uint16",
                        "name": "treasuryFee"
                    },
                    {
                        "type": "uint16",
                        "name": "targetShare"
                    },
                    {
                        "type": "uint8",
                        "name": "status"
                    },
                    {
                        "type": "string",
                        "name": "name"
                    },
                    {
                        "type": "uint64",
                        "name": "lastDepositAt"
                    },
                    {
                        "type": "uint256",
                        "name": "lastDepositBlock"
                    },
                    {
                        "type": "uint256",
                        "name": "exitedValidatorsCount"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getStakingModuleActiveValidatorsCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "activeValidatorsCount"
            }
        ]
    },
    {
        "type": "function",
        "name": "getStakingModuleDigests",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "_stakingModuleIds"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "name": "digests",
                "components": [
                    {
                        "type": "uint256",
                        "name": "nodeOperatorsCount"
                    },
                    {
                        "type": "uint256",
                        "name": "activeNodeOperatorsCount"
                    },
                    {
                        "type": "tuple",
                        "name": "state",
                        "components": [
                            {
                                "type": "uint24",
                                "name": "id"
                            },
                            {
                                "type": "address",
                                "name": "stakingModuleAddress"
                            },
                            {
                                "type": "uint16",
                                "name": "stakingModuleFee"
                            },
                            {
                                "type": "uint16",
                                "name": "treasuryFee"
                            },
                            {
                                "type": "uint16",
                                "name": "targetShare"
                            },
                            {
                                "type": "uint8",
                                "name": "status"
                            },
                            {
                                "type": "string",
                                "name": "name"
                            },
                            {
                                "type": "uint64",
                                "name": "lastDepositAt"
                            },
                            {
                                "type": "uint256",
                                "name": "lastDepositBlock"
                            },
                            {
                                "type": "uint256",
                                "name": "exitedValidatorsCount"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "summary",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "totalExitedValidators"
                            },
                            {
                                "type": "uint256",
                                "name": "totalDepositedValidators"
                            },
                            {
                                "type": "uint256",
                                "name": "depositableValidatorsCount"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getStakingModuleIds",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256[]",
                "name": "stakingModuleIds"
            }
        ]
    },
    {
        "type": "function",
        "name": "getStakingModuleIsActive",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
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
        "name": "getStakingModuleIsDepositsPaused",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
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
        "name": "getStakingModuleIsStopped",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
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
        "name": "getStakingModuleLastDepositBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
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
        "name": "getStakingModuleMaxDepositsCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
            },
            {
                "type": "uint256",
                "name": "_maxDepositsValue"
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
        "name": "getStakingModuleNonce",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
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
        "name": "getStakingModuleStatus",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
            }
        ],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getStakingModuleSummary",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "summary",
                "components": [
                    {
                        "type": "uint256",
                        "name": "totalExitedValidators"
                    },
                    {
                        "type": "uint256",
                        "name": "totalDepositedValidators"
                    },
                    {
                        "type": "uint256",
                        "name": "depositableValidatorsCount"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getStakingModules",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "tuple[]",
                "name": "res",
                "components": [
                    {
                        "type": "uint24",
                        "name": "id"
                    },
                    {
                        "type": "address",
                        "name": "stakingModuleAddress"
                    },
                    {
                        "type": "uint16",
                        "name": "stakingModuleFee"
                    },
                    {
                        "type": "uint16",
                        "name": "treasuryFee"
                    },
                    {
                        "type": "uint16",
                        "name": "targetShare"
                    },
                    {
                        "type": "uint8",
                        "name": "status"
                    },
                    {
                        "type": "string",
                        "name": "name"
                    },
                    {
                        "type": "uint64",
                        "name": "lastDepositAt"
                    },
                    {
                        "type": "uint256",
                        "name": "lastDepositBlock"
                    },
                    {
                        "type": "uint256",
                        "name": "exitedValidatorsCount"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getStakingModulesCount",
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
        "name": "getStakingRewardsDistribution",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address[]",
                "name": "recipients"
            },
            {
                "type": "uint256[]",
                "name": "stakingModuleIds"
            },
            {
                "type": "uint96[]",
                "name": "stakingModuleFees"
            },
            {
                "type": "uint96",
                "name": "totalFee"
            },
            {
                "type": "uint256",
                "name": "precisionPoints"
            }
        ]
    },
    {
        "type": "function",
        "name": "getTotalFeeE4Precision",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint16",
                "name": "totalFee"
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
        "name": "grantRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "hasRole",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
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
        "name": "hasStakingModule",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
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
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_admin"
            },
            {
                "type": "address",
                "name": "_lido"
            },
            {
                "type": "bytes32",
                "name": "_withdrawalCredentials"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "onValidatorsCountsByNodeOperatorReportingFinished",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "pauseStakingModule",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "renounceRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "reportRewardsMinted",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "_stakingModuleIds"
            },
            {
                "type": "uint256[]",
                "name": "_totalShares"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "reportStakingModuleExitedValidatorsCountByNodeOperator",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
            },
            {
                "type": "bytes",
                "name": "_nodeOperatorIds"
            },
            {
                "type": "bytes",
                "name": "_exitedValidatorsCounts"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "reportStakingModuleStuckValidatorsCountByNodeOperator",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
            },
            {
                "type": "bytes",
                "name": "_nodeOperatorIds"
            },
            {
                "type": "bytes",
                "name": "_stuckValidatorsCounts"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "resumeStakingModule",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "revokeRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setStakingModuleStatus",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
            },
            {
                "type": "uint8",
                "name": "_status"
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
        "name": "supportsInterface",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId"
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
        "name": "unsafeSetExitedValidatorsCount",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
            },
            {
                "type": "uint256",
                "name": "_nodeOperatorId"
            },
            {
                "type": "bool",
                "name": "_triggerUpdateFinish"
            },
            {
                "type": "tuple",
                "name": "_correction",
                "components": [
                    {
                        "type": "uint256",
                        "name": "currentModuleExitedValidatorsCount"
                    },
                    {
                        "type": "uint256",
                        "name": "currentNodeOperatorExitedValidatorsCount"
                    },
                    {
                        "type": "uint256",
                        "name": "currentNodeOperatorStuckValidatorsCount"
                    },
                    {
                        "type": "uint256",
                        "name": "newModuleExitedValidatorsCount"
                    },
                    {
                        "type": "uint256",
                        "name": "newNodeOperatorExitedValidatorsCount"
                    },
                    {
                        "type": "uint256",
                        "name": "newNodeOperatorStuckValidatorsCount"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateExitedValidatorsCountByStakingModule",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "_stakingModuleIds"
            },
            {
                "type": "uint256[]",
                "name": "_exitedValidatorsCounts"
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
        "name": "updateRefundedValidatorsCount",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
            },
            {
                "type": "uint256",
                "name": "_nodeOperatorId"
            },
            {
                "type": "uint256",
                "name": "_refundedValidatorsCount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateStakingModule",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
            },
            {
                "type": "uint256",
                "name": "_targetShare"
            },
            {
                "type": "uint256",
                "name": "_stakingModuleFee"
            },
            {
                "type": "uint256",
                "name": "_treasuryFee"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateTargetValidatorsLimits",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_stakingModuleId"
            },
            {
                "type": "uint256",
                "name": "_nodeOperatorId"
            },
            {
                "type": "bool",
                "name": "_isTargetLimitActive"
            },
            {
                "type": "uint256",
                "name": "_targetLimit"
            }
        ],
        "outputs": []
    },
    {
        "type": "receive",
        "stateMutability": "payable"
    }
]
