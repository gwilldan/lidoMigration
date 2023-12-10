export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "lidoLocator"
            },
            {
                "type": "address",
                "name": "lido"
            },
            {
                "type": "address",
                "name": "legacyOracle"
            },
            {
                "type": "uint256",
                "name": "secondsPerSlot"
            },
            {
                "type": "uint256",
                "name": "genesisTime"
            }
        ]
    },
    {
        "type": "error",
        "name": "AddressCannotBeSame",
        "inputs": []
    },
    {
        "type": "error",
        "name": "AddressCannotBeZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "AdminCannotBeZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CannotSubmitExtraDataBeforeMainData",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ExtraDataAlreadyProcessed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ExtraDataHashCannotBeZeroForNonEmptyData",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ExtraDataItemsCountCannotBeZeroForNonEmptyData",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ExtraDataListOnlySupportsSingleTx",
        "inputs": []
    },
    {
        "type": "error",
        "name": "IncorrectOracleMigration",
        "inputs": [
            {
                "type": "uint256",
                "name": "code"
            }
        ]
    },
    {
        "type": "error",
        "name": "InitialRefSlotCannotBeLessThanProcessingOne",
        "inputs": [
            {
                "type": "uint256",
                "name": "initialRefSlot"
            },
            {
                "type": "uint256",
                "name": "processingRefSlot"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidContractVersionIncrement",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidExitedValidatorsData",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidExtraDataItem",
        "inputs": [
            {
                "type": "uint256",
                "name": "itemIndex"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidExtraDataSortOrder",
        "inputs": [
            {
                "type": "uint256",
                "name": "itemIndex"
            }
        ]
    },
    {
        "type": "error",
        "name": "LegacyOracleCannotBeZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LidoCannotBeZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LidoLocatorCannotBeZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NonZeroContractVersionOnInit",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OnlyConsensusContractCanSubmitReport",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ProcessingDeadlineMissed",
        "inputs": [
            {
                "type": "uint256",
                "name": "deadline"
            }
        ]
    },
    {
        "type": "error",
        "name": "RefSlotAlreadyProcessing",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RefSlotCannotDecrease",
        "inputs": [
            {
                "type": "uint256",
                "name": "refSlot"
            },
            {
                "type": "uint256",
                "name": "prevRefSlot"
            }
        ]
    },
    {
        "type": "error",
        "name": "RefSlotMustBeGreaterThanProcessingOne",
        "inputs": [
            {
                "type": "uint256",
                "name": "refSlot"
            },
            {
                "type": "uint256",
                "name": "processingRefSlot"
            }
        ]
    },
    {
        "type": "error",
        "name": "SenderNotAllowed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UnexpectedChainConfig",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UnexpectedConsensusVersion",
        "inputs": [
            {
                "type": "uint256",
                "name": "expectedVersion"
            },
            {
                "type": "uint256",
                "name": "receivedVersion"
            }
        ]
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
        "name": "UnexpectedDataHash",
        "inputs": [
            {
                "type": "bytes32",
                "name": "consensusHash"
            },
            {
                "type": "bytes32",
                "name": "receivedHash"
            }
        ]
    },
    {
        "type": "error",
        "name": "UnexpectedExtraDataFormat",
        "inputs": [
            {
                "type": "uint256",
                "name": "expectedFormat"
            },
            {
                "type": "uint256",
                "name": "receivedFormat"
            }
        ]
    },
    {
        "type": "error",
        "name": "UnexpectedExtraDataHash",
        "inputs": [
            {
                "type": "bytes32",
                "name": "consensusHash"
            },
            {
                "type": "bytes32",
                "name": "receivedHash"
            }
        ]
    },
    {
        "type": "error",
        "name": "UnexpectedExtraDataIndex",
        "inputs": [
            {
                "type": "uint256",
                "name": "expectedIndex"
            },
            {
                "type": "uint256",
                "name": "receivedIndex"
            }
        ]
    },
    {
        "type": "error",
        "name": "UnexpectedExtraDataItemsCount",
        "inputs": [
            {
                "type": "uint256",
                "name": "expectedCount"
            },
            {
                "type": "uint256",
                "name": "receivedCount"
            }
        ]
    },
    {
        "type": "error",
        "name": "UnexpectedRefSlot",
        "inputs": [
            {
                "type": "uint256",
                "name": "consensusRefSlot"
            },
            {
                "type": "uint256",
                "name": "dataRefSlot"
            }
        ]
    },
    {
        "type": "error",
        "name": "UnsupportedExtraDataFormat",
        "inputs": [
            {
                "type": "uint256",
                "name": "format"
            }
        ]
    },
    {
        "type": "error",
        "name": "UnsupportedExtraDataType",
        "inputs": [
            {
                "type": "uint256",
                "name": "itemIndex"
            },
            {
                "type": "uint256",
                "name": "dataType"
            }
        ]
    },
    {
        "type": "error",
        "name": "VersionCannotBeSame",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ConsensusHashContractSet",
        "inputs": [
            {
                "type": "address",
                "name": "addr",
                "indexed": true
            },
            {
                "type": "address",
                "name": "prevAddr",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ConsensusVersionSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "version",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "prevVersion",
                "indexed": true
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
        "name": "ExtraDataSubmitted",
        "inputs": [
            {
                "type": "uint256",
                "name": "refSlot",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "itemsProcessed",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "itemsCount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ProcessingStarted",
        "inputs": [
            {
                "type": "uint256",
                "name": "refSlot",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "hash",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ReportSubmitted",
        "inputs": [
            {
                "type": "uint256",
                "name": "refSlot",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "hash",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "processingDeadlineTime",
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
        "name": "WarnExtraDataIncompleteProcessing",
        "inputs": [
            {
                "type": "uint256",
                "name": "refSlot",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "processedItemsCount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "itemsCount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "WarnProcessingMissed",
        "inputs": [
            {
                "type": "uint256",
                "name": "refSlot",
                "indexed": true
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
        "name": "EXTRA_DATA_FORMAT_EMPTY",
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
        "name": "EXTRA_DATA_FORMAT_LIST",
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
        "name": "EXTRA_DATA_TYPE_EXITED_VALIDATORS",
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
        "name": "EXTRA_DATA_TYPE_STUCK_VALIDATORS",
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
        "name": "GENESIS_TIME",
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
        "name": "LEGACY_ORACLE",
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
        "name": "LIDO",
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
        "name": "LOCATOR",
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
        "name": "MANAGE_CONSENSUS_CONTRACT_ROLE",
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
        "name": "MANAGE_CONSENSUS_VERSION_ROLE",
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
        "name": "SECONDS_PER_SLOT",
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
        "name": "SUBMIT_DATA_ROLE",
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
        "name": "getConsensusContract",
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
        "name": "getConsensusReport",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": "hash"
            },
            {
                "type": "uint256",
                "name": "refSlot"
            },
            {
                "type": "uint256",
                "name": "processingDeadlineTime"
            },
            {
                "type": "bool",
                "name": "processingStarted"
            }
        ]
    },
    {
        "type": "function",
        "name": "getConsensusVersion",
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
        "name": "getLastProcessingRefSlot",
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
        "name": "getProcessingState",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "tuple",
                "name": "result",
                "components": [
                    {
                        "type": "uint256",
                        "name": "currentFrameRefSlot"
                    },
                    {
                        "type": "uint256",
                        "name": "processingDeadlineTime"
                    },
                    {
                        "type": "bytes32",
                        "name": "mainDataHash"
                    },
                    {
                        "type": "bool",
                        "name": "mainDataSubmitted"
                    },
                    {
                        "type": "bytes32",
                        "name": "extraDataHash"
                    },
                    {
                        "type": "uint256",
                        "name": "extraDataFormat"
                    },
                    {
                        "type": "bool",
                        "name": "extraDataSubmitted"
                    },
                    {
                        "type": "uint256",
                        "name": "extraDataItemsCount"
                    },
                    {
                        "type": "uint256",
                        "name": "extraDataItemsSubmitted"
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
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "admin"
            },
            {
                "type": "address",
                "name": "consensusContract"
            },
            {
                "type": "uint256",
                "name": "consensusVersion"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "initializeWithoutMigration",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "admin"
            },
            {
                "type": "address",
                "name": "consensusContract"
            },
            {
                "type": "uint256",
                "name": "consensusVersion"
            },
            {
                "type": "uint256",
                "name": "lastProcessingRefSlot"
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
        "name": "setConsensusContract",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "addr"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setConsensusVersion",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "version"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "submitConsensusReport",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "reportHash"
            },
            {
                "type": "uint256",
                "name": "refSlot"
            },
            {
                "type": "uint256",
                "name": "deadline"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "submitReportData",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "data",
                "components": [
                    {
                        "type": "uint256",
                        "name": "consensusVersion"
                    },
                    {
                        "type": "uint256",
                        "name": "refSlot"
                    },
                    {
                        "type": "uint256",
                        "name": "numValidators"
                    },
                    {
                        "type": "uint256",
                        "name": "clBalanceGwei"
                    },
                    {
                        "type": "uint256[]",
                        "name": "stakingModuleIdsWithNewlyExitedValidators"
                    },
                    {
                        "type": "uint256[]",
                        "name": "numExitedValidatorsByStakingModule"
                    },
                    {
                        "type": "uint256",
                        "name": "withdrawalVaultBalance"
                    },
                    {
                        "type": "uint256",
                        "name": "elRewardsVaultBalance"
                    },
                    {
                        "type": "uint256",
                        "name": "sharesRequestedToBurn"
                    },
                    {
                        "type": "uint256[]",
                        "name": "withdrawalFinalizationBatches"
                    },
                    {
                        "type": "uint256",
                        "name": "simulatedShareRate"
                    },
                    {
                        "type": "bool",
                        "name": "isBunkerMode"
                    },
                    {
                        "type": "uint256",
                        "name": "extraDataFormat"
                    },
                    {
                        "type": "bytes32",
                        "name": "extraDataHash"
                    },
                    {
                        "type": "uint256",
                        "name": "extraDataItemsCount"
                    }
                ]
            },
            {
                "type": "uint256",
                "name": "contractVersion"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "submitReportExtraDataEmpty",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "submitReportExtraDataList",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "items"
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
    }
]
